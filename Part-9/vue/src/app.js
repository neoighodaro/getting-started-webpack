import Vue from 'vue';
import App from './App.vue';

Vue.component('hello-world', require('./components/HelloWorld.vue').default);

new Vue({
  el: '#app',
  render: h => h(App)
});
