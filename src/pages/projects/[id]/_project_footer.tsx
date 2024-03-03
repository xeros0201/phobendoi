import gsap from "gsap"
import arrow from './arrow.svg'
import left from './arrowleft.svg'
import right from './arrowright.svg'
import { useNavigate } from "../../../router"
import { Text } from "../../../lib/text"
import { white } from "../../../assets/color"
export default function ProjectFooter({ id,max}:{
    id:string
    max:number
}) { 
  
    const navigate = useNavigate()

    return    <div className=" w-full flex    justify-center mb:pb-[60px] ">
    <div className=" self-center  w-full     border-t border-b border-primary ">

<Text._14_400 color={white} className=" mb:h-[20vh]  h-[42vh] relative mb:justify-between justify-center items-center w-full flex  ">

<img onClick={()=>{

    if(id ==="0") return
     navigate('/projects/:id',{params:{id: (parseInt(id)-1).toString()}})
  gsap.to(window,{scrollTo:{y:0 }})
  }} className=" cursor-pointer     lap:hidden" src={left} alt="123" />
<img onClick={()=>{ 
        if( parseInt(id)===max-1) return
        navigate('/projects/:id',{params:{id: (parseInt(id)+1).toString()}})
  gsap.to(window,{scrollTo:{y:0 }})}} className="  cursor-pointer  lap:hidden     " src={right} alt="123" />

   <div className=" peer  group w-[50%]  mb:hidden  justify-end items-center gap-[5vw] flex">
   <div className=" w-[40vw] flex justify-start items-center ">

  <img onClick={()=>{
    if(id ==="0") return
     navigate('/projects/:id',{params:{id: (parseInt(id)-1).toString()}})
  gsap.to(window,{scrollTo:{y:0 }})
  }} className=" cursor-pointer absolute  mb:scale-50 " src={arrow} alt="123" />

    </div>
      <div className=" absolute opacity-0 group-hover:opacity-100 flex justify-center  mb:hidden translate-x-[5vw] w-[10vw] uppercase"> previous </div>
   </div>
   <div className=" peer group   w-[50%] mb:hidden flex items-center gap-[5vw]">
   <div className=" absolute uppercase  opacity-0 group-hover:opacity-100 flex justify-center mb:hidden   translate-x-[-5vw] w-[10vw]  "> next </div>
   <div className=" w-[40vw]    flex justify-end items-center ">

   <img onClick={()=>{ 
        if( parseInt(id)===max) return
        navigate('/projects/:id',{params:{id: (parseInt(id)+1).toString()}})
  gsap.to(window,{scrollTo:{y:0 }})}} className=" mb:scale-50 cursor-pointer  absolute rotate-[180deg] " src={arrow} alt="123" />
   </div>
   </div>
   <div className="mb:hidden opacity-50 absolute peer-hover:opacity-0 uppercase flex justify-center w-[6vw]">{ `(next up)` }</div>
</Text._14_400>
    </div>
      </div> 
}