import { format, parseISO } from "date-fns"
import { vi , enUS} from "date-fns/locale"
 


 
export const toDateStr = (date:string | undefined,lang?: "vn" | "us"|string  ) =>{
        
        if(!date) {
            return "loading...."
        }
        
        if(lang==="vn"){

            return format( parseISO(date),"EEEE-dd.MM.yyyy",{locale:vi})
        }
 
        return format( parseISO(date),"EEEE-dd.MM.yyyy",{locale:enUS})
   }


   export const toHour = (date:string | undefined  ) =>{
       if(!date) {
           return "loading...."
       }
        try {
            let formatted =  format( parseISO(date),"HH'H'mm",{locale:vi})  
            
            return formatted
        } catch (error) {
 
            const parts = date.split(':');
                if (parts.length >= 2) {
                    // Assuming the first part is hours and the second part is minutes
                    const hours = parts[0];
                    const minutes = parts[1];

                    // Formatting to '9h00' style
                    return `${parseInt(hours)}h${minutes}`;
                } else {
                    return 'Invalid time format';
                }
        }
    
    
 
}