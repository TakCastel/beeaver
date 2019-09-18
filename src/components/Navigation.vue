<template>
  <vs-navbar>
    <div class="brand" slot="title" @click="navbarAction('')">
      <img alt="Vue logo" src="@/assets/logo.png" width="50">
      <vs-navbar-title>Beeaver</vs-navbar-title>
    </div>
    <vs-spacer />
    <vs-button type="relief" size="large" @click="navbarAction('newstory')">Nouveau projet</vs-button>
  </vs-navbar>
</template>

<script>
export default {
  methods: {
    navbarAction(location) {
      this.$router.push(`/${location}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.vs-navbar {
  max-height: 66px;
  padding: .5em;
  .brand {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>