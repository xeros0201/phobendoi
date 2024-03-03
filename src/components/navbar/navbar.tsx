import { useEffect, useRef, useState } from 'react'
import { useApiTrans } from '../../i18n/i18n'
import { _us_nav } from '../../i18n/us/nav'
import { _vn_nav } from '../../i18n/vn/nav'
import { Text } from '../../lib/text'
 
 
import gsap from 'gsap'
import { useNavbarStore } from './navbar_controller'
import { black, white } from '../../assets/color'
import { useNavigate } from '../../router'
import Navbody from './Navbody'
import { Observer } from 'gsap/Observer'
import { iconCloseMenu, iconMenu } from '../../lib/icon'
import LangSwitcher from './langSwitch'
 
export const useTransNav =() =>{
    const {t} =    useApiTrans() 
       const nav = {
        us: _us_nav,
        vn: _vn_nav,
       }
    return t(nav)
}



type NavState = "open" | "close"  | "start"
export default function Navbar(){
    const nav_text = useTransNav()
    const navigate = useNavigate()
    const nav = useRef(null)
    const nav_close = useRef(null)
    const nav_open = useRef(null)
    const [navState,setNavState] = useState<NavState>("start")
    
    const tl = useRef(gsap.timeline({id:"nav", paused:true,
   onComplete: ()=>{
        
    gsap.to(nav_open?.current,{display:"flex",duration:0.1,onComplete:()=>{
        gsap.to(nav_open?.current,{ opacity:100, y:0 ,duration:0.1})
    }})
   
   }
     
   ,onReverseComplete: ()=>{
    gsap.to(nav?.current,{ backgroundColor:"transparent"})
    gsap.to(nav_close?.current,{ display:"flex"})
    
   },
   onStart:()=>{
     gsap.to(nav?.current,{ backgroundColor:black})
    
   },
   
}))
   const text = useNavbarStore(state => state.text)
 
    useEffect (()=>{
 
       tl.current
       .to(nav?.current,{ borderRadius:"0% 0% 100% 100% / 0% 0% 35% 35% ",scale:1.1 , height:"1vh",duration:0.2,ease:"power1.in"})
       .to(nav?.current,{ borderRadius:"0% 0% 100% 100% / 0% 0% 45% 45% ",scale:1.5 , height:"130vh",duration:0.4})
       .to(nav?.current,{ borderRadius:"0% 0% 0% 0% / 0% 0% 0% 0% ",scale:1 , height:"100vh",duration:0.2,ease:"power1.out"}) 
    } ,[])
 
    useEffect(()=>{
       
            if(navState ==="start"){

            }else  if(navState ==="open"){
               
                    tl.current.play()
            }else if(navState ==="close"){
                
                tl.current.reverse(0)
            }
        },[navState])
    const handleMenu =  () =>{
        
        if(navState ==="close" || navState ==="start"){
            gsap.to(nav_close?.current,{ display:"none",duration:0.01})
            setNavState("open")
        }else if(navState ==="open"){
                gsap.to(nav_open?.current,{ opacity:0, y:-50 ,duration:0.1, onComplete:()=>{                
                        setNavState("close")
                }})
           
        }
    }
    
    const handleHome = () =>{
        if(navState ==="close" || navState ==="start"){
            return          navigate('/')
        }
        handleMenu()
        navigate('/')
      
    }
 
    useEffect(()=>{
        const show=()=>{
            if(navState!=="open"){
              gsap.to(nav_close?.current,{
                  
                  duration:0.4,
                  overwrite:true,
                  translateY:"",
                  ease:"back.out"
              })
            }
          }
          const hide=()=>{
            if(navState!=="open"){
  
                gsap.to(nav_close?.current,{
                    duration:0.4,
                    overwrite:true,
                    translateY:"-300",
                    ease:"back.out"
                })
            }
        }
        Observer.create({
            id:"1",
            target:window,
            type:"wheel,touch,pointer",
            onUp:()=>{show()},
            onDown:()=>{hide() }
            
        })
    } ,[navState])
  
    return (
        <>
         
        <div id='header' ref={nav} className={`${text}  bg-transparent lap:h-[1px] fixed z-40 w-full  b  flex flex-col   items-center px-8  `}>
       { navState ==="open"  ?  <div ref={nav_open}  className=' hidden w-full    flex-col h-full'>

        <nav id="open" className=' mb:h-[70px]  lap:h-[100px] w-full flex   justify-between items-center '>
        <Text._18_600 onClick={handleHome} color={white} className={' cursor-pointer uppercase'}>
        {nav_text.navbar.home}
        </Text._18_600>
     
        
        <Text._18_600 color={white} onClick={handleMenu} className='mb:hidden cursor-pointer uppercase'>
 
        {nav_text.navbar.close}
        </Text._18_600> 
  
        <span onClick={handleMenu}  className=' hidden mb:inline-block'>
                {iconCloseMenu()}
            </span>
        </nav> 
        <Navbody onClickNavLink={handleMenu}></Navbody>
        </div> :null }
          
        </div>
        { navState==="close" || navState ==="start" ? <nav id="close"  ref={nav_close} className='fixed mb:h-[70px] lap:h-[100px] w-full bg-transparent px-8 z-50 flex justify-between items-center '>
        <Text._18_600 color='' onClick={handleHome} className={`${text} cursor-pointer uppercase`}>
        {nav_text.navbar.home}
        </Text._18_600>
        <span className=' w-1/6 mb:w-fit tab:gap-14 mb:gap-8  flex justify-between'>
        <LangSwitcher color ={text} ></LangSwitcher> 
        <Text._18_600 color='' onClick={handleMenu} className={`${text} mb:hidden cursor-pointer uppercase`}>
        {nav_text.navbar.menu}
        </Text._18_600> 
        <span onClick={handleMenu}  className=' lap:hidden  '>
                {iconMenu(text)}
            </span>
        </span>
          
        </nav>
        :null }
        </>
    )
}