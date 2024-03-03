import { Media } from "../../strapi.types.config"
import { LazyImagesUnStyled } from "./LazyImage"

 const strapi_base_url ="https://adminv3.phobendoi.art"

const imageURL =  (url:string) =>{
    return `${strapi_base_url}${url}`
}

export type ImageFormat =  "large" | "medium" | "small" | "thumbnail"


class getStrapiImageClass {
    fallBackUrl 
    constructor({fallBackUrl}:{
        fallBackUrl?: string
    }){
        this.fallBackUrl =  fallBackUrl || '/images/noihoido.png'
    }
    

    getStrapiImage= (data:  Media | undefined | string,type:ImageFormat,fallBackUrl?:string) => {
        let fallback = fallBackUrl || this.fallBackUrl
         try {
             
             if( typeof data ==="string"){
                 return data
             }
                
             if(data === undefined){
                 return fallback
             }
            if(Array.isArray(data.data)){
                console.log(`:::::::::::::::::::: error::::::::: ${data.data.attributes} is an array`)
                return 
            }
             let format =  data?.data.attributes.formats
            
             if(format === null){
                return imageURL(data?.data.attributes.url) 
             }
             let img = format[type]
             
            if(img){
                 return `${strapi_base_url}${format[type]?.url}`   
             }
          
             if(format["large"] &&  type !=="large" ){
                 return imageURL(format["large"]?.url) 
             }
             if(format["medium"] &&  type !=="medium" ){
                 return imageURL(format["medium"]?.url) 
             }
             if(format["small"] &&  type !=="small" ){
                 return imageURL(format["small"]?.url)  
             }
             if(format["thumbnail"] &&  type !=="thumbnail" ){
                 return imageURL(format["thumbnail"]?.url) 
             }
             return fallback
         } catch (error) {
 
             console.log({error})
             return fallback
         }
    }
    
}

const strapiImage = new getStrapiImageClass({})

export const getStrapiImage = strapiImage.getStrapiImage

export default function ImageStrapi({item,type,className}:{
    item: string | Media | undefined |any
    type:ImageFormat
    className?: string
}) {
    
    const data = getStrapiImage(item,type) as string

    const imgageProps = item as Media
    return <LazyImagesUnStyled src={data} className={className}  preload_url={getStrapiImage(item,"thumbnail") as string}    alt={imgageProps.data.attributes?.alternativeText||data} ></LazyImagesUnStyled>
}