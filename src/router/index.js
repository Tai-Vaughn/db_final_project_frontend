import Login from "../components/Login";
import Register from "../components/Register"
import Profile from "../components/Profile"
import Friends from "../components/FriendList"
import Gallery from "../components/Gallery"
import Group from "../components/Group"
// import store from "../store/index"

// const  ifAuthenticated= (to, from, next) => {
//     if (!(store.state.currentUser !== {})) {
//       next()
//       return
//     }
//     next('/profile')
//   };

// const ifNotAuthenticated = (to, from, next) => {
//     if (store.state.currentUser !== {}) {
//       next()
//       return
//     }
//     next('/')
//   };
const routes = [
    {path: "/", redirect: "/login"},
    {path: "/login"  , name: "Login" , component: Login },
    {path: "/register", name: "Register", component: Register},
    {path:'/profile', name: "Profile", component: Profile},
    {path:'/friends', name: "Friend", component: Friends},
    {path:'/groups' , name: 'Group' , component: Group},
    {path:'/gallery', name: "Galllery", component:Gallery}
];


export default routes;