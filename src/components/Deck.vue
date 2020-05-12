<template>
  <div>
    <b-card-group deck >
        <b-card 
            v-for="product in products"
            :title="product.name"
            :key="product.id"
            :img-src="product.image"
            img-alt="Image" img-top  
        ><b-card-text>
            {{ product.summary }}
          </b-card-text>
        </b-card>
    </b-card-group>

    <b-card-group deck style="margin-top: 2rem">
        <b-card 
            v-for="product in products2"
            :title="product.name"
            :key="product.id"
            :img-src="product.image"
            img-alt="Image" img-top  
        ><b-card-text>
            {{ product.summary }}
          </b-card-text>
        </b-card>
    </b-card-group>
  </div>
</template>


<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        products: [],
        products2: []
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
          'http://161.35.65.140/furuno_cms/items/products?fields=*.*.*')

          const data = results.data.data
          const temp_product = []

          for (const result of data) {
            if (result.status = "published" && result.product_images.length >= 1) {
              const product = {}
              product.id = result.id
              product.name = result.name
              product.summary = result.translations[0].summary
              product.image = result.product_images[0].directus_files_id.data.full_url
              //product.image = result.product_images[0].directus_files_id.data.thumbnails[4].url
              //console.log(product)
              temp_product.push(product)
            }

            this.products = temp_product.slice(0,4)
            this.products2 = temp_product.slice(4,9)       
          }
      } catch (error) {
        console.log(error)
      }
    } 
  }
</script>