import { Outlet } from "react-router-dom";
 
import { useEffect, useRef } from "react";
import { useBgTransition } from "../../../components/common/useBgTransition";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useParams } from "../../../router";
import { ProjectTitle } from "../../../i18n/projects";
import { Text } from "../../../lib/text";
import Footer from "../../../components/footer/Footer";
import { LazyImagesUnStyled } from "../../../lib/React-Lazy-Image/LazyImage";
import { useTranslation } from "react-i18next";
import { useQueryOneProject } from "./api";
import { API_URL, TStrapiResponse } from "../../../../axios.config";
import { Project } from "../project.type";
 
 



export default function Layout (){
        const root = useRef(null)
        const { i18n:{ language}} =  useTranslation()
        const title = ProjectTitle[language]
        const transition  = useBgTransition(root,"project","black","black","black","black",{
            markers:false,
            start:"20% center",
            end:"bottom center",
            initial:"black",
            onKill:"primary"
        })
        const { id } = useParams('/projects/:id')
        useEffect(() => {
            transition.text
            window.scrollTo(0,0)
            ScrollTrigger.getById("footer")?.disable()
          return () => {
            ScrollTrigger.getById("footer")?.enable()
          }
        }, [])
 
        const { isLoading, data} = useQueryOneProject(id)

    if(isLoading) return <div>Loading</div>
    const project:TStrapiResponse<Project> = data
 
    return <>
    <div ref={ root} className=" relative   text-white w-screen h-auto flex flex-col items-center justify-center" > 
     
        <div className=" mb:gap-[80px] lap:pt-[100px] mb:mt-[-70px]  mb:pt-[70px] lap:mt-[-100px] bg-black z-10 h-screen flex flex-col  items-end w-full px-8">
                <div className="  w-[80%] mb:w-full mb:pt-[30px]  ">
                    
                    <div className="   flex mb:grid mb:grid-cols-3 lap:gap-[150px]  w-full">
                        {  project?.data[0]?.attributes.type?.[0].text &&  <div className=" flex flex-col gap-4 lap:w-[253px]">
                                <Text._14_400 color=""  className=" uppercase  lap:font-semibold">
                                    {title?.categories}
                                </Text._14_400>
                                <span className=" flex flex-col">

                                {
                                    project?.data[0]?.attributes.type.map((val,i)=>{
                                        return <Text._14_400 color="" key={val.text+i}>
                                                {val.text}
                                        </Text._14_400>
                                    })
                                }
                                </span>
                            </div>}
                        { project?.data[0]?.attributes.cooperation &&  <div className=" flex flex-col gap-4 lap:w-[253px]">
                                <Text._14_400 color=""  className=" uppercase  lap:font-semibold">
                                    {title?.coop}
                                </Text._14_400>
                                <Text._14_400 color=" ">
                                    { project?.data[0]?.attributes.cooperation}
                                </Text._14_400>
                                
                            </div>}
                            { project?.data[0]?.attributes.sponsers &&  <div className=" flex flex-col gap-4 lap:w-[253px]">
                                <Text._14_400 color=""  className=" uppercase  lap:font-semibold">
                                    {title?.coop}
                                </Text._14_400>
                                <Text._14_400 color=" ">
                                    {project?.data[0]?.attributes.sponsers.map((val,i)=>{
                                        return <span key={val.text+i}> 
                                            {val.text}
                                        </span>
                                    })}
                                </Text._14_400>
                                
                            </div>}
                    </div>
                </div>
                <div className=" w-full flex mb:justify-normal mb:gap-[20px] justify-between mb:flex-col mb:items-start items-center   h-full">
                                <Text.S_32_500 color="">
                                    {project?.data[0]?.attributes.year}
                                </Text.S_32_500>    
                                <div className=" mb:w-full w-[80%]">
                                    <Text.S_96_500 className=" tab:text-56px   mb:text-28px" color="">
                                         {project?.data[0]?.attributes.caption}
                                    </Text.S_96_500>
                                    </div>  
                </div>
        </div>

        <div className=" w-auto h-auto sticky top-0 z-10">

        <LazyImagesUnStyled className=" w-screen object-cover  h-screen sticky top-0 z-10 " src={`${API_URL}`+project.data[0].attributes.picHero.data.attributes.formats.large?.url}></LazyImagesUnStyled>
        </div>
          {/* <div className="  w-screen h-screen bg-transparent">

          </div> */}
          <div className="  z-10 w-screen h-auto bg-black  px-8">

        <Outlet></Outlet>
          </div>

    </div>
    <Footer></Footer>
    </> 
}