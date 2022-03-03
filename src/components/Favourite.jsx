import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {BsTrash} from "react-icons/bs"
import { companyLikedAction, jobDetailAction, jobsRemoveLikedAction } from "../redux/actions";
import './favourite.css'


const mapStateToProps = (state) => ({
    favouriteCompanies : state.favourite.favouriteCompanies,
    favouriteJobs : state.favourite.favouriteJobs
})

const mapDispatchToProps = (dispatch) => ({
    addToFavouriteCompanies : (company) => {
        dispatch(companyLikedAction(company))
    } ,
    jobDetail : (job) => {
        dispatch(jobDetailAction(job))
    },
     removeFavouriteJobs : (jobId) => {
        dispatch(jobsRemoveLikedAction(jobId))
    },

    
})

function Favourite({favouriteCompanies, favouriteJobs, jobDetail, removeFavouriteJobs}) {

const showDetail = (job) => {
    jobDetail(job)
}

    return ( 
        <Container>
                <Row >
                    <Col className="favourite-sec-nav">
                   <span>Job Liked</span>
                   {favouriteCompanies?.map((company,i) => <span key={i}>{company} </span>)}
                    </Col>
                </Row>
            <Row>
                
                
                   {favouriteJobs?.map((job,i) => 
                   <Col xs={12} sm={9} md={6} lg={4}>
                   <div key={i} className='single-job pRelative'>
                    <p className='h5'>
                    {job.title}
                    </p>

                    <p className='h6'>
                    <Link to={`/company/${job.company_name}`}>
                        <span>
                        {job.company_name}
                        </span>
                    </Link>
                    </p>
                    <p className='h6'>
                    {job.category}
                    </p>
                    <p className='description'>
                    {job.description.replace(/<[^>]+>/g, '')}
                    </p>
                    <a href={job.url}>
                    <p className='pointer text-wrap'>
                        {job.url}
                    </p>
                    </a>
                    <div className='w-100 '>
                    <span className="pointer" onClick= {(e) =>showDetail(job)}> see details</span> 
                    <span className='remove-job pAbsolute' onClick={() =>{removeFavouriteJobs(job._id)}}><BsTrash/></span>
                    </div>
                        </div>
                </Col>
                        )}
            </Row>
        </Container>
     );
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourite);