import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { initReactI18next} from "react-i18next"
import HOME_VI from './vn/home.json'
import HOME_EN from './us/home.json'
import { pages } from "../lib/layouts/Caption_Bracket";

const resources ={
    us:{
        home: HOME_EN
    },
    vn:{
        home:  HOME_VI
    }
}

const defaultNS = 'home'
i18next.use(initReactI18next).init({
    resources,
    lng:'vn',
    ns:['home'],
    fallbackLng: 'vn',
    defaultNS,
    interpolation :{
        escapeValue: false
    }
})



export const useTransHome = (pages: pages , array:boolean=false ) =>{
   const {t } =    useTranslation("home")
    if(array){
        return    { 
        
            _t:  (string:any,index?:any)=> t(`${pages}.${index}.${string}`)
          
          }
    }

    return{ 
        
      _t:  (string:any)=> t(`${pages}.${string}`)
    
    }

}


export const useApiTrans = () =>{
    const {i18n } =    useTranslation()
    
    return{ 
      t :  ( obj: any) => obj[i18n.language] }
}

 