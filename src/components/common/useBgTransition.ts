import { useEffect, } from "react"
import { useNavbarStore } from "../navbar/navbar_controller"
import { ScrollTrigger } from "gsap/ScrollTrigger"

type bg ="black" | "yellow" | "primary" |undefined | ""


export const useBgTransition = (ref:any,id:string,enter:bg,leaveBack:bg,leave?:bg,enterBack?:bg,config?:{
    start?:string,
    end?: string,
    markers:boolean,
    initial?:bg,
    onKill?:bg,
    depArray?:[string]
})=>{

    const { text,  toBlack,toPrimary,toYellow} = useNavbarStore()

    const  chechColor = ( obj:bg) =>{
        if(obj ==="black"){
            return toBlack()
        }
        if(obj ==="yellow"){
            return toYellow()
        }
        if(obj ==="primary"){
            return toPrimary()
        }
        return ""
    }
    
    useEffect(() => {

        chechColor(config?.initial)
        let scroll = ScrollTrigger.create({
            id:id,
            immediateRender:false,
            start: config?.start ||"top center",
            end: config?.end || "top center",
            trigger: ref?.current,
            markers:  false,
            onEnter:()=>{
             
                chechColor(enter)
            },
            onLeaveBack:()=>{
                chechColor(leaveBack)
            },
            onEnterBack:()=> chechColor(enterBack),
            onLeave: ()=> chechColor(leave)
          
        })
        return () =>{
            chechColor(config?.onKill)
            scroll?.refresh()
            ScrollTrigger.getById(id)?.kill()
        }
    },config?.depArray || [])
    return {
        text: text,
        toBlack,
        toPrimary,
        toYellow
    }
}