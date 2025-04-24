import { Button, Col,Row,Image } from "react-bootstrap"
import l2 from '../../../assets/image/im2.jpg'
import { Cards } from "../Commen/Card"
export const Services=()=>{
    return(<Row className="mt-2" id="servises">
        <Col lg={4} className="bg-info">
            <p className="h3 text-light text-center">Our Service</p>
            <p className=" text-dark ms-3">Sante Medical center is a highly specialised 
                medical center that aims to deliver high standard medical care at reasonable
                 priceIt is an a sole proprietorship company owned and managed by a Physician.
                  It is registered with trade and industry office and licensed by the Ministry of Health.
            </p>
            <Button>More</Button>
        </Col>
        <Col lg={8} className="mt-3" rounded> 
            <Row>   
                <Cards/>
                <Cards/>
                <Cards/>
            </Row> 
        </Col>
    </Row>)
}