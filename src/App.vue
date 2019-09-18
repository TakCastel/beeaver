<template>
  <div id="app">
    <Navigation />
    <vs-row vs-justify="center" class="main">
      <vs-col class="content" type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <Container>
          <router-view/>
        </Container>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import Container from '@/components/Container'
import Navigation from '@/components/Navigation'

export default {
  components: {
    Container,
    Navigation
  }  
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Manjari&display=swap');

// $theme-color-wheel1: #4AB1FF;
// $theme-color-wheel2: #43CCE8;
// $theme-color-wheel3: #57FFEF;
// $theme-color-wheel4: #43E8A9;
// $theme-color-wheel5: #4AFF86;



// GLOBAL LAYOUTS
#app {
  font-family: 'Manjari', sans-serif;

  .layout {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 66px);
  }
  .main {
    padding: .5em;
  }
  .content {
    margin-top: 1em;
  }
}

// TYPOGRAPHY
h1, h2 {
  margin-bottom: 10px
}
h1 {
  font-size: 24px;
}
h2 {
  font-size: 18px;
}
</style>