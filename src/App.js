import React from 'react'
import {Topbar} from "./Components/Topbar"
import {HomePage} from "./Components/HomePage"
import {BlogPage} from "./Components/BlogPage"
import {Write} from "./Components/Write"
import { Setting } from './Components/Setting'
import {Login} from './Components/Login'
import {Register} from './Components/Register'
import { PostTemplate } from './Components/PostTemplate'
import {
  BrowserRouter as Router,
  Routes, 
  Route, 
  Link,
} from "react-router-dom"

import './App.css'

function App() {

  const user = true;

  return (
    <>
    <Router>
       <Topbar />
       <Routes>
       <Route exact path="/" element={<HomePage/>} />
       <Route path="/register" element={user? <HomePage /> : <Register/>} />
       <Route path="/login" element={user? <HomePage /> : <Login/>} />
       <Route path="/blogPage" element={<BlogPage/>} />
       <Route path="/write" element={user? <Write /> : <Register/>} />
       <Route path="/setting" element={user? <Setting /> : <Register/>} />
       <Route path="/postTemplate/:postId" element={<BlogPage/>} />
       </Routes>
    </Router>
    </>
  );
}

export default App;
