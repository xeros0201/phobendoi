import { copyRightSign } from "../../../format_common/date";

export default function ArtConnectUs(){

    return <div className=" lap:text-[15vw] mb:h-fit w-full mb:text-56px  
     mb:gap-3
     mb:static  self-end font-semibold h-full absolute flex  flex-col uppercase leading-[92%] text-black">
        <span>
        art
        </span> 
        <span>
        connects
        </span>
        <span className=" flex justify-between w-full">
         us <span className="hidden lap:inline-block  text-96 font-medium "> {copyRightSign()}</span>
        </span>
         
    </div>
}