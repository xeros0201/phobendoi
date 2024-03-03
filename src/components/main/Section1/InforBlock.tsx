import { useTranslation } from "react-i18next"
import { Text } from "../../../lib/text"
import { twMerge } from "tailwind-merge"
import Button_Arrow from "../../../lib/button/Button_Arrow"
import { black } from "../../../assets/color"

export default function InfoBlock({type,className,innerClassName,color = black}:{
    type : 'main_page'| 'nav' | 'nav-mb'
    className?: string
    innerClassName?:string
    color?: string
}){
    

    const { t} = useTranslation("home")

    const  phobendoi =  t("phobendoi")
    const   stu  = t("studio")
    const   address  = t("address")
    const   office  = t("office")
    const   city = t("city")
    const   email = t("email")
    const phone  = t("phone")
    const facebook = t("facebook")

    const check = () =>{

    

        if(type==="main_page"){
            return  [
                [phobendoi],
                [stu,address],
                [office,city],
                [ <Button_Arrow>{email}</Button_Arrow> ,phone]
              ]
        
        }
        if(type==="nav"){
            return  [
               
                [stu,address],
                [office,city],
                [ <Button_Arrow color={color}>{email}</Button_Arrow> ,
                
                <Button_Arrow color={color}>{facebook}</Button_Arrow>]
              ]
        }
        if(type==="nav-mb"){
            return  [
               
                [phobendoi],
                [phone],
                [ <Button_Arrow color={color}>{email}</Button_Arrow>],
                [
                <Button_Arrow color={color}>{facebook}</Button_Arrow>
                ]
              ]
        }
    }

    const   constances_1 = check()

    return <div className={twMerge(" flex w-full uppercase lap:gap-[3vw] ",className)}>
            {constances_1?.map((val, i)=>{
                return <div className={twMerge(" flex flex-col",innerClassName)}> 
                    {
                        val.map((in_val,n)=>{
                            return  <Text._14_400 className=" mb:font-400" color={color} key={n+"@"+i}>
                            {in_val}
                        </Text._14_400>
                        })
                    }
                </div> 
            })}
    </div>
}