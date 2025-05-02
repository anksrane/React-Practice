import { Routes, Route } from 'react-router-dom';
import AddPost from '../pages/Posts/AddPost';
import EditPost from '../pages/Posts/EditPost';
import AllPosts from '../pages/Posts/AllPosts';
import PostDetails from '../pages/Posts/PostDetails';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import PrivateRoute from '../components/PrivateRoute';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AllPosts />} />
      <Route path="/viewPost/:id" element={<PostDetails />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />

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