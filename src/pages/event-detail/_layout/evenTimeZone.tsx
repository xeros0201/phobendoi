

import {   Button,   } from "@mui/material";
import {  useState } from "react";

import { toHour } from "../../../format_common/toDayTime";
import { black, white } from "../../../assets/color";
import { useEventData } from "../eventStore";
 

function TimeZone({data}:any) {

 
 
 
    const { setEvent} = useEventData()
    const [selection,setSelection] = useState(null)
 

   
    const handleSelection = (i:any,value:any) =>{
      setSelection(i)
 
      setEvent("time",`${toHour(value.start_time)}-${toHour(value.end_time)}`)
    }


  return ( 
 
        
        <div className=" w-full flex flex-wrap mb:gap-y-[5px] gap-y-[1.875rem] mb:gap-[1rem] gap-[1.875rem]">
            {

          data?.time_zone.map((item:any,i:any)=>{
           
            return <Button 
            onClick={()=>handleSelection(i,item)}
                className="mb:text-16px font-BVP w-[calc(50%-0.938rem)] mb:w-[calc(50%-0.5rem)]  mb:h-[3rem] h-[3.5rem] "
              sx={{
                color:selection===i?white:black,
                border:`1px solid ${black}`,
                borderRadius:"5px !important",
                fontSize:"1.375rem",
                fontWeight:300,
                background:`${selection===i?black:"transparent"}` ,
                fontFamily:"'Be Vietnam Pro', sans-serif",
                ":hover":{
                  backgroundColor:`${selection===i?black:"rgba(0, 0, 0, 0.1)"}`,     
                },
                '@media (max-width: 801px)' : {
                  fontSize:"1rem",
                }

                
              }}
            >
                {toHour(item.start_time)}-{toHour(item.end_time)}
            </Button>
          })    
            }
        </div>
      
       
    
    )}
 
 
export default TimeZone;