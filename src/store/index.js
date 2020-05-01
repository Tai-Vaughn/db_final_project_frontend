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
        }
    },
    actions: {
        getUsers({commit}) {
            let response =  Api().get('/users').then(res => {return res.data}).then(res => console.log(res));
            let data = response.data;
            commit('SET_USERS',data);
        }
    },
    modules: {}
}); 