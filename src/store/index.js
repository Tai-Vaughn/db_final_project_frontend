import Vue from 'vue';
import Vuex from 'vuex';
import Api from '../service/api'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        users: [],
        friends:[],
        gallary: [],
        isAuthenticated: false,
        currentUser: {},
        sideBarView: {view: 'Users'}, 
        friendTypes: ['Relatives', 'School', 'Work']
    },
    mutations: {
        SET_USERS(state, users){
            state.users = users;
        },
        SET_FRIENDS(state, friends){
            state.friends = friends;
        },
        SET_GALLARY(state, gallary){
            state.gallary = gallary;
            window.localStorage.gallary = JSON.stringify(gallary);
        },
        SET_SIDE_BAR_VIEW(state,view){
            state.sideBarView.view = view;
        },
        ADD_USER (state, user){
            let newUser = state.users.concat(user);
            state.users = newUser;
        },

        ADD_FRIEND (state, user){
            console.log( state , user)
        },

        ADD_PIC (state,pic) {
            let newGallery = state.gallary.concat(pic)
            state.gallary = newGallery
        },
        LOGOUT_USER(state){
          state.currentUser = {}  ;
          window.localStorage.currentUser = JSON.stringify({})
          window.localStorage.gallary = JSON.stringify([]);
          window.localStorage.isAuthenticated = false;
        },
        SET_CURRENT_USER(state, user){
            state.currentUser = user;
            window.localStorage.currentUser = JSON.stringify(user);
            window.localStorage.isAuthenticated = true;
        },
        

    },
    actions: {
       async getUsers({commit}) {
            let response = await Api().get('/users');
            commit('SET_USERS',response.data);

            let user = JSON.parse(window.localStorage.currentUser);
            commit('SET_CURRENT_USER', user);

            let gallery = JSON.parse(window.localStorage.gallary);
            commit('SET_GALLARY',gallery)
        },
        async addUser( {commit}, user) {

            let fd = new FormData();
            for (var key in user){
                fd.append(key,user[key])
            }
            let response = await Api().post('/users', fd).then(console.log(fd));
            let newUser = response.data.data.attributes;
            commit('ADD_USER',newUser)
        },

        async getFriends({commit},UID){
            let response = await Api().get('/users/'+UID+'/friends')
            commit('SET_FRIENDS',response.data)
        },

        async getPics({commit},UID){
            let response = await Api().get('/photo/'+UID+'/pics')
            commit('SET_GALLARY',response.data)
        },


        async addPicture({commit} , pic){
            let fd = new FormData()
            for (var key in pic){
                fd.append(key, pic[key])
            }
            let response = Api().post('photo/pics',fd)
            commit('ADD_PIC',response.data)
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
            
        },
        setsideBarView({commit},view){
            try{
                commit('SET_SIDE_BAR_VIEW',view)
            }catch(e){
                alert('Something Went Wrong')
            }
        },
        async addFriend({commit},user){
            try{
                console.log('ok',user)
                await Api().post('/users/addfriend',user);
                commit('ADD_FRIEND',)
            }catch(e){
                return {error: "Something went wrong"}
            }
        },
        async changeDP ({commit},user) {
            try {
                await Api().post('/users/change',user)
                commit('SET_CURRENT_USER',user)
            }catch(e){
                return {error: "Something went wrong"}
            }
        }
    },
    modules: {}
}); 