import { create } from "zustand";
 
type Store ={
    isOpen: Boolean,
 
    open: ()=> void
    close: ()=> void
 
}
export const useEventModal = create<Store>((set)=>({
    isOpen: false,
    open: () => set(( )=>({isOpen: true })),
 
    close: () => set(( )=>({ isOpen:false}))
}))