import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import Hello from "./pages/landing/Hello";
import SignUp from "./pages/landing/SignUp";
import Login from "./pages/landing/Login";
import RoleType from "./pages/landing/RoleType";
import {MentorStep1, MentorStep2, MentorStep3, MentorStep4, MentorStep5} from "./pages/setup/MentorSetup";
import MentorDashboard from "./pages/mentor/Dashboard";
import MenteeDashboard from "./pages/mentee/Dashboard";
import { MenteeStep1, MenteeStep2, MenteeStep3, MenteeStep4, MenteeStep5 } from "./pages/setup/MenteeSetup";
import {MentorRecommendation} from "./pages/mentee/MyMentor";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hello/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/role_type" element={<RoleType/>}></Route>
          <Route path="/setup/mentor/1" element={<MentorStep1/>}></Route>
          <Route path="/setup/mentor/2" element={<MentorStep2/>}></Route>
          <Route path="/setup/mentor/3" element={<MentorStep3/>}></Route>
          <Route path="/setup/mentor/4" element={<MentorStep4/>}></Route>
          <Route path="/setup/mentor/5" element={<MentorStep5/>}></Route>
          <Route path="/setup/mentee/1" element={<MenteeStep1/>}></Route>
          <Route path="/setup/mentee/2" element={<MenteeStep2/>}></Route>
          <Route path="/setup/mentee/3" element={<MenteeStep3/>}></Route>
          <Route path="/setup/mentee/4" element={<MenteeStep4/>}></Route>
          <Route path="/setup/mentee/5" element={<MenteeStep5/>}></Route>
          <Route path="/mentor" element={<MentorDashboard/>}></Route>
          <Route path="/mentee" element={<MenteeDashboard/>}></Route>
          <Route path="/mentee/my_mentor" element={<MentorRecommendation/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
library.add(fab, fas, far)