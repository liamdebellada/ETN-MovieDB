import Vue from 'vue';
import App from './vue/App.vue';
import Bar from './vue/components/Bar.vue';
import Search from './vue/components/search.vue'
import PrimaryButton from './vue/components/PrimaryButton.vue';
import RecentCard from './vue/components/RecentCard.vue';
import './styles/app.css';

Vue.component('Bar', Bar);
Vue.component('Search', Search);
Vue.component('PrimaryButton', PrimaryButton);
Vue.component('RecentCard', RecentCard);

new Vue({
	el: "app",
	components: {App}
})