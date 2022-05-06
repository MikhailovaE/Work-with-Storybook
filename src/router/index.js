import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";


export const privateRoutes = [
    {path: '/dashboard', component: Dashboard, exact: true},
]

export const publicRoutes = [
    {path: '/login', component: Login, exact: true},
]
