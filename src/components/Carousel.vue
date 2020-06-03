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
      <a v-for="edge in $static.allProducts.edges"
        :key="edge.node.id"
        :href="edge.node.path">
        <b-carousel-slide
          :img-src= edge.node.promoter.data.full_url
          img-alt="img"
        ></b-carousel-slide>
      </a>
    </b-carousel>
</template>


<static-query>
{
  allProducts (filter: { promote: { eq: true }}){
    edges{
      node{
        path
        promote
        promoter{
          id
          data{
            full_url
            url (width: 1920, height: 960)
          }
        }
      }  
    }
  }
}
</static-query>

<script>
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
  }
</script>