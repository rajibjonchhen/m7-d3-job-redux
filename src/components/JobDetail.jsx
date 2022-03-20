import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import './jobDetail.css'
import { useSelector } from "react-redux";
import { useEffect } from "react";


const JobDetail = () =>  {

    const selectedJob = useSelector((state) => state.job.jobDetail)
   
    
    return ( 

        <Container>
            <div>Details of the job</div>
            <Row>
                <Col>
                {selectedJob.title && <div className='job-detail'>
                    <p className='h3'>{selectedJob.title}</p>
                    <p className=''>{selectedJob.company_name}</p>
                    <p className=''>{selectedJob.category}</p>
                    <p className=''>{selectedJob.description.replace(/<[^>]+>/g, '')}</p>
                </div>}
            
                </Col>
            </Row>
        </Container>
                
     );
}

export default JobDetail;