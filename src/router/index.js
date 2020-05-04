import Login from "../components/Login";
import Register from "../components/Register"
import Profile from "../components/Profile"
import Friends from "../components/FriendList"
import Gallery from "../components/Gallery"
import Group from "../components/Group"

const routes = [
    {path: "/", redirect: "/login"},
    {path: "/login"  , name: "login" , component: Login},
    {path: "/register", name: "register", component: Register},
    {path:'/profile', name: "Profile", component: Profile},
    {path:'/friends', name: "Friend", component: Friends},
    {path:'/groups' , name: 'Group' , component: Group},
    {path:'/gallery', name: "Galllery", component:Gallery}
];


export default routes;