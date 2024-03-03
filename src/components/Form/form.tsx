//@ts-nocheck

import { useForm } from "react-hook-form"
import TextBox from "./TextBox/TextBox"
import { LoadingButton } from '@mui/lab';
import SelectObject from "./Select/SelectForEvent";
import TextAreaJSX from "./Select/TextArea";
import SelectHook from "./Select/SelectHook";
import { EventStore } from "../../pages/event-detail/eventStore";
export const useInput = ({mutation}:any) =>{

    const form =  useForm()
    const { handleSubmit } = form
      type TextProps = {
          name:string
          required:Boolean
          placeholder:string
          value?:string,
          setEvent?: (name: keyof  EventStore['data'] , value: string |number  ) => void
      }
    const  Text = ({name,required,placeholder,value,setEvent}:TextProps)=>{
      return <TextBox 
    {...form}
    setEvent={setEvent}
    mutation={mutation}
    name={name}
    def={value}
    required={required}
    placeholder={placeholder}
      ></TextBox>
    }
    const Number = ({name,required,placeholder,setEvent}:TextProps)=>{
      return <TextBox 
    {...form}
    type="number"
    setEvent={setEvent}
    mutation={mutation}
    name={name}
    required={required}
    placeholder={placeholder}
      ></TextBox>
    }
    const  SelectArray = ({name,required,options,clearName}) =>{
     
      return <SelectHook 
      {...form}
      mutation={mutation}
      name={name}
      clearName={clearName}
      options={options}
      required={required}
    
        ></SelectHook>
    }
    const submitButtonOnClick = (onClick:any,text:string,color:string,bgColor:string,isLoading:any) =>{
      return <LoadingButton  variant="contained" loading={isLoading||mutation.isLoading} sx={{
        color:color,
        background:bgColor,
        '&:hover': {
          backgroundColor: bgColor,
     
      },
      }}   onClick={handleSubmit(onClick)} >{text||"Submit"}</LoadingButton>
     }
    const  SelectObject_ = ({name,required,options}) =>{
     
      return <SelectObject 
      {...form}
      mutation={mutation}
      name={name}
      options={options}
      required={required}
    
        ></SelectObject>
    }
    const  TextArea = ({name,placeholder,setEvent})=>{
        return<TextAreaJSX
        {...form}
        setEvent={setEvent}
        mutation={mutation}
        name={name}
   
        placeholder={placeholder}
        ></TextAreaJSX>
    }
    return {
      Text,
      Number,
      form,
      submitButtonOnClick,
      SelectObject_,
      SelectArray,
      TextArea
    }
  }