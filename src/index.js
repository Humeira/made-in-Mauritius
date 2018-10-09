import Vue from 'vue'
import App from './app.vue'

require('datatables.net/js/jquery.dataTables.js');
require('datatables.net-bs4/js/dataTables.bootstrap4.min.js');

require('bootstrap/dist/css/bootstrap.min.css');
require('datatables.net-bs4/css/dataTables.bootstrap4.min.css');
require('./assets/colours.css');

require('../favicon.ico')

new Vue({
    el: '#app',
    render: h => h(App)
})
