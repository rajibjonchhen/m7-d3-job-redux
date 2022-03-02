import { Col, Container, Row } from "react-bootstrap";

const JobDetail = ({selectedJob}) =>  {
    const jobDescription = selectedJob.description.replace(/<[^>]+>/g, '')
    return ( 

        <Container>
            <Row>
                <Col>
                    <p className='h3'>{selectedJob.title}</p>
                    <p className=''>{selectedJob.company_name}</p>
                    <p className=''>{selectedJob.category}</p>
                    <p className=''>{selectedJob.title}</p>
                    <p className=''>{jobDescription}</p>
            
                </Col>
            </Row>
        </Container>
                
     );
}

export default JobDetail;