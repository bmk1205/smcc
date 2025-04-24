import logo from '../../../assets/image/logo2.jpg'
import logo2 from '../../../assets/image/ggg.jpg'
import { Col, Row,Image, Container } from "react-bootstrap"
import { FaLocationDot,FaFacebook,FaLinkedin,FaTelegram} from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
export const Footer=()=>(<>
 <Row className="bg-secondary">
    <Col lg={4}>
        <Container className='text-center'>
            <Image src={logo} width='100%' height={100} className='my-2'/>
            <p className='h5 text-info'>Important Links</p>
        </Container> 
            <ul>
                <li>Services</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
    </Col>
    <Col lg={8}>
        <Row>
            <Col lg={11}>
                <Image src={logo2} width='100%' height={100} className='my-2'/>
            </Col>
            <Col lg={6}>
                <Container className='text-center'>
                    <p className='h5 text-info'>Address</p>
                </Container> 
                <FaLocationDot/><span className='mx-2'>ቄራ መስጊድ ጀርባ ዉልና ማስረጃ ከፍ ብሎ ቤቶች ኮርፖሬሽን አጠገብ</span><br />
                <IoCallSharp/><span className='mx-2'>+2519 78 67 67 67</span>
            </Col>
            <Col lg={6}>
                <Container className='text-center'>
                    <p className='h5 text-info'>Social Media Links</p>
                </Container>
                <MdEmail/><br />
                <FaLinkedin/><br />
                <FaTelegram/><br />
                <FaFacebook/>
            </Col> 
        </Row>
    </Col>
 </Row>
</>)