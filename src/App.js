import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Category from './components/Category';
import Company from './components/Company';
import Home from './components/Home';
import { useState } from 'react';
import JobDetail from './components/JobDetail';
import MyNavBar from './components/MyNavBar';
import Favourite from './components/Favourite';

function App() {



  return (
    <div className="App">
      <BrowserRouter>
      <MyNavBar/>
      <Routes>
        <Route path="/" element={<Home  
        // setSearchQuery={setSearchQuery} search={search}
/>} />
          <Route path="/JobDetail" element={<JobDetail />}/>
          <Route path="/Favourite" element={<Favourite />}/>
          <Route path="/category/:category" element={<Category/>}/>
          <Route path="/company/:companyName" element={<Company/>}/>
          
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
