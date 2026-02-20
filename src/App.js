import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import {Routes,Route} from "react-router-dom";
import { useState } from "react";

function App() {


  const[isLoggedIn,setIsLoggedIn]=useState(false);
console.log(setIsLoggedIn);



  return (
  
  <div>
       
       <div>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
       </div>

       <div>
       <Routes>
          <Route path='/' element={<Home/>}> </Route>
          <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}> </Route>
          <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}/>}> </Route>
          <Route path='/dashboard' element={<Dashboard/>}> </Route>
       </Routes>
       </div>

  </div>
  );
}

export default App;
