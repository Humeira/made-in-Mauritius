import Vue from 'vue'
import App from './app.vue'

require('datatables.net/js/jquery.dataTables.js');
require('datatables.net-bs/js/dataTables.bootstrap.js');

require('bootstrap/dist/css/bootstrap.min.css');
require('datatables.net-bs/css/dataTables.bootstrap.css');
require('./assets/colours.css');

require('../favicon.ico')

new Vue({
    el: '#app',
    render: h => h(App)
})
