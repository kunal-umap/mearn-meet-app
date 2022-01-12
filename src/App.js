import React from "react";
import "./sass/app.scss"

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import LoginSignup from "./pages/LoginSignup";
import Hompage from "./pages/Hompage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Hompage/>}/>
        <Route path="/" element={<LoginSignup/>}>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
