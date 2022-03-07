import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import './jobDetail.css'
import { useSelector } from "react-redux";


const JobDetail = () =>  {

    const selectedJob = useSelector((state) => state.job.jobDetail)
    const jobDescription = selectedJob.description.replace(/<[^>]+>/g, '')
    return ( 

        <Container>
            <Row>
                <Col>
                <div className='job-detail'>
                    <p className='h3'>{selectedJob.title}</p>
                    <p className=''>{selectedJob.company_name}</p>
                    <p className=''>{selectedJob.category}</p>
                    <p className=''>{selectedJob.title}</p>
                    <p className=''>{jobDescription}</p>
                </div>
            
                </Col>
            </Row>
        </Container>
                
     );
}

export default JobDetail;