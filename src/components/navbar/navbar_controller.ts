import { create } from "zustand";
 
type NavBarStotr ={
    text: string,
    bg: string,
    toYellow: ()=> void
    toPrimary: ()=> void
    toBlack: ()=> void
}
export const useNavbarStore = create<NavBarStotr>((set)=>({
    text: "text-black",
    bg: " bg-primary",
    toYellow: () => set(( )=>({text:"text-black" ,bg: "bg-yellow" })),
    toPrimary: () => set(( )=>({text:"text-black", bg:"bg-primary" })),
    toBlack: () => set(( )=>({text:"text-white", bg:"bg-black"}))
}))