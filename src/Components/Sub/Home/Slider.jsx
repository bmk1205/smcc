import { Carousel,Image} from "react-bootstrap"
import f1 from '../../../assets/image/f1.png'
import f2 from '../../../assets/image/f2.png'
export const Slider=()=>{
    return(<>
      <Carousel>
            <Carousel.Item>
                <Image src={f1} alt="image" width='100%' height='500 px'/>
            </Carousel.Item> 
            {/* <Carousel.Item>
                <Image src={f2} alt="image" width='100%' height='500 px'/>
            </Carousel.Item>   */}
      </Carousel>
    </>
    )
}