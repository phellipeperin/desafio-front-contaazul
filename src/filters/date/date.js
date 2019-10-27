import Vue from 'vue';
import moment from 'moment';

Vue.filter('hour', value => moment(value).format('hh:mm:ss a'));
