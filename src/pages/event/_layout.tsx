import { Outlet } from 'react-router-dom'
import './event.css'
import EventSidebar from './_eventSidebar'
 
export default function Layout() {

   

 
  return (
    <div className=' px-8 flex w-screen   min-h-screen  relative mb:flex-col  mb:pt-[20px] lap:pt-[30px]   '>
      <div className='sidebar flex flex-col justify-between mb:w-full mb:h-auto mb:flex-col-reverse  sticky lap:top-[130px]  w-[40%]  h-[82vh] '>
          <EventSidebar></EventSidebar>

      </div>
      <div className=' flex  w-[60%]  mb:w-full '>
 
    

      <Outlet />
  
      </div>
    </div>
  )
}
