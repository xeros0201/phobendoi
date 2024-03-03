 
import { yellow } from "../../../assets/color"
import { useApiTrans } from "../../../i18n/i18n"
import { Text } from "../../../lib/text"
import { useNavigate } from "../../../router"
import Loading from "../../State/Loading"
import { State } from "./Section8"
import { useEvenSectionQuery } from "./api"

export default function BodyEvent({isOpen}:{
    isOpen: State
}) {
    const {data ,isLoading } = useEvenSectionQuery(isOpen)
    const {t} = useApiTrans()
    const navigate = useNavigate()

 
    const handleRenderBody = () =>{
                if(isLoading){

                    return  <div className=" bg-black w-full h-full rounded-[40rem] flex items-center justify-center">
                    <Loading></Loading>
                    </div>
                   }
                if(data?.result?.length<1){
   
                    return <ImageEvent  src={"https://live.staticflickr.com/65535/52248989095_1f7832b306_o.png"}  />
                }

                return <ImageEvent    src={data?.result[0]?.event?.image?.img} />

    }
    const handleRenderTitle = () =>{
        if(isLoading){

            return   ""
           }
        if(data?.result?.length<1){

            return  <Text.S_96_500 className=" text-center w-[70%] group-hover:inline-block hidden z-10 absolute" color={yellow}>

             Coming soon !
            </Text.S_96_500>
        }

        return   <Text.S_96_500 className="  w-[74%] group-hover:inline-block hidden z-10 absolute" color={yellow}>

            {     t(data?.result[0]?.event?.name) }
       </Text.S_96_500>
   

}


    const handleOnClickBg = ()=>{
        // change the routes
        navigate('/')
    }
    return <div className=" min-h-screen  w-full lap:pt-[65px]">
                <div onClick={handleOnClickBg} className=" cursor-pointer relative h-screen bg-[#000000] mb:rounded-[20rem] rounded-[40rem] group flex justify-center items-center">
 

                {handleRenderTitle()}
          
                <div  className="    w-full h-full bg-black  rounded-[40rem] opacity-50 absolute flex justify-center items-center">
                    
                </div>
                     { handleRenderBody()}   
                </div>
    </div>
}


const ImageEvent = ({src}:{
    src:any
})=>{
         return <img loading="lazy" className=" b w-full  h-screen object-contain  rounded-[40rem]" src={src} alt={src}/>
}