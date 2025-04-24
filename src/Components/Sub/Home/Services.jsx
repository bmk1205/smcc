import { Button, Col,Row,Image } from "react-bootstrap"
import l2 from '../../../assets/image/im2.jpg'
import { Cards2 } from "../Commen/Card2"
import { Link } from "react-router-dom"
export const Services=()=>{
    return(<Row className="mt-2">
        <Col lg={3} className="bg-info">
            <p className="h3 text-light text-center">Our Service</p>
            <p className=" text-dark ms-3">Sante Medical center is a highly specialised 
                medical center that aims to deliver high standard medical care at reasonable
            </p>
        <div className="d-flex justify-content-center">
             <Link className=" btn btn-outline-light col-3" to='/services'>More</Link>
        </div>
        </Col>
        <Col lg={9} className="mt-3">
            <Row>
                <Col lg={3}>
                    <Cards2/>
                </Col>
                <Col lg={3}>
                    <Cards2/>
                </Col>
                <Col lg={3}>
                    <Cards2/>
                </Col>
                <Col lg={3}>
                    <Cards2/>
                </Col>
                </Row>
        </Col>
        
    </Row>)
}