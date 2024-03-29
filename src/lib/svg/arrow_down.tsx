import { twMerge } from "tailwind-merge";
import { black } from "../../assets/color";
 




export default function Arrow_down ({color =black,className=''}:{
    color?: string,
    className?:string
}) {
    
    
    return <svg className={ twMerge(" mb:scale-75",className)} width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.642427 13.7369L0.6424 0H0L2.75688e-05 13.7369C3.14744e-05 15.6883 1.5819 17.2701 3.53323 17.2701L18.3615 17.2701L12.7333 22.8984L13.1875 23.3526L19.5972 16.9429L13.1875 10.5332L12.7333 10.9874L18.3735 16.6277L3.53323 16.6277C1.93669 16.6277 0.642431 15.3335 0.642427 13.7369Z" fill={color}/>
</svg>}
