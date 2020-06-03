import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import router from './router/router'

const data = {
  debug: true,
  state: {
    directories: []
  }
}

const dirs = require
  .context("./components", true, /(index\.vue)$/)
  .keys()
  .map(filename => {
    const split = filename.split("/");
    return split[1].toLowerCase();
  });
console.log(dirs);

data.state.directories = dirs;


Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  data,
  render: h => h(App)
}).$mount('#app')
