<template>
     <div class="grid-container">
      
            <b-card
                v-for="product in products" 
                :key= product.id
                :title="product.name"
                :img-src="product.image"
                img-alt="Image" img-top
                class="grid-item"  >
                <b-card-text>
                    {{ product.summary }}
                </b-card-text>

                <template v-slot:footer>
                    <b-button :href= product.path variant="primary" style="background-color: #004EA2;">Learn More</b-button>
                </template>
            </b-card>
        
    </div> 
</template>

<style>
    .grid-container { 
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    }
</style>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        products: [],
      }
    },
    async mounted () {
      try {
        const results = await axios.get(
          'https://cms.furuno.se/furuno_new_cms/items/products?fields=*.*.*')

          const data = results
          

          for (const result of data.data.data) {
            if (result.status == "published" && result.product_images.length >= 1) {
              
              const product = {}
              product.path = "/product/" + result.slug
              product.id = result.id
              product.name = result.name
              product.summary = result.translations[0].summary
              product.image = result.product_images[0].directus_files_id.data.full_url
              //product.image = result.product_images[0].directus_files_id.data.thumbnails[4].url
              this.products.push(product)
            }
  
          }
      } catch (error) {
        console.log(error)
      }
    } 
  }
</script>