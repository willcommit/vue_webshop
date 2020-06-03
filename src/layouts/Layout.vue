<template>
  <div class="layout">
    <NavBar></NavBar>
    <slot/>
    <Footer></Footer>
  </div>
</template>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>

<style>
  body {
    font-family: Roboto,"Helvetica Neue",Arial,sans-serif;
    margin:0;
    padding:0;
    line-height: 1.5;
  }

  .layout {
    max-width: 1920px;
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
  }

  .nav__link {
    margin-left: 20px;
  }
</style>

<script>
  import NavBar from '~/components/NavBar.vue'
  import Footer from '~/components/Footer.vue'

  export default {
    components: {
      NavBar,
      Footer
    },
  }
</script>