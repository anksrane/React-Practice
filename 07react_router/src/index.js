import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import  Layout from "./Layout.jsx";
import  Home from "./components/Home/Home.jsx";
import  About from "./components/About/About.jsx";
import Contact from './components/Contact/Contact.jsx';
import User from './components/User/User.jsx';
import Github, { githubInfoLoader } from './components/Github/Github.jsx';

// // Way one
// const router=createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout></Layout>,
//     children:[
//       {
//         path:"",
//         element: <Home></Home>
//       },
//       {
//         path:"about",
//         element: <About></About>
//       },
//       {
//         path:"contact",
//         element: <Contact></Contact>
//       },
//       {
//         path:"user/:userid",
//         element:<User></User>
//       },
//       {
//         path:"github",
//         loader:githubInfoLoader,
//         element:<Github></Github>
//       }
//     ]
//   }
// ])

// way two
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />} 
      />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

