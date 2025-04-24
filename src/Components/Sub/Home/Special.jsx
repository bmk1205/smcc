import { Row,Col,Image } from "react-bootstrap"
import spe from '../../../assets/image/spe.png'
export const Special=()=>{
   return(<Row className="bg-info my-3">
       <p className="h3 text-center text-light">What Makes Us Special</p>
       <Col lg={5} className="bg-light my-2 ms-4">
          <p className="h3 text-center">Sante Medical Center</p>
           <ul>
                <li className="h4">We Have Specilalists in Diffrent Fields.</li>
                <li className="h4">We Have Modern Diagonostic Equpiments.</li>
                <li className="h4">We Give Fast Emergency Care.</li>
                <li className="h4" >Our Location Is Convenient, Transportation Is Averable.</li>
           </ul>
       </Col>
       <Col lg={6}>
            <Image src={spe} width='100%' height={400} className='my-2'/>
       </Col>
   </Row>) 
}