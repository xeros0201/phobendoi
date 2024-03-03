 
export const Loader = () => 'Route loader'
export const Action = () => 'Route action'
export const Catch = () => <div>Route errorrrrrr</div>
 
import Section1 from "../components/main/Section1";
import Section2 from "../components/main/Section2/Section2";
import Section3 from "../components/main/Section3/Section3";
import Section4 from "../components/main/Section4_scroll/Section4";
import Section5 from "../components/main/Section5_Service/Section5";
import Section6 from "../components/main/Section6_Tesmo/Section6";
import Section7 from "../components/main/Section7_Gallery/Section7";
 
import { useNavbarStore } from "../components/navbar/navbar_controller";
 
export default function Home() {
  const { toPrimary} = useNavbarStore()

 
  return <div onLoad={()=>toPrimary()} className=" w-full flex flex-col mb:gap-[100px] mb:pb-[100px]  pb-[300px] items-center gap-[200px] ">
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Section5></Section5>
      <Section6></Section6>
      <Section7></Section7>
      {/* <Section8></Section8> */}
      {/* <Section9></Section9> */}
  </div >   
}