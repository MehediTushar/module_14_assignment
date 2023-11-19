import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from './Pages/Homepage';
import TeamPage from './Pages/TeamPage';
import ServicePage from './Pages/ServicePage';
import ProjectPage from './Pages/ProjectPage';
import TestimonialPage from './Pages/TestimonialPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';


const App = () => {
  return (
 
       <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/team' element={<TeamPage/>}/>
      <Route path='/service' element={<ServicePage/>}/>
      <Route path='/project' element={<ProjectPage/>}/>
      <Route path='/testimonial' element={<TestimonialPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
    </Routes>
    
    </BrowserRouter>
   
  );
};

export default App;