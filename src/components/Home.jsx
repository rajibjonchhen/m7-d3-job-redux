import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {BsSearch} from 'react-icons/bs'
import {GiAirplaneArrival} from 'react-icons/gi'
import { useNavigate } from "react-router-dom";
import SingleJob from "./SingleJob";
import './home.css'
import JobDetail from "./JobDetail";
import Loader from "./Loader";
import { connect } from "react-redux";
import { getJobsAction } from "../redux/actions";

const mapStateToProps = (state) => ({
    jobs : state.job.jobs,
    isLoading : state.job.isLoading,
    isError : state.job.isError
})

const mapDispatchToProps = (dispatch) => ({
    getJobs : (field, query) => {
        dispatch(getJobsAction(field, query))
    }
})

const Home = ({setSelectedJob, jobs, getJobs, isLoading, isError}) => {

    // const navigate = useNavigate()
    const[search, setSearch] = useState('')
    const [showJobs, setShowJobs] = useState(false)
    
    const setSearchQuery = (find) => {
      setSearch(find)
    }
    
    useEffect(() => {
        getJobs ('search', 'recent')
    },[])
  


  

    const categories = ["it", "business", "Customer Service", "DevOps / Sysadmin", "Finance / Legal", "data", "marketing", "all others", "Software Development", "Human Resources", "Design", "QA"]
    return ( 
    <Container>
        <Row className="justify-content-center mt-5">
            
                {
                categories.map((category, i) => <Col key={i} xs={4} sm={4} md={3} lg={2} xl={2}  onClick={(e) => {getJobs("category", category)}} className="category">{category.toUpperCase()}</Col>)
            }
        
        </Row>
        <Row style={{position:'sticky', top:'72px', background:'white', zIndex:1, margin:'auto'}}>
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
                             <span className='search-icon' onClick={(e) => {getJobs("search",search)}}>
                        <BsSearch/>
                        </span>
                    </div>
                </div>
            </Col>
        </Row>
        
        <Row className='d-flex pt-3'>
           
                {isLoading? (<Loader/>) :( jobs && jobs.map((job,i) =>  <Col  key={job._id} xs={12} md={6} lg={4}>
                 <SingleJob job={job} setSelectedJob={setSelectedJob}/>
                 </Col>))}
          
            {/* {selectedJob  &&
            <Col>
                     <JobDetail selectedJob={selectedJob}/>
            </Col>
                     } */}
        </Row>

    </Container> );
}

export default  connect(mapStateToProps, mapDispatchToProps)(Home);