 

 
type TextSize =  "14px" | "18px" | "64px" | "22px" | "32px" | "96px"
type FontSize =  100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
type TChildren =  React.ReactNode | string
type Props = {
    children: TChildren
    className?:string
    size: TextSize
    weight: FontSize
}
export class Txt {

    private    TextBase = ({children,className,size,weight}:Props)=>{

      
        return <p style={{
            fontSize: size,
            fontWeight: weight
        }} className={className}>{children}</p>
    }
    
    public _14_400({children,className}:{
        children : TChildren,
        className?: string
    }) {

        return <this.TextBase size="14px" className={className} weight={400} >{children}</this.TextBase>
    }

}