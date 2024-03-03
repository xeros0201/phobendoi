import { useTranslation } from "react-i18next";
import { Text } from "../../lib/text";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function LangSwitcher({color}:any )  { 
    const { i18n:{ language  , changeLanguage}, } = useTranslation()

    const  handleChangeLang = async (val:'vn'|'us')=>{
        if(language ===val) return
       await changeLanguage(val)
        ScrollTrigger.getAll().forEach(e=> e.refresh())
    }
   
    return <Text._18_600 color={''} className={"flex gap-1 uppercase cursor-pointer  " + color}>
        <span onClick={()=>handleChangeLang('vn')} className={language ==="vi" ? " " : " " }>
            VI
        </span>
        /
        <span onClick={()=>handleChangeLang('us')} className={language ==="us" ? " " : " " } >
            EN
        </span>
    </Text._18_600>
}