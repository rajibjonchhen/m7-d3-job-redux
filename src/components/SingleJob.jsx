import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import './singleJob.css'
import {AiOutlineHeart, AiFillHeart, AiOutlineLike} from 'react-icons/ai'
import { connect } from "react-redux";
import { companyLikedAction, josbLikedAction } from "../redux/actions";


const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => ({
    addToFavouriteJobs : (job) =>{
        dispatch(josbLikedAction(job))
    },

    addToFavouriteCompanies : (company) => {
        dispatch(companyLikedAction(company))
    } 
})

function SingleJob({job, setSelectedJob, setSelectedJobArray, addToFavouriteCompanies, addToFavouriteJobs}) {
const params  = useParams()

// const [like, setLike] = useState(false)

const showDetail = (job) => {
    setSelectedJob(job) 
}
    return ( 
        
        <div className='single-job pRelative'>
            {/* <span className="heart-icon pAbsolute" style={{display:!like? 'block':'none'}} onClick={() => {setSelectedJobArray(job); setLike(!like)}}><AiOutlineHeart/></span>
            <span className="heart-icon pAbsolute" style={{display:like? 'block':'none'}} onClick={() => {setSelectedJobArray(job); setLike(!like)}}><AiFillHeart/></span> */}
        <p className='h4'>
           {job.title}
        </p>
        
        <p className='h6'>
        <Link to={`/company/${job.company_name}`}>
            <span>
            {job.company_name}
            </span>
        </Link>
            <span className="likeBtn pointer" onClick={(e) => addToFavouriteCompanies(job.company_name)}>
            <AiOutlineLike/>
            </span>
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
            <span className="pointer" onClick= {(e) =>showDetail(job)}> see details</span> 
            <span className="like-job pAbsolute" onClick={(e) => addToFavouriteJobs(job)}>Like <AiFillHeart/></span>
        </div>
       
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleJob);