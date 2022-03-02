import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import './company.css'

function Company() {

    const params = useParams()
    const [companyJobs, setCompanyJobs] = useState([])
    useEffect(() => {
        let companyName = params.companyName
        fetchCompanyJobs(companyName)
    },[])

    
        
    const fetchCompanyJobs = async(companyName) => {
        try {
            const response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?company=${companyName}`)
            if(response.ok){
                const data = await response.json()
                console.log(data.data)
                setCompanyJobs(data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return ( 
        <Container>
        <Row>
            <Col>
               {companyJobs && companyJobs.map(job => 
               <div  key={job._id} className='company-page'>
                   <p className='h2'>
                   {job.company_name}
                   </p>
                   <p>
                   {job.title}
                   </p>
                   <p>
                   {job.url}
                   </p>
                   <p>
                   {job.description.replace(/<[^>]+>/g,'')}
                   </p>
                   
                       
                   
                </div>
               )}
            </Col>
        </Row>
    </Container>
     );
}

export default Company;