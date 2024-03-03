export default function ServiceArrow({className, color}:{
    className?:string
    color?:string
}) {

    return <svg className={className} width="85" height="87" viewBox="0 0 85 87" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.44385 36.9482L42.6967 1.69543L77.9495 36.9482" stroke={color||"#191919"}/>
    <path d="M42.6964 86.3024L42.6964 1.69565" stroke={color||"#191919"}/>
    </svg>
    
}