import Vue from 'vue';
import Vuex from 'vuex';
import Api from '../service/api'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        users: []
    },
    mutations: {
        SET_USERS(state, users){
            state.users = users;
        },
        ADD_USER (state, user){
            let newUser = state.users.concat(user);
            state.users = newUser;
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
        }
    },
    modules: {}
}); 