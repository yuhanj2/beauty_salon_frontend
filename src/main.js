import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify' // vuetify UI component library
import 'vuetify/dist/vuetify.min.css' // vuetify css
import Vuex from 'vuex' // vuex state management

Vue.config.productionTip = false
Vue.use(Vuetify);
Vue.use(Vuex);

// vuetify setup
const vuetifyOpts = {}
const vuetify = new Vuetify(vuetifyOpts);

// vuex store setup
const store = new Vuex.Store({
  state: {
    // count: 0,
    currContent: 0,
    institutionName: "XX美容院",
    username: "员工 A",
    userPhoneNumber: "3193336006",
    cards: ['Today', 'Yesterday'],
    links: [
      ['mdi-message', '待办事项', 0],
      ['mdi-calendar', '日程', 1],
      ['mdi-file', '文件输出', 2],
    ],
  },
  mutations: {
    // increment (state) {
    //   state.count++
    // }
    changeCurrContent(state, content){
      state.currContent = content;
    }
  }
})

new Vue({
  vuetify, // register vuetify to the entire app
  store, // register vuex store to the entire app (same as just store in ES6 object property shorthand notation)
  render: h => h(App),
}).$mount('#app')
