import { NavLink  } from "react-router-dom"
 
import { Text } from "../../../lib/text"
import { Path } from "../../../router"
 

export default function ServiceButton({ title, navigateTo }:{

    title:string | undefined
    navigateTo:Path
 
}) {
 
    return  <NavLink to={navigateTo}       
    className={active => active.isActive ? " capitalize cursor-pointer border-b border-black w-fit":" capitalize opacity-50 cursor-pointer w-fit"}>
        <Text.S_32_500 className="  ">
        {title}
    </Text.S_32_500>
    </NavLink>  
}