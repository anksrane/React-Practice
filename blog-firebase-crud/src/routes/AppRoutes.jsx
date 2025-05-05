import { Routes, Route } from 'react-router-dom';
import AddPost from '../pages/Posts/AddPost';
import EditPost from '../pages/Posts/EditPost';
import AllPosts from '../pages/Posts/AllPosts';
import PostDetails from '../pages/Posts/PostDetails';
import LoginPage from '../pages/Auth/LoginPage';
import SignUpPage from '../pages/Auth/SignUpPage';
import PrivateRoute from '../components/PrivateRoute';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AllPosts />} />
      <Route path="/viewPost/:id" element={<PostDetails />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Protected Routes */}
      <Route
        path="/addPost"
        element={
          <PrivateRoute>
            <AddPost />
          </PrivateRoute>
        }
      />
      <Route
        path="/editPost/:id"
        element={
          <PrivateRoute>
            <EditPost />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;