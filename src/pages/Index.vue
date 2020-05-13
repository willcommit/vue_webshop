<template>
  <Layout>
    <Carousel></Carousel>
    <Headline></Headline>
    <Grid></Grid>
  </Layout>
</template>

<script>
import Carousel from '~/components/Carousel.vue'
import Headline from '~/components/Headline.vue'
import Grid from '~/components/Grid.vue'

export default {
  components: {
    Carousel,
    Headline,
    Grid
  },
  metaInfo: {
    title: 'Furuno Test Site',
    meta: [
      { charset: 'utf-8'},
      { name: "author", content: "Loxodromic" },
      { name: "description", content: "Test Site for evaluation of Furuno future website"},
      { name: "keywords", content: "test, site, furuno, marine electronics, radar, ecdis, gps, navigation"}
    ]
  }
}
</script>

<style>

</style>
