import App from "../App";
import PostIdPage from "../Component/PostList/PostIdPage/PostIdPage";
import About from "../pages/About";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Posts from "../pages/Posts";

export const privateRoutes = [
    { path: "*", component: <NotFound /> },
    { path: "/", component: <App /> },
    { path: "/posts", component: <Posts /> },
    { path: "/posts/:id", component: <PostIdPage /> },
    { path: "/about", component: <About /> }
]
// Добавить redirect на страницу login
export const publicRoutes = [
    { path: "/login", component: <Login /> }
]