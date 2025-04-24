import { Button, Col,Row,Image } from "react-bootstrap"
import l2 from '../../../assets/image/im2.jpg'
import lo from '../../../assets/image/g.jpg'
import { Link } from "react-router-dom"
export const Wellcome=()=>{
    return(
    <Row>
        <Col lg={8}>
            <p className="h3 text-info text-center my-2">Wellcome to Sante Medical Center</p>
            <p className=" text-dark ms-3">Sante Medical center is a highly specialised 
                medical center that aims to deliver high standard medical care at reasonable
                 priceIt is an a sole proprietorship company owned and managed by a Physician.
                  It is registered with trade and industry office and licensed by the Ministry of Health.
                Centrally located in the heart of Addis Ababa, Santé medical center has good reputation 
                in wide range of specialty services, particularly in renal medicine. It gives a specialized
                 renal care including dialysis service and urologic procedures integrated with holistic high 
                 quality care for all cases. Supported by high quality laboratory services and best specialists
                  and sub specialist, santé is becoming a home of many patients who need ou care.
            </p>
            <div className="d-flex justify-content-center">
                <Link className="btn  btn-outline-info col-1" to='/about_us'>More</Link>
            </div>
        </Col>
        <Col lg={4} className="mt-3" rounded>
            <Link to='/about_us' >
            <Image src={lo} width='100%' height={200}/>
            </Link>
        </Col>
    </Row>)
}