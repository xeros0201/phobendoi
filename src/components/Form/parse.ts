 


export function titleCase(string:string){
 try {
  let stringg = string[0]?.toUpperCase() + string.slice(1).toLowerCase()
 
  return  stringg.replace(/_|-|\./g, ' ')  
 } catch (error) {
 
  console.log(error)
  return
 }

}

export const mailRegex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)
export const  numbeRegex = new RegExp('^[0-9]*$')
export const checkProps =(field:string ) =>{
  let value 
  let message 
    if(field==="mail"||field==="email"){
      value=mailRegex
      message="*Email notvalid"
    }
  
  return {
    value:value,
    message:message
  }
}
export const checkRequired =(key:string,value?:string ) =>{
 
  if(value){
    return `${titleCase(key)} is required !`
  }
   return false

}
  
 
 
 

 