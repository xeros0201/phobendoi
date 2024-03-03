import { useTransHome } from "../../../i18n/i18n";
import Bracket from "../../../lib/text/Bracket";
import ButtonEvent from "./ButtonEvent";
import { State } from "./Section8";
import { useEvenSectionQuery } from "./api";

export default function SectionHeader({isOpen,handleChange }:{
    isOpen: State
    handleChange : (state: State)=> void
    
}) {

        const coming = useEvenSectionQuery("coming")
        const opening = useEvenSectionQuery("opening")
        const { _t} = useTransHome("EVENT",false)
    return <div className=" w-full mb:flex-col  flex justify-between items-center mb:gap-[20px] ">
            <Bracket className=" "> {_t("title")}</Bracket>
            <div className=" mb:flex mb:flex-col  lap:flex mb:gap-[5px] lap:gap-[120px]">
                    <ButtonEvent onClick={()=> handleChange("opening")} isLoading={opening.isLoading}  count={opening?.data?.result.length} isActive={isOpen ==="opening"}>
                        {_t("subtitle")}
                    </ButtonEvent>
                    <ButtonEvent isLoading={coming.isLoading}  onClick={()=> handleChange("coming")} count={coming?.data?.result.length} isActive={isOpen ==="coming"}>
                        {_t("subtitle2")}
                    </ButtonEvent>
            </div>
            <Bracket className=" opacity-0"> {_t("title")}</Bracket>
    </div>
}