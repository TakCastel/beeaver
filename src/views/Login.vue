<template>
  <Wrapper>
    <div class="centerx form">
      <vs-input label="Identifiant" placeholder="John Doe" v-model="identifier"/>
      <vs-input type="password" label="Mot de passe" placeholder="Votre mot de passe" v-model="password"/>
    </div>
  </Wrapper>
</template>

<script>
import Wrapper from '@/components/Wrapper'
export default {
  components: {
    Wrapper
  },

  data: () => ({
    identifier: '',
    password: ''
  })
}
</script>

<style lang="scss" scoped>
.form {
  .vs-input {
    margin: 15px
  }
}
</style>