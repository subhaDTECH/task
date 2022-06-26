import './App.css';
import Header from './components/Header';
import MainFeed from './components/MainFeed';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import Account  from "./components/Account";
import Search from "./components/Search";
import Post from "./components/Post";
import {BrowserRouter , Routes,Route} from  "react-router-dom";
import MyApp from "./components/MyApp"
function App() {
  const [tab,setTab]=useState(window.location.pathname)
 
  return (
    <>
   <BrowserRouter>
    <Routes>
      <Route path="/" exact  element={<MyApp />} />
      
     <Route path="/account" element={<Account />}/>
     <Route path="/search" element={<Search />}/>
     <Route path="/post" element={<Post />}/>
     
     
  
    </Routes>
  </BrowserRouter>
 
    </>
    
  );
}

export default App;
