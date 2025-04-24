import { Button, Col,Row,Image } from "react-bootstrap"
import l2 from '../../../assets/image/im2.jpg'
export const Wellcome=()=>{
    return(
    <Row>
        <Col lg={9}>
            <p className="h3 text-primary text-center">Wellcome to Sante Medical Center</p>
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
            <Button>More</Button>
        </Col>
        <Col lg={3} className="mt-3" rounded>
            <Image src={l2} width={300} height={200} />
        </Col>
    </Row>)
}