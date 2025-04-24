import {Navbar,Nav,Container,Image} from 'react-bootstrap';
import logo from '../../../assets/image/logo2.jpg'
import { useState,useEffect } from 'react';
export const Header=()=>{
  const [transparent, setTransparent] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      setTransparent(window.scrollY < window.innerHeight * 0.5); // Adjust threshold as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

return(
  <Navbar  expand='md' 
   fixed='top'>
        <Container className={transparent?'':"bg-info"}>
          <Navbar.Brand href="#home">
              <Image src={logo} width={150} height={50} rounded />
          </Navbar.Brand>
          <Nav className="me-start">
            <Nav.Link className={window.location.pathname=='/'&&'text-light bg-secondary'}>Home</Nav.Link>
            <Nav.Link >Services</Nav.Link>
            <Nav.Link >About Us</Nav.Link>
            <Nav.Link>Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>)
}