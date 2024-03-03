import { ErrorMessage } from "@hookform/error-message";
 
 
 
import { checkProps, checkRequired, titleCase } from "../parse";
 
import { black } from "../../../assets/color";
import { TextField } from "@mui/material";




function TextBox(props: any ) {
   
  const {register,name,type,mutation,formState:{errors},required,def,setEvent} = props
 
  const isThisFieldError = errors.hasOwnProperty(name)
  const { value ,message }  =  checkProps(name)
 
  return ( 
    <>
 
    <div className="mb:flex-col   mb:w-full flex">

<TextField
disabled={  Boolean (mutation.isLoading)}
id={name}
onChange={(e)=>{
  if(setEvent){

    setEvent(name,e.target.value)
  }
}}
fullWidth={true}
defaultValue={def||""}
type={type? type :name==="password"?name:"text"}
placeholder={`Please, enter your ${titleCase( name)} here `}
className=" flex-grow   mb:text-16px text-22px font-300  "
variant='standard'
sx={{
   
  '& .MuiInput-underline:before': { borderBottomColor: black },
  '& .MuiInput-underline:after': { borderBottomColor: black },
 
  ".css-x2l1vy-MuiInputBase-root-MuiOutlinedInput-root": {

  },
  '& .MuiInputBase-root': {
    // avoid the use of !important
    fontSize:"1.375rem",
    fontWeight:300,

      '@media (max-width: 801px)' : {
    fontSize:"1rem",
  }
    },
 
 
}}  

error={Boolean(isThisFieldError )}
 inputProps={{
 ...register(name,{required:checkRequired(name,required),
   pattern: {
     value:value,
     message: message
   },
  
 }),
 
 
 
}}
></TextField>

<ErrorMessage
errors={errors}
name={name}
render={({ message }) => <p className=" mb:text-[0.625rem]  pt-2 font-[400] text-[#d44349] text-xs  ">*{message}</p>}
/>
</div>
    </>
   );
}

export default TextBox;