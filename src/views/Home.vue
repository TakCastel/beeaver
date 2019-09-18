<template>
  <div>
    <h1>Vos projets en cours</h1>
    <Bookshelf />
  </div>
</template>

<script>
// @ is an alias to /src
import Bookshelf from '@/components/Bookshelf.vue'

export default {
  name: 'home',
  components: {
    Bookshelf
  }
}
</script>
