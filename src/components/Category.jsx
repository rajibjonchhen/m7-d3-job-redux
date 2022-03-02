import { Col, Container, Row } from "react-bootstrap";
import SingleJob from "./SingleJob";

function Category({jobs}) {
    
    return ( 
        <Container>
            <Row>
                <Col>
                    {jobs && jobs.map(job => <SingleJob key={job._id} job={job}/>)}
                </Col>
            </Row>
        </Container>
     );
}

export default Category;