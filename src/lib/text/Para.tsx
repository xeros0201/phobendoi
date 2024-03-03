
 
import { Parser } from 'html-to-react'
import { Text } from '.'



 
export default function Para({
 
    children,
    className
}:{

 
    children: string | React.ReactNode
    className?:string
}) {
    

    return <Text.P_22_300 className={className}  >
            {Parser().parse(children)}
    </Text.P_22_300 >
}