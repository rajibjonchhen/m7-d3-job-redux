import { Col, Container, Row } from "react-bootstrap";
import SingleJob from "./SingleJob";

function JobLiked({likedJob}) {
    console.log(likedJob)
    return ( 
        <Container>
            <Row>
                <Col>
                    {likedJob && likedJob.map( job => <SingleJob job={job}/>)}
                </Col>
            </Row>
        </Container>
     );
}

export default JobLiked;