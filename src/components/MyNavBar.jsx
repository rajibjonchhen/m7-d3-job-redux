import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import {AiOutlineHeart} from 'react-icons/ai'
import {GiDreamCatcher} from 'react-icons/gi'
import './myNavbar.css'


function MyNavBar() {
    return ( 
        <Navbar className='myNavbar'  >
        <Container>
            <Link to={"/"}>
                <Navbar.Brand className='brand text-white h3'>
                    <span>
                        <GiDreamCatcher/>
                    </span>
                    Dream Jobs
                </Navbar.Brand>
            </Link>
           <Link to="/Favourite">
               <span className='text-white' > Favourite <AiOutlineHeart/></span>
           </Link>
           
        </Container>
        </Navbar>

     );
}

export default MyNavBar;