import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import SignUp from "../pages/signup";
import PostNew from "../pages/posts/new";
import PostEdit from "../pages/posts/edit";
import PostDetailPage from "../pages/posts/detail";
import ProfilePage from "../pages/profile";
import PostListPage from "../pages/posts";

function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route path="/posts" element={<PostListPage />}></Route>
                <Route path="/posts/:id" element={<PostDetailPage />}></Route>
                <Route path="/posts/new" element={<PostNew />}></Route>
                <Route path="/posts/edit/:id" element={<PostEdit />}></Route>
                <Route path="/profile" element={<ProfilePage />}></Route>
                <Route path="*" element={<Navigate replace to="/" />}></Route>
            </Routes>
        </>
    );
}
export default Router;
