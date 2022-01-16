import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterAndLogin from './pages/RegisterAndLogin.js';
import AdminDashboard from './pages/AdminDashboard';
import AuthorDashboard from './pages/AuthorDashboard';
import './assets/styles/App.css';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
      <Router>
        <div>
            <Routes>
                <Route exact path={"/"} element={<RegisterAndLogin/>}/>
                <Route path={"/admin"} element={<AdminDashboard/>}/>
                <Route path={"/author"} element={<AuthorDashboard/>}/>
            </Routes>
        </div>
      </Router>
  );
}

export default App;
