<template>
  <vs-row vs-justify="flex-start" class="grid-spacer--row">
    <vs-col class="grid-spacer" vs-w="4" vs-xs="12" vs-sm="6">
      <vs-card fixed-height actionable class="bookshelf" @click.native="$router.push('/newstory')">
        <h3 slot="header" style="color: lightgrey">Le prochain best-seller</h3>
        <div slot="footer">
          <vs-row vs-justify="flex-end">
            <vs-button to="newstory" type="relief" size="large" color="primary">Créer un nouveau projet</vs-button>
          </vs-row>
        </div>
      </vs-card>
    </vs-col>
    <vs-col class="grid-spacer" v-for="book in books" :key="book.index" type="flex" vs-justify="center" vs-align="center" vs-w="4" vs-xs="12" vs-sm="6">
      <vs-card fixed-height actionable class="bookshelf">
        <h3 slot="header">
          {{ book.title }}
        </h3>
        <img :src="book.media" slot="media">
        <p>
          {{ book.summary }}
        </p>
        <div slot="footer">
          <vs-row vs-justify="flex-end">
            <vs-button :color="'dimgrey'" type="relief" size="large" >Editer</vs-button>
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
      { title: 'The Bath Ogre', summary: 'Vivi is a surgeon from Madison who falls in love with her neighbour. The two are separated when the neighbour goes away to war. Vivi walks the streets forever, yearning for her loss.', media: 'https://picsum.photos/400/400' },
      { title: 'Singing in the Razor', summary: 'Katharine is a killer fuelled by racism, who murders women and makes them into pies. DI Sendker, a chef from Salisbury, knows she has to stop her. Eventually, Sendker captures the killer and wins back the respect of her estranged family.', media: 'https://picsum.photos/300/300' },
      { title: 'The Singing Hanging', summary: 'In a world where women hold positions of power, one detective has no choice but to destroy the earth using an ancient scroll. Finally, the detective has a meaningful chat with the women and they come to an amicable agreement.', media: 'https://picsum.photos/600/600' },
      { title: 'Temptations In The Town', summary: 'In a world where robots outnumber every other creature, one plumber has no choice but to save mankind using an infinate stabler. Unfortunately, the world gets into a terrible pickle and the few survivors have to leave in a space rocket.', media: 'https://picsum.photos/540/540' },
      { title: 'Dead At The Apocolypse', summary: 'A professor from Coventry is delighted when he gets the chance to take part in the final of X-Factor. However, his chances are scuppered when his nephew is badly injured in a car accident. It turns our the professor has been dead all along.', media: 'https://picsum.photos/530/530' },
      { title: 'Butchers And Cats', summary: 'When a gardener from Toowoomba develops a fear of flying, not everybody is supportive. However, her fortunes improve when her step-brother finds a space travel course on the internet. It turns our the gardener has been dead all along.', media: 'https://picsum.photos/680/680' },
      { title: 'A Whisper of Smoke', summary: 'Abraham is a comedian from Chester who falls in love with his best friend. The two are separated when the best friend catches the flu and has to stay at the home of an irresistable stanger. It turns out his best friend murdered the best friends great uncle.', media: 'https://picsum.photos/500/500' }
    ]
  })
}
</script>

<style lang="scss" scoped>
.grid-spacer {
  padding: 10px 5px;
  &:nth-child(3n+1){
    padding: 10px 10px 10px 0
  }
  &:nth-child(3n+3){
    padding: 10px 0 10px 10px
  }
}

.con-vs-card.withHover:hover img {
  // Force UI component image to stay same zoom value when hovered
  // And yes I know, if I don't like the UI framework behavior, why
  // choosing it in the first place ? you may ask. But who cares.
  -webkit-transform: scale(1);
  transform: scale(1);
}

.bookshelf p {
  font-size: 16px;
  margin-bottom: 30px;
}
</style>