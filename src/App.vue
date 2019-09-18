<template>
  <div id="app">
    <nav-bar />
    <vs-row vs-justify="center" class="padding">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <Container>
          <router-view/>
        </Container>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import Container from '@/components/templates/Container'
import NavBar from '@/components/organisms/NavBar'

export default {
  components: {
    Container,
    NavBar
  }  
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Manjari&display=swap');

$theme-color-wheel1: #4AB1FF;
$theme-color-wheel2: #43CCE8;
$theme-color-wheel3: #57FFEF;
$theme-color-wheel4: #43E8A9;
$theme-color-wheel5: #4AFF86;

#app {
  font-family: 'Manjari', sans-serif;

  .layout {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 66px);
  }
  .padding {
    padding: .5em
  }
}
</style>