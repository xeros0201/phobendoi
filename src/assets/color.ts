
export const black = "#191919"
export const primary = "#F7F3EE"
export const yellow = "#FFDD00"
export const white ="#FFFFFF"




export const checkColor= (color:string) =>{

        if(color ==="text-black") return black
        if(color ==="text-white") return white
        if(color ==="text-primary") return primary
        if(color === "text-yellow") return yellow

        return color
}