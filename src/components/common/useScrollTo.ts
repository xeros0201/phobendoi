import gsap from "gsap"
import { useEffect, useLayoutEffect, useRef } from "react"


export const  useScrollTo =( id:string,markers:boolean =false )  =>  {
    const container = useRef(null)
    const root = useRef(null)
     useEffect(()=>{
      let anim =   gsap.to(container.current,{
            scrollTo:{           
                x:"max" ,
              },
            
            duration:6,
            scrollTrigger:{
              id:id,
              trigger:root.current,
              start:"30% center",
              end:"80% center",
              markers:markers,
              scrub:true,
          
            }
        })

        return ()=>{
          anim?.kill()
        }
     },[])
  return {
    root,
    container
  }
}

export const  useScrollToX =( id:string,markers:boolean =false,container:any, root:any,pin?:any)  =>  {
 
   useLayoutEffect(()=>{
    let anim =   gsap.to(root.current,{
          scrollTo:{           
              x:"max" ,
            },
          
          duration:4,
          scrollTrigger:{
            id:id,
            trigger:container.current,
            immediateRender:false,
            start:"top 10%",
            end:"80% center",
            markers:markers,
            scrub:true,
            pin: pin==="none" ? false :true
          }
      })

      return ()=>{
        anim?.kill()
      }
   },[])
 
}