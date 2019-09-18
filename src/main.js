import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles

// UI Library components
Vue.use(Vuesax, {
  theme:{
    colors:{
      primary:'#19d1bb',
      success:'#afe833',
      danger:'#afe833',
      warning:'#e8af33',
      dark:'#2e2b29'
    }
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
