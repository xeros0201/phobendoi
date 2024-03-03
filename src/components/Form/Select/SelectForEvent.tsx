// @ts-nocheck
import { isSameDay, parseISO } from "date-fns";
import { useEffect, useRef, useState } from "react";
import { Controller, useWatch } from "react-hook-form";
import { useTranslation } from "react-i18next";
import ReactSelect, { components }  from "react-select";
import { useEventData } from "../../../pages/event-detail/eventStore";
 

function SelectObject(props:any) {

  const { options,name,control,watch,reset ,resetField,setValue} = props
 
  const { i18n:{language:lang}} = useTranslation()
 
  const { event, setEvent} = useEventData()
  const selectInputRef:any = useRef();
 
 
 
  const DropdownIndicator = (props:any) => {
    return (
      <components.DropdownIndicator {...props}>
        <img className=" w-[18px] h-[9px] " src={"https://live.staticflickr.com/65535/52258056629_db753da3c5_t.jpg"}alt="123" />
      </components.DropdownIndicator>
    );
  };

 
  return (  
    <Controller
    name={name}
    control={control}

    render={({ field:{onChange,ref,name,value} }) => ( 
      <ReactSelect
      className="  mb:text-16px cursor-pointer text-22px font-300 flex-grow"
      ref={selectInputRef}
      components={{  DropdownIndicator }}
      options ={options}
      onChange={  e => {
        setEvent("ticket",e)
        onChange(e)
      }
        
      }
      value={event.ticket}
      getOptionLabel={e=> e.name}
      getOptionValue={e=>e}
     
      placeholder={"Choose your ticket"}
      isSearchable={false}
     
      
      styles={{
        indicatorSeparator:(provided,state)=>({
          ...provided,
          display:"none"
        }),
        control: (provided:any,state) => ({
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
        indicatorsContainer:(provided:any,state)=>({
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

export default SelectObject;