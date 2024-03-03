import { useQuery } from "react-query"
import { _axios,fetchConfig } from "../../axios_config"
import { State } from "../../components/main/Section8_Event/Section8"

import { strapiGet, strapiCollectionRes   } from "../../../axios.config"
import { Calender } from "./types/Calender"
 

 


export const useEventQuery = (key:State)=> useQuery<strapiCollectionRes<Calender>>([`Event_Page_${key}`],{
    queryFn: async ()=>{
       
        const res: strapiCollectionRes<Calender> = await strapiGet('calendars',{
            filters:{
                status:{
                    $contains:key
                } 
            },
            populate:{
                fields: "*",
                event:{
                    populate:"*"
                }
            }
        })
            
            return res 
    },
    ...fetchConfig
})


export const useEventQueryById = (id:string,key:State)=> useQuery<strapiCollectionRes<Calender>>([`Event_Detail_${id}`],{
    queryFn: async ()=>{
       
        const res: strapiCollectionRes<Calender> = await strapiGet('calendars',{
            filters:{
                $and:[
                   { status:{
                        $contains:key
                    }},
                    { url:{
                        $eq:id
                    }}
                ]
               

            },
            populate:{
                fields: "*",
                event:{
                    populate:{
                        thumbnail:"*",
                        artist:"*"
                    }
                },
                address:"*",
                tickets:"*",
                time_zone:"*"
            }
        })
     
            return res
    },
   
    ...fetchConfig
})
