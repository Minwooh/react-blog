import { Routes, Route, Navigate } from "react-router-dom";
import Home from "pages/home";
import PostNew from "pages/posts/new";
import PostEdit from "pages/posts/edit";
import PostDetailPage from "pages/posts/detail";
import ProfilePage from "pages/profile";
import PostListPage from "pages/posts";
import LoginPage from "pages/login";
import SignUpPage from "pages/signup";

interface RouterProps {
    isAuthenticated: boolean;
}

function Router({ isAuthenticated }: RouterProps) {
    //firebase 사용자 인증시 true로 set하는 로직 추가
    return (
        <>
            <Routes>
                {isAuthenticated ? (
                    <>
                        <Route path="/" element={<Home />}></Route>

                        <Route path="/posts" element={<PostListPage />}></Route>
                        <Route
                            path="/posts/:id"
                            element={<PostDetailPage />}
                        ></Route>
                        <Route path="/posts/new" element={<PostNew />}></Route>
                        <Route
                            path="/posts/edit/:id"
                            element={<PostEdit />}
                        ></Route>
                        <Route
                            path="/profile"
                            element={<ProfilePage />}
                        ></Route>
                        <Route
                            path="*"
                            element={<Navigate replace to="/" />}
                        ></Route>
                    </>
                ) : (
                    <>
                        <Route path="/login" element={<LoginPage />}></Route>
                        <Route path="/signup" element={<SignUpPage />}></Route>
                        <Route path="*" element={<LoginPage />}></Route>
                    </>
                )}
            </Routes>
        </>
    );
}
export default Router;
