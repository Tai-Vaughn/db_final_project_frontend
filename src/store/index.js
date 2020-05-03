import Vue from 'vue';
import Vuex from 'vuex';
import Api from '../service/api'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        users: [],
        currentUser: {Fname: 'yoyo'}
    },
    mutations: {
        SET_USERS(state, users){
            state.users = users;
        },
        ADD_USER (state, user){
            let newUser = state.users.concat(user);
            state.users = newUser;
        },
        LOGOUT_USER(state){
          state.currentUser = {}  
        }
    },
    actions: {
       async getUsers({commit}) {
            let response = await Api().get('/users');
            commit('SET_USERS',response.data);
        },
        async addUser( {commit}, user) {
            let response = await Api().post('/users', user).then(console.log(user));
            let newUser = response.data.data.attributes;
            commit('ADD_USER',newUser)
        },
        logoutUser({commit}) {
            commit('LOGOUT_USER')
        }
    },
    modules: {}
}); 