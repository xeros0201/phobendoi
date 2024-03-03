import { twMerge } from "tailwind-merge";
 
export default function Spacer({className }:{
    className?: string
 
}){
    return <div className={twMerge(" opacity-0 ",className)}></div>
}
 