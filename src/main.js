import Vue from 'vue'
import App from './App.vue'

import {
  Button,
  Upload
  // Upload
} from 'ant-design-vue';


Vue.component(Button.name, Button);
Vue.component(Upload.name, Upload);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')