import {Row,Col} from "react-bootstrap"
import { Cards } from "../Commen/Card"
export const Menbers=()=>{
    return(
    <Row>
        <p className="h3 text-center">Menbers</p>
        <Col lg={12}>
          <Row>
            <Cards/>
            <Cards/>
            <Cards/>
          </Row>
        </Col>
    </Row>    
    )
}