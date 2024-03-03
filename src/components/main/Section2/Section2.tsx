 
import {   useRef,useEffect } from 'react'
import gsap from 'gsap'
 
import inside_pic from './inside_pic.jpg'
import city_of_art from './cityofart.svg'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import   { LazyImagesUnStyled } from '../../../lib/React-Lazy-Image/LazyImage'
export default function Section2(){
    const root = useRef(null)
    const polygon = useRef(null)
    const pic1 = useRef(null)
    const text1 = useRef(null)
    useEffect(()=>{
      let batch_1 =    ScrollTrigger.batch(polygon?.current,{
        
          start:"20% center",
          end:"+=500",
          onEnter :()=>{
            gsap.to(pic1.current,{duration:1,width:"95vw",borderRadius:"45rem",ease:"Power4.easeInOut"})
          
            gsap.to(text1.current,{duration:1,scale:2,ease:"Power4.easeInOut"})
          },
       
          onLeave :()=>{
            gsap.to(pic1.current,{duration:1,width:"30vw",borderRadius:"45rem",ease:"Power4.easeInOut"})
            gsap.to(text1.current,{duration:1,scale:1,ease:"Power4.easeInOut"})
          },
          onLeaveBack: ()=>{gsap.to(pic1.current,{duration:1,width:"35vw",borderRadius:"45rem",ease:"Power4.easeInOut"})
                            gsap.to(text1.current,{duration:1,scale:1,ease:"Power4.easeInOut"})
        },
          onEnterBack:()=>{gsap.to(pic1.current,{duration:1,width:"95vw",borderRadius:"45rem",ease:"Power4.easeInOut"})
                          gsap.to(text1.current,{duration:1,scale:2,ease:"Power4.easeInOut"})
        }
       
          
        })
        let batch_2=  ScrollTrigger.batch(polygon?.current,{
       
          start:"20% center",
          end:"+=500",
          onEnter :()=>{gsap.to(polygon.current,{ keyframes:[
            { duration:0.7, clipPath : "ellipse(500% 50% at 50% 50%)"},
            { duration:0.1, clipPath : "ellipse(500% 70% at 50% 50%)"},
       
          ],ease:"Power4.easeInOut"})},
      
          onLeave:()=>{gsap.to(polygon.current,{duration:0.7,clipPath:"ellipse(80% 50% at 50% 50%)",ease:"Power4.easeInOut"})},
          onEnterBack: ()=>{gsap.to(polygon.current,{ keyframes:[
            { duration:0.7, clipPath : "ellipse(500% 50% at 50% 50%)"},
            { duration:0.1, clipPath : "ellipse(500% 70% at 50% 50%)"},
       
          ],ease:"Power4.easeInOut"})},
          onLeaveBack:()=>{gsap.to(polygon.current,{duration:0.7,clipPath: "ellipse(80% 50% at 50% 50%)",ease:"Power4.easeInOut"})},
       
          
        })
          return () =>{
              batch_1?.map((tl)=> tl?.kill())
              batch_2?.map((tl)=> tl?.kill())
          }
      },[])


    return <div ref={root} className=" w-screen h-auto overflow-clip"> 
               
        <div ref={polygon} style={{ clipPath: "ellipse(80% 50% at 50% 50%)"}}  className=' flex justify-center mb:h-fit mb:bg-transparent items-center non-Rec bg-yellow h-[150vh] w-screen '>
          <div  ref={pic1} className='rounded-[45rem]  flex justify-center items-center h-[95vh] w-[30vw] mb:w-screen  '>

        <LazyImagesUnStyled  className='rounded-[45rem] object-cover w-full h-[95vh]' src={inside_pic} alt=""></LazyImagesUnStyled>
          </div>
        <img ref={text1} className=' mb:h-[139px] mb:w-[139px] h-[20vh] object-contain  absolute w-[10vw]' src={ city_of_art} alt="" />
    </div>
    </div>
}