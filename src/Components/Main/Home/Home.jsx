import { Header } from "../../Sub/Commen/Header"
import { Menbers } from "../../Sub/Home/Menbers"
import { Services } from "../../Sub/Home/Services"
import { Slider } from "../../Sub/Home/Slider"
import { Wellcome } from "../../Sub/Home/Wellcome"
import { Video } from "../../Sub/Home/Video"
import { Footer } from "../../Sub/Commen/Footer"
import { Special } from "../../Sub/Home/Special"
export const Home=()=>
{
  return(<>
   <Header/>
   <Slider/>
   <Wellcome/>
   <Services/>
   <Special/>
   <Video/>
   <Menbers/>
   <Footer/>
  </>)
}