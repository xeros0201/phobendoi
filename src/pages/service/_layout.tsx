import { Outlet } from 'react-router-dom'
 
import SharedLayout from './_sharedLayout'
export default function Layout() {
  
  return (
    <div   className='w-screen h-auto lap:gap-[120px] mb:gap-[70px] flex flex-col overflow-x-clip items-center justify-center '>
            <SharedLayout></SharedLayout>
      <Outlet />
    </div>
  )
}
