import { Event } from "../../pages/event/_IEvent"


export const getSrcFromEvent = (event:Event | undefined) =>{
    if(!event) return{
         src: "https://api.phobendoi.art/uploads/products/mask.svg",
         alt: "https://api.phobendoi.art/uploads/products/mask.svg"
    }
    return{ 
        
        src: event?.image?.img,
        alt: event?.image?.name,

    }
}