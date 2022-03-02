
export const JOBS_LIKED = 'JOBS_LIKED'
export const JOBS_REMOVE_LIKED = 'JOBS_REMOVE_LIKED'
export const COMPANY_LIKED = 'COMPANY_LIKED'
export const COMPANY_REMOVE_LIKED = 'COMPANY_REMOVE_LIKED'

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