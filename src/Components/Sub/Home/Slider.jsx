import { Carousel,Image,Row} from "react-bootstrap"
import { Header } from "../Commen/Header"
import l1 from '../../../assets/image/im.jpg'
import l2 from '../../../assets/image/im2.jpg'
export const Slider=()=>{
    return(<Row id="slider">
      <Carousel>
            <Carousel.Item>
                <Image src={l1} alt="image" width='100%' height='500 px'/>
                <Carousel.Caption>
                    <h3>About us</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={l2} alt="image" width='100%' height='450 px'/>
                <Carousel.Caption>
                    <h3>HI</h3>
                </Carousel.Caption>
            </Carousel.Item>
      </Carousel>
    </Row>
    )
}