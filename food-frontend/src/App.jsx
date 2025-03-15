import React from 'react';
import Mainpage from './component/Mainpage';
import "./app.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mealinfo from './component/Mealinfo';

function App() {
  return (
  <Router>
    
    {/* <Mainpage /> */}
      <Routes>
        <Route path='/' element={<Mainpage/>}/>
        <Route path="/meal/:mealid" element={<Mealinfo />} />
      </Routes>
    </Router>
     
   
  );
}

export default App;
