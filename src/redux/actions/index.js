
export const JOBS_LIKED = 'JOBS_LIKED'
export const JOBS_REMOVE_LIKED = 'JOBS_REMOVE_LIKED'
export const COMPANY_LIKED = 'COMPANY_LIKED'
export const COMPANY_REMOVE_LIKED = 'COMPANY_REMOVE_LIKED'
export const GET_JOBS ="GET_JOBS"

export const josbLikedAction = (job) => ({
    type: JOBS_LIKED ,
    payload: job,
}) 

export const jobsRemoveLikedAction = (jobId) => ({
    type: JOBS_REMOVE_LIKED ,
    payload: jobId,
}) 

export const companyLikedAction = (company) => ({
    type: COMPANY_LIKED ,
    payload: company,
}) 

export const companyRemoveLikedAction = (companyIndex) => ({
    type: COMPANY_REMOVE_LIKED ,
    payload: companyIndex,
}) 

export const getJobsAction  = (job) => {
    return (dispatch, getState) => {
        setTimeout( async() => {
            try {
                let response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?search=recent&limit=40`)
                if(response.ok){
                    const data = await response.json()
                    dispatch({
                        type:GET_JOBS,
                        payload: data
                    })
                } else {
                    console.log("Jobs couldn't be fetched")
                }
            } catch (error) {
                console.log(error)
            }
        }, 600)
    }
}