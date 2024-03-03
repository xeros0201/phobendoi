import Caption_Bracket from "../../../lib/layouts/Caption_Bracket";
import Three_Block from "../../../lib/layouts/Three_Block";
 

export default function Section3() {
        

    return  <div className="   self-start w-full h-auto flex flex-col mb:gap-[40px] lap:gap-[80px]">
            <Caption_Bracket section="ABOUT_US"></Caption_Bracket>
        <Three_Block className="mb:flex-row-reverse "  offSub={true} mb_caption="hidden" offBracket={true} section="ABOUT_US"></Three_Block>
    </div>
    
}