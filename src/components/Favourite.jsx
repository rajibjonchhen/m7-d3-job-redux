import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { companyLikedAction } from "../redux/actions";
import SingleJob from "./SingleJob";

const mapStateToProps = (state) => ({
    favouriteCompanies : state.favourite.favouriteCompanies,
    favouriteJobs : state.favourite.favouriteJobs
})

const mapDispatchToProps = (dispatch) => ({
    addToFavouriteCompanies : (company) => {
        dispatch(companyLikedAction(company))
    } 
})

function Favourite({favouriteCompanies, favouriteJobs}) {


    return ( 
        <Container>
            <Row>
                <Col>
                   {favouriteJobs?.map((job,i) => 
                   <div key={i} className='single-job'>
                    <p className='h4'>
                    {job.title}
                    </p>

                    <p className='h6'>
                    <Link to={`/company/${job.company_name}`}>
                        <span>
                        {job.company_name}
                        </span>
                    </Link>
                    </p>
                    <p className='h6'>
                    {job.category}
                    </p>
                    <p className='description'>
                    {job.description.replace(/<[^>]+>/g, '')}
                    </p>
                    <a href={job.url}>
                    <p className='pointer text-wrap'>
                        {job.url}
                    </p>
                    </a>
                    {/* <span className="pointer" onClick= {(e) =>showDetail(job)}> see details</span>  */}
                        </div>)}
                </Col>
                <Col>
                   {favouriteCompanies?.map((company,i) => <div key={i}>{company} </div>)}
                </Col>
            </Row>
        </Container>
     );
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourite);