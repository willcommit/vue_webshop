<template>
  <div>
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
      <b-carousel-slide
        v-for="promote in promotes"
        :key="promote.id"
        :img-src="promote.promoter.data.full_url"
      ></b-carousel-slide>

    </b-carousel>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        promotes: null,
        urls: [ {key: 0, data: "https://picsum.photos/1024/480/?image=10" }, {key: 1, data: "https://picsum.photos/1024/480/?image=10" }],
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
          'http://161.35.65.140/furuno_cms/items/products?fields=promoter.*')

        this.promotes = results.data.data

        console.log(results.data.data[0].promoter.data.full_url)
        // this.slide_2 = results.data.data[1].promoter.data.full_url
        // this.slide_3 = results.data.data[2].promoter.data.full_url
        // this.slide_4 = results.data.data[3].promoter.data.full_url

      } catch (error) {
        console.log(error)
      }
    } 
  }
</script>