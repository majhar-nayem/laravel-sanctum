import Vue from 'vue'
import vuetify from './plugins/Vuetify'

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
window.axios = require('axios');
Vue.prototype.$http = window.axios;

Vue.component('example-component', require('./components/LoginComponent.vue').default);

const app = new Vue({
    el: '#app',
    vuetify,
});
