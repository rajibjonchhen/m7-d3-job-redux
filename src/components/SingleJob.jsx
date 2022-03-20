import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import './singleJob.css'
import {AiOutlineHeart, AiFillHeart, AiOutlineLike} from 'react-icons/ai'
import { connect } from "react-redux";
import { companyLikedAction, jobDetailAction, jobsRemoveLikedAction, josbLikedAction } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";


function SingleJob({job}) {

const [isLiked, setIsLiked ] = useState()

const navigate = useNavigate()
const dispatch = useDispatch()
const favouriteJobs = useSelector((state) => state.favourite.favouriteJobs)

useEffect(() => {
   let like = !!favouriteJobs.find(item => item._id === job._id )
   setIsLiked(like)
})

const showDetail = (job) => {
    dispatch(jobDetailAction(job)) 
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
            <span className="likeBtn pointer" onClick={(e) =>  dispatch(companyLikedAction(job.company_name))}>
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
             <span className="heart-icon pAbsolute" style={{display:!isLiked? 'block':'none'}} onClick={() => {dispatch(josbLikedAction(job))}}><AiOutlineHeart/></span>
            <span className="heart-icon pAbsolute" style={{display:isLiked? 'block':'none'}} onClick={() => { dispatch(jobsRemoveLikedAction(job._id))}}><AiFillHeart/></span>
        </div>
       
    );
}

export default SingleJob;