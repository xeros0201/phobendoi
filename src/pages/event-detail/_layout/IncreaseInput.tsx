 
import { useEffect } from "react";
import { iconNega, iconPlus } from "../../../lib/icon";
import { useEventData } from "../eventStore";
 

function Increase() {
 
  
  const  { event , setEvent} = useEventData()
  useEffect(() =>{
    setEvent('quantity', 0);
 
  },[event?.ticket?.id])
  const hanleNega = ( ) =>{
      if(!event.ticket.id) return
      if(event.quantity===1||event.quantity===0) return
      setEvent("quantity", event.quantity - 1)
    
  }
  const hanlePlus = () =>{
    if(!event.ticket.id) return
    setEvent("quantity", event.quantity + 1)
    
  }
  return (  
 
      
      <div className="w-[calc(50%-0.938rem)] mb:h-[3rem] mb:w-full  h-[3.5rem] px-[1.688rem] justify-between bg-trang rounded-[5px] flex items-center">
          <span onClick={()=>hanleNega()} className=" justify-start   h-full cursor-pointer flex items-center flex-grow">
            {iconNega()}
          </span>
          <input  disabled defaultValue={event?.quantity|| 0}    value={event?.quantity|| 0} size={2} max={100} maxLength={3}  className=" bg-transparent focus:outline-none focus:border-none font-light h-full text-22 text-center w-fit "></input>
        <span onClick={()=>hanlePlus()} className=" h-full cursor-pointer flex items-center justify-end flex-grow">{iconPlus()}</span>
      </div>
       
    
    )
}
 
 
 

export default Increase;