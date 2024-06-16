import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Users from './Pages/Users';

function Way() {

  return (

    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
      </Routes >
    </Router>
  )
}

export default Way;
