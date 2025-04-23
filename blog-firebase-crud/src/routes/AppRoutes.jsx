import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "../pages/Auth/SignUp.jsx/index.js";
import Login from "../pages/Auth/Login.jsx";
import AllPosts from "../pages/Posts/AllPosts";
import AddEditPost from "../pages/Posts/AddEditPost";
import ViewPost from "../pages/Posts/ViewPost";
import Header from "../components/Header";
import { useSelector } from "react-redux";

const AppRoutes = () => {
    const { user } = useSelector((state) => state.auth.user);
    return(
        <Router>
            <Header />
                <Routes>
                    <Route path="/" element={<AllPosts />} />
                    <Route path="/signup" element={user ? <Navigate to="/" /> : <SignUp />} />
                    <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
                    <Route path="/add-post" element={user ? <AddEditPost /> : <Navigate to="/login" />} />
                    <Route path="/edit-post/:id" element={user ? <AddEditPost /> : <Navigate to="/login" />} />
                    <Route path="/view-post/:id" element={<ViewPost />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
        </Router>
    )
};

export default AppRoutes;