<template>
  <box-field>
    <div class="centerx form">
      <vs-input label="Identifiant" placeholder="John Doe" v-model="identifier"/>
      <vs-input type="password" label="Mot de passe" placeholder="Votre mot de passe" v-model="password"/>
    </div>
  </box-field>
</template>

<script>
import BoxField from '@/components/templates/BoxField'
export default {
  components: {
    BoxField
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