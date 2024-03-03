import Three_Block from "../../../lib/layouts/Three_Block";
import Stages from "./Stages";

export default function Section5(){


    return <div className=" w-full flex  flex-col items-center gap-[80px] mb:gap-[60px]"> 
        <Three_Block section="SERVICE" className=" self-start" ></Three_Block>
        <div className=" w-full flex  justify-start ">
       
        <Stages></Stages>
        </div>
    </div>
                                               


}