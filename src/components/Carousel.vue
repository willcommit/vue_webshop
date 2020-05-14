<template>

    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd">

      <!-- Text slides with image -->
      <a v-for="promote in promotes"
        :key="promote.id"
        :href= promote.path>
      <b-carousel-slide
        :img-src="promote.url"
        img-alt="img"
      ></b-carousel-slide>
      </a>
    </b-carousel>

</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        promotes: []
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    },
    async mounted () {
      try {
        const results = await axios.get(
          'https://cms.furuno.se/furuno_new_cms/items/products?fields=slug,promote,promoter.*')

          const data = results.data.data

          for (const result of data) {
            if (result.promote) {
              const promoter_image = {}
              promoter_image.path = "/product/" + result.slug
              promoter_image.id = result.promoter.id
              promoter_image.url = result.promoter.data.full_url

              this.promotes.push(promoter_image)
            }
          }
      } catch (error) {
        console.log(error)
      }
    } 
  }
</script>