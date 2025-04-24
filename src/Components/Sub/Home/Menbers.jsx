import {Row,Col} from "react-bootstrap"
import { Cards } from "../Commen/Card"
export const Menbers=()=>{
    return(
    <Row className="my-3">
        <p className="h3 text-center text-info">Our Docters</p>
          <Row className="mx-2">
            <Col lg={3}>
                <Cards/>
            </Col>
            <Col lg={3}>
                <Cards/>
            </Col>
            <Col lg={3}>
                <Cards/>
            </Col>
          </Row>
    </Row>    
    )
}