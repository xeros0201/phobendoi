 
import { Draggable } from "gsap/Draggable";
 

 import './section6.css'
import logo1 from     "./img/logo1.png"
import logo2 from     "./img/logo2.png"
import logo3 from     "./img/logo3.png"
import logo4 from     "./img/logo4.png"
import logo5 from     "./img/logo5.png"
import logo6 from     "./img/logo6.png"
import logo7 from     "./img/logo7.png"
import logo8 from     "./img/logo8.png"
import logo9 from     "./img/logo9.png"
import logo10 from     "./img/logo10.png"
import logo11 from     "./img/logo11.png"
import logo12 from     "./img/logo12.png"
import logo13 from     "./img/logo13.png"
import logo14 from     "./img/logo14.png"
import logo15 from     "./img/logo15.png"
import logo16 from     "./img/logo16.png"
import logo17 from     "./img/logo17.png"
import logo18 from     "./img/logo18.png"
import logo19 from     "./img/logo19.png"
import logo20 from     "./img/logo20.png"
import logo21 from     "./img/logo21.png"
import logo22 from     "./img/logo22.png"
import logo23 from     "./img/logo23.png"
import Three_Block from "../../../lib/layouts/Three_Block";
import { white } from "../../../assets/color";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
 

export  default function Section6(){
 
    const logoUper =[
        logo1,
        logo2,
        logo3,
        logo4,
        logo5,
        logo6,
        logo7,
        logo8,
        logo9,
        logo10,
        logo11,
        logo12,
         
      ]
      const logoLower =[
    logo13,
    logo14,
    logo15,
    logo16,
    logo17,
    logo18,
    logo19,
    logo20,
    logo21,
    logo22,
    logo23,
         
      ]
     const { i18n} = useTranslation('home')
      const drag = useRef(null)
      
      const cont = useRef(null)
      useEffect(()=>{
    
    
         Draggable.create(drag.current,{
          id:"2",
          bounds: cont.current,
          type:"scroll",
          cursor:"inherit",
          inertia: true,
         
        }) 
          return ()=>{
          
         
          }
      },[]) 

    return <div  className=" w-screen min-h-screen  pb-[150px] bg-black pt-[175px] lap:gap-[185px]  overflow-x-hidden   px-8 flex flex-col">
            <Three_Block color={white} innClassName=" lap:w-[87%]" className="mb:flex-col mb:items-start items-center lap:w-full  " section="TESTIMONIAL"   ></Three_Block>
            <div  ref={cont}  className="    w-full mb:px-20px px-30px       h-[70vh] ">
               

                    <div   ref={drag} className={ i18n.language ==="vn" ?" drag  vn_mouse ":"drag  us_mouse"}>
                    <div className="   flex lap:gap-[100px]   w-auto ">
                        {
                        logoUper.map((val,i)=>{        
                            return    <ImageItem _key={val + "@" + i} src={val} alt={val}></ImageItem> 
                            })
                        } 
                     </div>
                    <div className=" lap:h-[50px]"></div>
                    <div className="   flex lap:gap-[100px] w-auto   ">
                        {
                        logoLower.map((val,i)=>{        
                            return    <ImageItem _key={val + "@" + i} src={val} alt={val}></ImageItem> 
                            })
                        }
            
                     </div>
                    </div> 
             
            </div>
    </div>
}

const ImageItem = ({src,alt,_key}:{
    src:string
    alt: string,
    _key:string
}) =>{

    return <img key={_key} src={src} alt={alt} className=" lap:w-[12.5rem] lap:h-[12.5rem]"></img>
}