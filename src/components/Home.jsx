import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {BsSearch} from 'react-icons/bs'
import {GiAirplaneArrival} from 'react-icons/gi'
import { useNavigate } from "react-router-dom";
import SingleJob from "./SingleJob";
import './home.css'
import JobDetail from "./JobDetail";
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { getJobsAction, jobDetailAction } from "../redux/actions";




const Home = () => {

   const [showDetail, setShowDetail] = useState(false)
    const[search, setSearch] = useState('')
    const dispatch = useDispatch()
    
    const setSearchQuery = (find) => {
      setSearch(find)
      dispatch(jobDetailAction({}))
    }
    
    const jobs = useSelector((state) =>state.job.jobs)
    const selectedJob = useSelector((state) => state.job.selectedJob)
    const isLoading = useSelector((state) =>state.job.isLoading)
    const isError = useSelector((state) =>state.job.isError)

    useEffect(() => {
        dispatch(getJobsAction('search', 'recent'))
    },[])
  
    const categories = ["it", "business", "Customer Service", "DevOps / Sysadmin", "Finance / Legal", "data", "marketing", "all others", "Software Development", "Human Resources", "Design", "QA"]
    return ( 
    <Container>
        <Row className="justify-content-center mt-5">
            
                {
                categories.map((category, i) => <Col key={i}   onClick={(e) => {dispatch(getJobsAction("category", category))}} className="category">{category.toUpperCase()}</Col>)
            }
        
        </Row>
        <Row style={{position:'sticky', top:'70px', background:'white', zIndex:1, margin:'auto'}}>
            <Col sm={12} md={8} lg={6} className='m-auto'>
                <div className='search-section'>
                    <div className=''>
                        <p className="h1">We help you land in <br/> your dream job</p>
                    </div>
                    <div className='pRelative'>

                            <input className='w-100 text-left' type='text' id='search' value={search} onChange={(e) => {setSearchQuery(e.target.value)}}/>
                            <div className='plane-icon'>
                                    <GiAirplaneArrival/>
                            </div>    
                             <span className='search-icon' onClick={(e) => {dispatch(getJobsAction("search",search))}}>
                        <BsSearch/>
                        </span>
                    </div>
                </div>
            </Col>
        </Row>
        
        <Row className='d-flex pt-3' style={{position:"sticky" , top:'500px'}}>
           
            <Col xs={12} md={6} lg={4}>
                {isLoading? (<Loader/>) :( jobs && jobs.map((job,i) =>  <div  key={job._id} >
                 <SingleJob job={job} />
                 </div>))}
            </Col>
          
           
            <Col >
           <JobDetail/>    
        </Col>
                     
        </Row>

    </Container> );
}

export default  Home;