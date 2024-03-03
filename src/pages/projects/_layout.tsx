import { Outlet, useLocation } from 'react-router-dom'
 
 
 
import SharedLayout from '../service/_sharedLayout'
 
 
export default function Layout() {
   const {pathname} = useLocation();
   const handleRenderLayout = () =>{
    if(pathname.split('/')[1]==="projects"&&pathname.split('/')[2]){
      return
    }
   
    return  <SharedLayout></SharedLayout>
}

  return (
    <div  className='w-screen h-auto lap:gap-[120px] flex flex-col overflow-x-clip items-center justify-center '>
           {handleRenderLayout()}
      <Outlet />
    </div>
  )
}
