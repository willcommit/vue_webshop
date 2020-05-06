// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// const axios = require('axios')

module.exports = function (api) {
  // api.loadSource(async actions => {
  //   //const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon')
  //   const { data } = await axios.get('http://161.35.65.140/furuno_cms/items/products')

  //   const collection = actions.addCollection({
  //     typeName: 'Product'
  //   })

  //   for (const item of data.data) {
  //     console.log(item.name)
  //     collection.addNode({
  //       model: item.model
  //     })
  //   }
  //  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
