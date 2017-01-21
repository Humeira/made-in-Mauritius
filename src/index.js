import Vue from 'vue'
import App from './app.vue'

require('bootstrap/dist/css/bootstrap.min.css');

new Vue({
    el: '#app',
    render: h => h(App)
})
