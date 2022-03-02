import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import {AiOutlineHeart} from 'react-icons/ai'

function MyNavBar() {
    return ( 
        <Navbar bg="dark" style={{position:'sticky', zIndex:1, top:0, }}>
        <Container>
            <Link to={"/"}>
                <Navbar.Brand className='text-white h3'>
                    Dream Jobs
                </Navbar.Brand>
            </Link>
           <Link to="/JobLiked">
               <span className='text-white' > Favourite <AiOutlineHeart/></span>
           </Link>
           
        </Container>
        </Navbar>

     );
}

export default MyNavBar;