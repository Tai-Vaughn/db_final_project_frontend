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
          state.currentUser = {}  ;
          window.localStorage.currentUser = JSON.stringify({})
        },
        SET_CURRENT_USER(state, user){
            state.currentUser = user;
            window.localStorage.currentUser = JSON.stringify(user)
        }
    },
    actions: {
       async getUsers({commit}) {
            let response = await Api().get('/users');
            commit('SET_USERS',response.data);

            let user = JSON.parse(window.localStorage.currentUser);
            commit('SET_CURRENT_USER', user)
        },
        async addUser( {commit}, user) {
            let response = await Api().post('/users', user).then(console.log(user));
            let newUser = response.data.data.attributes;
            commit('ADD_USER',newUser)
        },
        logoutUser({commit}) {
            commit('LOGOUT_USER')
        },
        async loginUser({commit}, loginUser){
            try{
            let response = await Api().post('/users/login',loginUser);
            let user = response.data
            commit('SET_CURRENT_USER' ,user)
            }catch(e){
                return {error: "Incorect username or password"}
            }
            
        }
    },
    modules: {}
}); 