import React, { useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";
import './singleJob.css'
import {AiOutlineHeart, AiFillHeart, AiOutlineLike} from 'react-icons/ai'
import { connect } from "react-redux";
import { companyLikedAction, jobsRemoveLikedAction, josbLikedAction } from "../redux/actions";


const mapStateToProps = (state) => ({
    favouriteJobs :  state.favourite.favouriteJobs
})

const mapDispatchToProps = (dispatch) => ({
    addToFavouriteJobs : (job) =>{
        dispatch(josbLikedAction(job))
    },

    addToFavouriteCompanies : (company) => {
        dispatch(companyLikedAction(company))
    } ,

    removeFavouriteJobs : (jobId) => {
        dispatch(jobsRemoveLikedAction(jobId))
    }
})

function SingleJob({job, setSelectedJob, favouriteJobs, addToFavouriteCompanies, addToFavouriteJobs, removeFavouriteJobs}) {

const isLiked = !!favouriteJobs.find(item => item._id === job._id )
const navigate = useNavigate()
const [like, setLike] = useState(isLiked)

const showDetail = (job) => {
    setSelectedJob(job) 
    setTimeout(navigate('/JobDetail', 2000))

}
    return ( 
        
        <div className='single-job pRelative'>
           
        <p className='h5' style={{height:'50px'}}>
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
        <div className='pointer text-wrap'>
            {job.url}
        </div>
        </a>
            <span className="show-detail" onClick= {(e) =>showDetail(job)}> see details</span> 
             <span className="heart-icon pAbsolute" style={{display:!like? 'block':'none'}} onClick={() => {addToFavouriteJobs(job); setLike(!like)}}><AiOutlineHeart/></span>
            <span className="heart-icon pAbsolute" style={{display:like? 'block':'none'}} onClick={() => {removeFavouriteJobs(job._id); setLike(!like)}}><AiFillHeart/></span>
        </div>
       
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleJob);