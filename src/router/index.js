import Login from "../components/Login";
import Register from "../components/Register"
import Profile from "../components/Profile"
import Friends from "../components/FriendList"
import Gallery from "../components/Gallery"
import Group from "../components/Group"
import store from "../store/index"
import Admin from "../components/Admin"
import AdminUser from "../components/AdminUser"

const ifNotAuthenticated = (to, from, next) => {
    if (store.state.currentUser == false) {
      next('/profile')
      return
    }else{next()}
  };

const ifAuthenticated = (to, from, next) => {
      if (store.state.currentUser == true) {
        next('/login')
    } else {next()}
  };

const routes = [
    {path: "/", redirect: "/login" },
    {path: "/login"  , name: "Login" , component: Login , beforeEnter: ifNotAuthenticated},
    {path: "/register", name: "Register", component: Register , beforeEnter: ifNotAuthenticated},
    {path:'/profile', name: "Profile", component: Profile, beforeEnter: ifAuthenticated},
    {path:'/friends', name: "Friend", component: Friends, beforeEnter: ifAuthenticated},
    {path:'/groups' , name: 'Group' , component: Group, beforeEnter: ifAuthenticated},
    {path:'/gallery', name: "Galllery", component:Gallery, beforeEnter: ifAuthenticated},
    {path: '/admin', namde: "Admin" , component:Admin,
    children: [{
      path: ':id', name: "AdminUser", component:AdminUser
    }] }  
];


export default routes;