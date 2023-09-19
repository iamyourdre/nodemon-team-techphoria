import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import Hello from "./pages/landing/Hello";
import SignUp from "./pages/landing/SignUp";
import Login from "./pages/landing/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hello/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
library.add(fab, fas, far)