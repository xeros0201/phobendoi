import { useTransHome } from "../../../i18n/i18n"
import Arrow_down_big from "../../../lib/svg/arrow_down_big"
import { Text } from "../../../lib/text"

 
export default function Stages(){

     const { _t  } = useTransHome("SERVICE.stage")
    const title= "title"
    const subtitle1= "subtitle1"
    const subtitle2= "subtitle2"
    const subtitle3= "subtitle3"
  const   stages = [
        {
            title ,
            subtitle1 ,
            subtitle2 ,
            subtitle3 ,
            
        },  
        {
            title ,
            subtitle1 ,
            subtitle2 ,
   
        },  
         {
        title ,
        subtitle1 ,
        subtitle2 ,
         },]

           
    return <div className="lap:w-[87%]   mb:w-full  flex     ">
         <div className=" w-[30%] mb:hidden"></div>  
         <div className=" w-[70%]  flex flex-col mb:w-full    ">
            {stages.map((val,i)=>{
                        return <div className="mb:py-[20px] tab:py-[40px] lap:hover:pb-[60px] mb:w-full lap:hover:pt-[60px] duration-700 hover:duration-700  group border-b flex flex-col h-auto tab:gap-[40px]  mb:gap-[20px] gap-[50px] border-black ">
                                <div className=" flex items-center relative">
                                        <span className="  mb:hidden w-[7%]"></span>
                                        <span className=" mb:hidden absolute opacity-0 group-hover:delay-500 group-hover:opacity-100 duration-500 ease-in-out w-[7%]">
                                        <Arrow_down_big></Arrow_down_big>
                                        </span>
                                        <span className="mb:text-12px mb:font-normal mb:-translate-y-4 lap:absolute mb:opacity-100 lap:group-hover:opacity-0 delay-300 lap:group-hover:translate-y-4 duration-500 ease-in-out  w-[7%]">
                                        {`0${i+1}`}
                                        </span>
                                        <Text.S_96_500 className=" mb:hidden lap:text-[6.46vw] inline-block leading-[1.2]">
                                            {_t( i + "." + val.title)}
                                        </Text.S_96_500>
                                        <Text.S_96_500 className=" hidden mb:leading-[0.9]  mb:inline-block leading-[1.2]">
                                            { i ===0 ? _t( i + "." + val.title).split(' ')[1]: _t( i + "." + val.title)}
                                        </Text.S_96_500>
                                </div>
                                <div className="mb:h-auto mb:flex lap:group-hover:flex lap:group-hover:h-auto h-0">
                                    <Text._14_400 className=" mb:opacity-0 uppercase group-hover:delay-500 opacity-0 lap:group-hover:opacity-100 lap:group-hover:translate-y-0 group-hover:duration-300 group-hover:ease-in-out translate-y-[-10px] lap:font-bold w-[7%] " >{`0${i+1}`}</Text._14_400>
                                    <div className=" flex lap:gap-[100px]  mb:h-auto mb:flex mb:flex-col">

                                    <Text._14_400 className="uppercase hidden mb:inline-block group-hover:inline-block">{_t( i + "." + val.subtitle1)}</Text._14_400>
                                    <Text._14_400 className="uppercase hidden mb:inline-block group-hover:inline-block">{_t( i + "." + val.subtitle2)}</Text._14_400>
                                  { val.subtitle3 && <Text._14_400 className="uppercase mb:inline-block hidden group-hover:inline-block">{_t( i + "." + val.subtitle3)}</Text._14_400>}
                                    </div>
                                </div>
                           </div>
            })}
        </div> 
    </div>  
}