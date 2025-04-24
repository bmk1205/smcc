import {Navbar,Nav,Container,Image} from 'react-bootstrap';
import logo from '../../../assets/image/logo2.jpg'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  <Navbar  expand='sm' fixed='top' >
        <Container className={transparent?'':'bg-info'}>
          <Navbar.Brand href="#home">
              <Image src={logo} width={180} height={50} rounded />
          </Navbar.Brand>
          <Nav className="me-start">
            <Link className='nav-link' to='/'>Home</Link>
            <Link className='nav-link' to='/about_us'>About Us</Link> 
            <Link className='nav-link' to='/services'>Services</Link>   
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Services</Nav.Link>
            <Nav.Link href="#pricing">About Us</Nav.Link>
            <Nav.Link href="#pricing">Contact Us</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>)
}