import { Outlet, useLocation } from 'react-router-dom';

import { Modals } from '../routes';

import './App.css'
import Navbar from '../components/navbar/navbar';
 
import { QueryClient, QueryClientProvider } from "react-query";
import { useNavbarStore } from '../components/navbar/navbar_controller';
import Footer from '../components/footer/Footer';
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const queryClient = new QueryClient({});
export default function App() {
 const bg = useNavbarStore((state)=> state.bg)
 const {pathname} = useLocation();
 const main = useRef(null)

  const handleFooter = () =>{
    if(pathname.split('/')[1]==="projects"&&pathname.split('/')[2]){
      return
    }
   
    return  <Footer></Footer>
}
  useLayoutEffect(() => {
    let mm = gsap.matchMedia();
    
    mm.add(
      '(max-width: 1024px)',
      () => {
        ScrollTrigger.getAll().map((e)=> e.refresh()); 
      },
      main
    ); // <- scope!!!
    mm.add(
      '(max-width: 600px)',
      () => {
        ScrollTrigger.getAll().map((e)=> e.refresh()); 
      },
      main
    ); // <- scope!!!
    mm.add(
      '(max-width: 400px)',
      () => {
        ScrollTrigger.getAll().map((e)=> e.refresh()); 
      },
      main
    ); // <- scope!!!
    return () => mm.revert();
  }, []);
  return (
    <>
       <QueryClientProvider client={queryClient}>
      <main  ref={main}  className={`${bg} main px-8   min-h-screen duration-300 ease-in-out flex flex-col items-center w-screen` }>
        <Navbar></Navbar>
        <div className=' lap:h-[100px] mb:h-[70px] w-full'></div>
        <Outlet />
      { handleFooter()  }
      </main>

      <Modals />
      </QueryClientProvider>
    </>
  );
}
