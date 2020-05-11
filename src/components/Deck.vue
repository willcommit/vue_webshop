<template>
    <b-card-group deck>
        <b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
          <b-card-text>
            This is a wider card with supporting text below as a natural lead-in to additional content.
            This content is a little bit longer.
          </b-card-text>
          
        </b-card>

        <b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
          <b-card-text>
            This card has supporting text below as a natural lead-in to additional content.
          </b-card-text>
          
        </b-card>

        <b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
          <b-card-text>
            This is a wider card with supporting text below as a natural lead-in to additional content.
            This card has even longer content than the first to show that equal height action.
          </b-card-text>
          
        </b-card>
    </b-card-group>
</template>


<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        slide_1: null,
        slide_2: null,
        slide_3: null,
        slide_4: null,
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
          'http://161.35.65.140/furuno_cms/items/products?fields=*.*')

        this.slide_1 = results.data.data[0].promoter.data.full_url
        this.slide_2 = results.data.data[1].promoter.data.full_url
        this.slide_3 = results.data.data[2].promoter.data.full_url
        this.slide_4 = results.data.data[3].promoter.data.full_url

      } catch (error) {
        console.log(error)
      }
    } 
  }
</script>