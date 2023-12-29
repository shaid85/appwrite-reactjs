import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import ThemeContextProvider from './context/ThemeContextProvider.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js';
import {About,Home,AddPost,AllPost,EditPost,Login,Signup, Post} from './pages'
import {Logout,Layout,AuthLayout} from './components/index.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="logout" element={<Logout />} />
        <Route path="addpost" element={<AddPost />} />
        <Route path="allpost" element={<AllPost />} />
        <Route path="editpost/:slug" element={<EditPost />} />
        <Route path="post/:slug" element={<Post />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <ThemeContextProvider >
        <Provider store={store}>
          <RouterProvider router={router}/>
        </Provider>  
      </ThemeContextProvider>

  </React.StrictMode>,
)