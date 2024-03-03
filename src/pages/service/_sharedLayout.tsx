
import Caption_Bracket from '../../lib/layouts/Caption_Bracket'
import { useService } from '../../i18n/service'
import { copyRightSign } from '../../format_common/date'
import { Text } from '../../lib/text'
import pic from './hero_pic.png'
 
 
import Bracket from '../../lib/text/Bracket'
import ServiceButton from './_attr/ServiceButton'
import { useRef } from 'react'
import { useBgTransition } from '../../components/common/useBgTransition'
export default function SharedLayout() {
  
    const text = useService()
    const root = useRef(null)
 
    const {} = useBgTransition(root,"service","yellow", "yellow","primary","yellow",{
        markers:false,
        start: "top top",
        end: "center center",
        initial:"yellow",
        onKill:"primary"
    })
  return (
    <div ref={root} className='w-screen h-auto mb:gap-[50px] mb:pt-[30px] lap:gap-[120px] flex flex-col overflow-x-clip items-center justify-center '>
        <div className='  px-8 w-full flex justify-between'>
        <Caption_Bracket className=' lap:w-[80%]' text={text}></Caption_Bracket>
        <Text.S_32_500 className=' mb:hidden'>

        {copyRightSign()}
        </Text.S_32_500>
        </div>
        <img src={pic} className=' rounded-[30rem] w-[150vw]  object-cover h-screen ' alt={pic}></img>
        <div className=' mb:pt-[70px]  px-8 w-full flex mb:justify-center  justify-between items-center  '>
            <Bracket className='mb:hidden justify-self-start'>
                {text?.bracket}
            </Bracket>
                <div className=' flex   mb:gap-[20px]   lap:gap-[50px]   '>
                        <ServiceButton  navigateTo='/service' title={text?.title1}></ServiceButton>
                        <ServiceButton navigateTo='/projects'   title={text?.title2}></ServiceButton>
                </div>  
                <Bracket className=' mb:hidden opacity-0 justify-self-start'>
                {text?.bracket}
            </Bracket>
        </div>
 
    </ div>
  )
}
