// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Furuno Sweden',
  plugins: [
    {
      use: "gridsome-source-directus",
      options: {
        apiUrl: "https://cms.furuno.se",
        project: "furuno_new_cms",
        collections: [
          {
            name: 'products',
            fields: '*.*.*',
          }
        ]
      }
    }
  ],
  templates: {
    products: [
      {
        path: '/product/:slug',
        component: './src/templates/Product.vue'
      },
    ]
  }
}
