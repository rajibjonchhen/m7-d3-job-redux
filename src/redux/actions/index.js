
export const JOBS_LIKED = 'JOBS_LIKED'
export const JOBS_REMOVE_LIKED = 'JOBS_REMOVE_LIKED'
export const COMPANY_LIKED = 'JOBS_LIKED'
export const COMPANY_REMOVE_LIKED = 'JOBS_REMOVE_LIKED'


export const companyLikedAction = (company) => ({
    type: COMPANY_LIKED ,
    payload: company,
}) 

export const companyRemoveLikedAction = (companyIndex) => ({
    type: COMPANY_REMOVE_LIKED ,
    payload: companyIndex,
}) 