import { useLayoutEffect, useRef } from "react"
 
import { Text } from "../../lib/text"
import ServiceArrow from "../service/_attr/arrow"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useNavigate } from "../../router"
import { useQueryProjects } from "./api"
import { Project } from "./project.type"
import { API_URL, TStrapiResponse } from "../../../axios.config"
 

 

export default function Index() {
 
  
  const listElements:any = useRef([])
  const { isLoading , data} = useQueryProjects()

   
  const navigate  = useNavigate()
  useLayoutEffect(() => {
    gsap.set(listElements.current,{opacity:0,y:200})
    let batchs = ScrollTrigger.batch(listElements?.current,{
        batchMax:1,
        interval:2,
        start:"-50% 70%",
        end:"+=10",
  onEnter: batch => gsap.to(batch,{ duration:0.4, y:0 ,opacity:1,stagger:{each:0.1 } }),
    
})

  return () => {
    batchs?.map((el)=>el?.kill() )
   
  };
}, [ ])



  if(isLoading){
    const projectSample:Project  = {
      id: Math.random()*10,
      attributes:{
        name:"phobendoi.art",
        caption:"phobendoi.art phobendoi.art phobendoi.art",
        year:  new Date().getFullYear().toString(),
        picHero:{
          data:{
            id: Math.random()*10,
            attributes:{
              formats:{
                thumbnail:{
                  name:"phobendoi",
                  url:"https://strapi.phobendoi.art/uploads/logo_14d53b5ae1.svg",
                  ext:"",
                  hash:"",
                  height:200,
                  mime:"",
                  path:"",
                  size:100,
                  width:200

              }}
            }
          }
        }
      }
  }
    const loadingSample =  Array.from({ length: 20 }, () =>  projectSample)
    return <div className=" w-full mb:pb-[70px] text-gray-500    h-auto lap:pb-[200px] px-8">
    {loadingSample?.map((val)=>{
       return  <div      className="transition-all ease-in-out cursor-pointer group w-full mb:h-fit mb:py-[40px]  lap:hover:h-[50vh] duration-500 hover:delay-200 lap:py-[3.75rem]  border-b border-black flex items-center justify-between">
             <div className="mb:pt-3   mb:self-start   ">
               <Text._14_400 className=" bg-gray-500 rounded-sm" color=" ">
                02
               </Text._14_400>
              </div>
             <div className=" mb:w-[95%]  w-[90%]"> 
               {/* header */}
                 <div className=" flex lap:gap-[3.75rem]   ">
                     <span className="mb:hidden transition-all ease-in-out bg-gray-500    lap:rotate-180  group-hover:rotate-0 lap:w-[0px] lap:h-[0px]  aspect-square duration-500 group-hover:lap:w-[200px]   group-hover:lap:h-[200px] rounded-[20px] object-contain" ></span>
                   <div className=" flex flex-col mb:gap-[20px] justify-between  w-full ">
                     <div className=" w-full mb:h-fit   flex justify-between">
                       <Text._64_500 color=" " className=" bg-gray-500  rounded-sm  capitalize align-top  mb:flex w-full justify-between lap:gap-3">
                       {val.attributes.name} <Text.P_22_300 color=" " className=" bg-gray-500  rounded-sm align-top"> {val.attributes.year}</Text.P_22_300>
                         </Text._64_500> 
                         <ServiceArrow color=" "  className="mb:hidden  stroke-gray-500 rotate-45"></ServiceArrow>
                     </div>
                     {/*  */}
                     <Text.P_22_300 color=" " className="bg-gray-500  rounded-sm  transition-all ease-in-out h-0 mb:h-auto mb:opacity-100 lap:group-hover:h-auto  duration-500 lap:group-hover:opacity-100 lap:opacity-0">
                         {val.attributes.caption}
                       </Text.P_22_300>
                   </div>
                 </div>
                {/* end header */}
             
             </div>
       </div>
     })}
</div>
  }
 
  const handleClick = ( i:any) =>{
    
    return navigate('/projects/:id',{params:{ id: i}})
  }
  const projects: TStrapiResponse<Project> = data

 
  return <div className=" w-full mb:pb-[70px]   h-auto lap:pb-[200px] px-8">
           {projects?.data?.map((val,i)=>{
              return  <div  ref={e=>(listElements.current[i]=e)} onClick={ ()=>handleClick( val.attributes.customLink)} className="transition-all ease-in-out cursor-pointer group w-full mb:h-fit mb:py-[40px]  lap:hover:h-[50vh] duration-500 hover:delay-200 lap:py-[3.75rem]  border-b border-black flex items-center justify-between">
                    <div className="mb:pt-3   mb:self-start   ">
                      <Text._14_400>
                      { i > 10 ? i+1 :  `0${i+1}`}
                      </Text._14_400>
                     </div>
                    <div className=" mb:w-[95%]  w-[90%]"> 
                      {/* header */}
                        <div className=" flex lap:gap-[3.75rem]   ">
                            <img className="mb:hidden transition-all ease-in-out  lap:rotate-180  group-hover:rotate-0 lap:w-[0px] lap:h-[0px]  duration-500 group-hover:lap:w-[200px] object-cover  group-hover:lap:h-[200px] rounded-[20px]" loading="lazy" src={`${API_URL}${val.attributes.picHero.data.attributes.formats.thumbnail?.url}`} alt=" picHero"></img>
                          <div className=" flex flex-col mb:gap-[20px] justify-between  w-full ">
                            <div className=" w-full mb:h-fit   flex justify-between">
                              <Text._64_500 className=" capitalize align-top  mb:flex w-full justify-between lap:gap-3">
                              {val.attributes.name} <Text.P_22_300 className=" align-top"> {val.attributes.year}</Text.P_22_300>
                                </Text._64_500> 
                                <ServiceArrow  className="mb:hidden rotate-45"></ServiceArrow>
                            </div>
                            {/*  */}
                            <Text.P_22_300 className="transition-all ease-in-out h-0 mb:h-auto mb:opacity-100 lap:group-hover:h-auto  duration-500 lap:group-hover:opacity-100 lap:opacity-0">
                                {val.attributes.caption}
                              </Text.P_22_300>
                          </div>
                        </div>
                       {/* end header */}
                    
                    </div>
              </div>
            })}
  </div>
}



 