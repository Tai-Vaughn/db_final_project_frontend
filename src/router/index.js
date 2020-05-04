import Login from "../components/Login";
import Register from "../components/Register"
import Profile from "../components/Profile/Profile"


const routes = [
    {path: "/", redirect: "/login"},
    {path: "/login"  , name: "login" , component: Login},
    {path: "/register", name: "register", component: Register},
    {path:'/profile', name: "Profile", component: Profile}
];


export default routes;