import { useMutation } from "react-query"
import { axios_strapi } from "../../../../axios.config"


export const useCreateEvent = ( )=> useMutation ({
    mutationFn: async ({data}:{
        data: any
    })=>{
       
        const res = await axios_strapi.post('api/event-billings',{
            data
        })
     
            return res.data
    },
 
  })
  
  
 