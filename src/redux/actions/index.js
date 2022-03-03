
export const JOBS_LIKED = 'JOBS_LIKED'
export const JOBS_REMOVE_LIKED = 'JOBS_REMOVE_LIKED'
export const COMPANY_LIKED = 'COMPANY_LIKED'
export const COMPANY_REMOVE_LIKED = 'COMPANY_REMOVE_LIKED'
export const GET_JOBS ="GET_JOBS"
export const IS_JOBS_LOADING = 'IS_JOBS_LOADING'
export const JOBS_LOADING_ERROR = 'JOBS_LOADING_ERROR'

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

export const getJobsAction  = (field, query) => {
    console.log("i am in action")
    return (dispatch, getState) => {
      
        setTimeout( async() => {
            try {
                console.log("i am trying")
                let response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?${field}=${query}&limit=40`)
                
                if(response.ok){
                    const data = (await response.json()).data

                    console.log("i am response data", data)
                    dispatch({
                        type:GET_JOBS,
                        payload: data
                    })
                    dispatch({
                        type:IS_JOBS_LOADING,
                    })
                } else {
                    console.log("Jobs couldn't be fetched")
                    dispatch({
                        type:JOBS_LOADING_ERROR,
                    })
                    dispatch({
                        type:IS_JOBS_LOADING,
                    })
                }
            } catch (error) {
                console.log(error)
                dispatch({
                    type:JOBS_LOADING_ERROR,
                })
                dispatch({
                    type:IS_JOBS_LOADING,
                })
            }
        }, 600)
    }
}