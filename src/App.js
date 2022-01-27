import React from "react";
import "./sass/app.scss"

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import LoginSignup from "./pages/LoginSignup";
import Hompage from "./pages/Hompage";
import VideoCall from "./pages/VideoCall";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact={true} path="/" element={<Hompage/>}/>
        <Route path="/" element={<LoginSignup/>}>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Route>
        <Route path="/call" element={<VideoCall/>} />
        <Route path="*" exact={true} element={<VideoCall/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
