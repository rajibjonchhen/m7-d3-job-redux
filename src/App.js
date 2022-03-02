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

  const [selectedJob, setSelectedJob ] = useState(null)
  const [likedJob, setLikedJob] = useState([])

  const setSelectedJobArray = (job) => {
    const reqJob = likedJob.findIndex(item => item._id === job._id)
    if(reqJob === -1){
      likedJob.push(job)
      console.log(likedJob)
    } else {
      const remJobs = likedJob.filter(item => item._id !== job._id)
      setLikedJob(remJobs)
      console.log(likedJob)

    }
  }

  return (
    <div className="App">
      <BrowserRouter>
      <MyNavBar likedJob={likedJob}/>
      <Routes>
        <Route path="/" element={<Home  setSelectedJob={setSelectedJob} setSelectedJobArray={setSelectedJobArray}
        // setSearchQuery={setSearchQuery} search={search}
/>} />
          <Route path="/JobDetail" element={<JobDetail selectedJob={selectedJob} setSelectedJob={setSelectedJob}/>}/>
          <Route path="/Favourite" element={<Favourite likedJob={likedJob}/>}/>
          <Route path="/category/:category" element={<Category/>}/>
          <Route path="/company/:companyName" element={<Company/>}/>
          
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
