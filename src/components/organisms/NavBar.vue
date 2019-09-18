<template>
  <vs-navbar class="padding">
    <div class="brand" slot="title" @click="navbarRedirection('')">
      <img alt="Vue logo" src="@/assets/logo.png" width="50">
      <vs-navbar-title>Beeaver</vs-navbar-title>
    </div>
    <vs-spacer />
    <vs-button to="login" type="relief" size="large" @click="navbarRedirection('login')">Nouveau livre</vs-button>
  </vs-navbar>
</template>

<script>
export default {
  methods: {
    navbarRedirection(location) {
      this.$router.push(`/${location}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.vs-navbar {
  max-height: 66px;
  .brand {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>