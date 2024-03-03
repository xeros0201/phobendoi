
import { copyRightSign } from "../../../format_common/date";
import ArtConnectUs from "./ArtConnectUs";
 
import InfoBlock from "./InforBlock";

export default function Section1(){

     

    
 
    return <div className=" w-full h-screen mb:h-full relative mb:flex mb:flex-col-reverse  mb:gap-24 mb:justify-end  mb:pt-[4.375rem]  ">
          <span className="hidden mb:inline-block  text-56px font-600 "> {copyRightSign()}</span>   
        <ArtConnectUs></ArtConnectUs>   
        <InfoBlock innerClassName=" items-end  mb:items-start  " className=" mb:justify-start mb:flex-col mb:items-start h-fit mb:static lap:hidden   absolute z-10 lap:justify-end lap:pt-10" type="nav-mb"></InfoBlock>
        <InfoBlock innerClassName=" items-end" className="  justify-end items-end pt-2   h-fit   mb:hidden    absolute z-10  " type="main_page"></InfoBlock>
    </div>
}