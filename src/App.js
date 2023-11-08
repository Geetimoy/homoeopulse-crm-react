import { BrowserRouter, Routes, Route,} from "react-router-dom";
import React from 'react';
import { Helmet } from 'react-helmet';

import LogIn from './components/LogIn';
import ForgotPassword from './components/ForgotPassword';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <div className="Apps">
      <Helmet>  
        <meta name="description" content="This is a dynamically added meta description." />  
      </Helmet> 
      

      {/* <header className="App-header">Title will be React Helmet Tutorial</header>  */}


      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<LogIn />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
