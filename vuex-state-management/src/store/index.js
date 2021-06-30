import { createStore } from 'vuex';
import userModule from './modules/user';
import productsModule from './modules/products';

const store = createStore({
  modules : {
    products : productsModule,
    users : userModule
  },
  state() {},
  getters: {},
  mutations: {},
  actions: {},
});

export default store;