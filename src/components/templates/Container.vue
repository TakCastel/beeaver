<template>
  <section class="container">
    <slot />
  </section>
</template>

<style lang="scss" scoped>
.container {
  margin: 0;
}

@media screen and (min-width: 600px) {
  .container {
    margin: 0 2.5rem;
  }
}

@media screen and (min-width: 900px) {
  .container {
    margin: 0 5rem;
  }
}

@media screen and (min-width: 1200px) {
  .container {
    margin: 0 20%;
  }
}
</style>