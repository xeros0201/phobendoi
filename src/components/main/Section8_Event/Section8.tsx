    import {   useState } from "react"
import SectionHeader from "./SectionHeader"
import BodyEvent from "./BodyEvent"
 
export   type State= "opening"| "   " | undefined | "" | string
export default function Section8({}) {
 
  
    const [isOpen,setIsOpen ] = useState<State>("opening")
  
 
    
    return <div className=" w-screen mb:pt-[80px] mb:pb-[105px] lap:pt-[165px] flex flex-col items-center px-8 lap:pb-[120px] min-h-[100vh]  bg-yellow ">
            <SectionHeader    handleChange={setIsOpen} isOpen={isOpen}   ></SectionHeader>
            <BodyEvent  isOpen={isOpen}  ></BodyEvent>
    </div> 
} 