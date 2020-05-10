<template>
  <Layout>
    <NavBar></NavBar>
    <Carousel></Carousel>
    <Headline></Headline>
    <Deck></Deck>
  </Layout>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import Carousel from '~/components/Carousel.vue'
import Headline from '~/components/Headline.vue'
import Deck from '~/components/Deck.vue'

export default {
  components: {
    NavBar,
    Carousel,
    Headline,
    Deck
  }
}
</script>

<style>

</style>
