import React from 'react';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Index from './pages/Index';
import Dashboard from './pages/Dashboard';
import Add_Category from './pages/Add_Category';
import Manage_Category from './pages/Manage_Category';
import Manage_user from './pages/Manage_user';

import Navbar from './component/Navbar';


function App() {
  return (
    
      <Routes>
        <Route index element={<><Index/></> }></Route>
        <Route exact  path="/index" element={<> <Index/></>}></Route>
        <Route exact  path="/dashboard" element={<><Navbar/><Dashboard/></>}></Route>
        <Route exact  path="/add_category" element={<><Navbar/><Add_Category/></>}></Route>
        <Route exact  path="/manage_category" element={<><Navbar/> <Manage_Category/></>}></Route>
        <Route exact  path="/manage_user" element={<><Navbar/> <Manage_user/></>}></Route>
        
      </Routes>
    
  );
}

export default App;
