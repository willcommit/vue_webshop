<template>
    <Layout>
        <h1>{{ $page.products.name }}</h1>
        <div v-for="translation in $page.products.translations" :key="translation.id">
            <div v-if="translation.language == 'en'" v-html="translation.features"></div>
        </div>
    </Layout>
</template>

<page-query>
  query($path: String!) {
    products(path: $path) {
      name
      translations {
        language
        features
      }
    }
  }
</page-query>