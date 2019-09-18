<template>
  <vs-row vs-justify="flex-start" class="grid-spacer--row">
    <vs-col class="grid-spacer" v-for="book in books" :key="book.index" type="flex" vs-justify="center" vs-align="center" vs-w="4" vs-xs="12" vs-sm="6">
      <vs-card actionable class="bookshelf">
        <h3 slot="header">
          {{ book.title }}
        </h3>
        <img :src="book.media" slot="media">
        <p>
          {{ book.summary }}
        </p>
      </vs-card>
    </vs-col>
    <vs-col class="grid-spacer" vs-w="4" vs-xs="12" vs-sm="6">
      <vs-card actionable class="bookshelf" @click.native="$router.push('/publish')">
        <h3 slot="header">...</h3>
        <div slot="footer">
          <vs-row vs-justify="flex-end">
            <vs-button to="publish" type="relief" size="large" color="primary">Créer un nouveau projet</vs-button>
          </vs-row>
        </div>
      </vs-card>
    </vs-col>
  </vs-row>
</template>

<script>
export default {
  data: () => ({
    books: [
      { title: '20.000 lieues sous les mer', summary: 'Captain nemo is having a good time in his little submarine. When suddenly : HOAR big fatty squid.', media: 'https://picsum.photos/400/540' },
      { title: 'Les 3 Mousquetaires', summary: 'Atos, Portos and Aramis are having a good time in Paris, they meet a new friend and dont even call him the fourth musketeer !', media: 'https://picsum.photos/300/400' },
      { title: 'Le Monde Perdu', summary: 'This is NOT based on the movie with Jeff Goldblum', media: 'https://picsum.photos/600/800' },
      { title: 'Fundation & Empire', summary: 'Did you know that Isaac Asimov collaborated with the creator of Star Trek ?', media: 'https://picsum.photos/500/640' }
    ]
  })
}
</script>

<style lang="scss" scoped>
.grid-spacer {
  padding: 0 10px;
  &--row {
    padding-top: 10px;
  }
}

.bookshelf p {
  font-size: 1.2em
}
</style>