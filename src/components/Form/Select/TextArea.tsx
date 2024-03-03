//@ts-nocheck
function TextAreaJSX(props) {
    const {register,placeholder,name,type,mutation,formState:{errors},required,setEvent} = props
    return ( 
      <textarea
      disabled={Boolean(mutation.isLoading)}
     { ...register(name)}
        placeholder={placeholder}
        onChange={(e)=>{
          if(setEvent){
            setEvent(name,e.target.value)
          }
        }}
      className=" px-30px mb:px-20px py-[0.938rem] mb:h-[6.25rem] mb:text-12px text-14px font-400 placeholder:mb:text-12px placeholder:text-14px placeholder:font-400 font-BVP placeholder:font-BVP border border-den w-full rounded-[5px] resize-none h-[8.125rem] "
      ></textarea>
     );
  }
  
  export default TextAreaJSX;