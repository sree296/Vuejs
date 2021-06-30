import axios from 'axios';

export default {
    state() {
      return {
        user: null,
      };
    },
    getters: {
    },
    mutations: {
      setUser(state, user) {
        state.user = user;
      }
    },
    actions: {
        registerUser({ commit }, user) {
          return axios.post('/api/register', user)
            .then((result) => commit('setUser', result.data));
        },
        signIn({ commit }, userLogin) {
          return axios.post('/api/sign-in', userLogin)
            .then((result) => commit('setUser', result.data));
        },
        signOut({commit}, userLogin){
            return axios.post('/api/sign-in', userLogin)
            .then(() => commit('setUser', null));
        }
    },
  }