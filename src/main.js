import Vue from 'vue';
import App from './App.vue';

import './filters/filters';
import './assets/sass/theme.scss';

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app');
