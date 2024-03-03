import {  useLayoutEffect, useRef, useState } from "react"
import { useService } from "../../i18n/service"
import { Text } from "../../lib/text"
import ServiceArrow from "./_attr/arrow"
import { ScrollTrigger } from "gsap/ScrollTrigger"
 
 

 

export default function Index() {
  const text = useService()
  const container = useRef(null)
  const [tab, setTab] = useState<any>({
    _0:false,
    _1:false,
    _2:false,
    
  }) 
  
 
  useLayoutEffect(()=>{
    setTimeout(()=> ScrollTrigger.getById("footer")?.refresh(),300)
  })
  const gap = 100
  return <div ref={container} className="  min-h-[200vh]   px-8 w-full flex flex-col lap:gap-[100px] mb:pb-[100px] lap:pb-[200px]">
          {text?.sections.map((val,i)=>{
             return <div className={`  w-full flex group mb:gap-[40px] lap:pb-[100px] mb:py-[60px] lap:gap-[${gap}px] flex-col border-b border-black `} key={val.title+i}>
                          {/* head */}
                        <div onClick={()=>setTab(( prev:any) =>({
                          ...prev,
                          [`_${i}`]: !prev[`_${i}`]
                        })) }   className=" cursor-pointer  flex w-full items-start justify-between ">

                            <div className="   pt-8">
                              <Text._14_400 className="  ">
                                0{i+1}
                              </Text._14_400>
                            </div>
                            <div className=" w-[85%] mb:w-[95%] flex justify-between items-center">
                                    <Text.S_96_500 className=" ">
                                      {val.title}
                                    </Text.S_96_500>
                                    <ServiceArrow className={ tab["_"+i]  ?"  mb:scale-50 mb:translate-x-5 rotate-180 duration-500 ease-in-out transition-all":" mb:scale-50 mb:translate-x-5 duration-500 ease-in-out transition-all" }></ServiceArrow>
                            </div>
                        </div>
                           {/*end - head */}
                           {/* body */} 
                         {   <div className={ ` ${tab["_"+i] ?"flex opacity-100 " :"   hidden opacity-0"}  transition-all ease-in-out duration-700 mb:w-full mb:self-start mb:gap-[60px] flex-col lap:gap-[${gap}px] lap:w-[85%] self-end ` }>
                               {
                                val.p.map((val_2,ii)=>{
                                    return <div  key={val_2.pic +ii} className="     mb:gap-[40px] flex mb:flex-col lap:gap-[100px]">
                                            <img   className=" mb:w-full   mb:rounded-[10px]   mb:h-[100vw] lap:w-[300px] lap:h-[300px]" src={val_2.pic} alt={val_2.pic}></img>

                                            <div className="  mb:gap-[20px] flex flex-col lap:gap-[30px]">
                                              <Text.S_32_500 className=" tab:justify-evenly mb:justify-between   mb:w-full mb:flex lap:flex leading-[1.2] lap:flex-col">
                                                 {val_2.tags.map((val_tags,iii)=>{
                                                  return <span className="    " key={val_tags+iii}>
                                                    {val_tags} 
                                                  </span>
                                                 })} 
                                              </Text.S_32_500>
                                              <div className=" w-full flex mb:flex-col mb:gap-[10px]  justify-between ">
                                                {val_2.para.map((val_para,iii_para)=>{
                                                    return <div className="lap:w-[48%]" key={val_para+iii_para}>
                                                          {val_para.split('/').map((p,p_i)=>{
                                                            return  <Text.P_22_300 key={p+ p_i}>
                                                                  {p}
                                                            </Text.P_22_300>
                                                          })}
                                                    </div>
                                                })}
                                              </div>
                                            </div>
                                    </div>
                                })
                               }
                          </div>  }
             </div>
          })}
  </div>
}
