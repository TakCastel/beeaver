<template>
  <div class="newstory">
    <h1 class="title">Création d'un projet</h1>
    <h2 class="subtitle">Quel titre voulez-vous donner à votre projet ?</h2>
    <div class="input-group">
      <vs-input class="input input-story" size="large" placeholder="Mon nouveau projet" v-model="title"/>
      <vs-button type="relief" size="large">Créer !</vs-button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: ''
  })
}
</script>

<style lang="scss" scoped>
  .vs-input {
    margin: 10px 0;
  }
  .input-group {
    display: flex;
    align-items: center;
    justify-content: start;
    > * + * {
      margin-left: 10px;
    }
  }
</style>