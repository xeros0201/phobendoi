 //@ts-nocheck
import { Controller } from "react-hook-form";
import ReactSelect, { components }  from "react-select";
import { toDateStr } from "../../../format_common/toDayTime";
 

function SelectHook(props) {

  const { options,name,control} = props
 
  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <img className=" w-[18px] h-[9px] " src={"https://live.staticflickr.com/65535/52258056629_db753da3c5_t.jpg"}alt="123" />
      </components.DropdownIndicator>
    );
  };
  console.log("SelecHook::::::::;", options)
  const arrayOptions = options.map((item)=>{
      return { 
        label:toDateStr(item),
        value:item
      }
  })
  return (  
    <Controller
    name={name}
    control={control}
    render={({ field:{onChange,ref,name,value} }) => ( 
      <ReactSelect
      className="  mb:text-16px cursor-pointer text-22px font-300 flex-grow"
        ref={ref}
      components={{  DropdownIndicator }}
      options ={arrayOptions}
      onChange={ ( e )=>{
      
        onChange(e.value)
        }
      }
      // defaultValue={ticket}
      placeholder={`Choose ${name}`}
      isSearchable={false}
     
      // value={ticket}
      styles={{
        indicatorSeparator:(provided,state)=>({
          ...provided,
          display:"none"
        }),
        control: (provided,state) => ({
          ...provided,
          height:"3.5rem",
          border:"none",
          outline:"none",
          boxShadow: 'none',
          paddingLeft:"15px",
          cursor:"pointer",
          "@media screen and (min-device-width: 320px) and (max-device-width: 801px)": {
            ...provided["@media screen and (min-device-width: 320px) and (max-device-width: 801px)"],
            height:"3rem",
            display:"flex",
            alignContent:"center",
            paddingLeft:"7px",
        },
        }),
        indicatorsContainer:(provided,state)=>({
          ...provided,
          padding:"15px",
          "@media screen and (min-device-width: 320px) and (max-device-width: 801px)": {
            ...provided["@media screen and (min-device-width: 320px) and (max-device-width: 801px)"],
            padding:"7px",
        },
         
        }
        ),
        option:(provided,state)=>({
          ...provided,
          background:state.isSelected?"#1B1D21":"",
  
      
        }) 
      }}
    />
    )}
    
    >

    </Controller>

  );
}

export default SelectHook;