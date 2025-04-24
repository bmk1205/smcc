import { Card ,Image} from "react-bootstrap"
import l2 from '../../../assets/image/im2.jpg'
export const Cards=()=>{
return(
  <Card className="col-3 mx-1">
    <Card.Img variant="top" src={l2} width={40} height={200}/>
    <Card.Body>
        <Card.Title>Dr someone</Card.Title>
        <Card.Subtitle>medical doctor</Card.Subtitle>
    </Card.Body>
  </Card> 
) 
}