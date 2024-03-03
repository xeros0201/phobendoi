 
import { useEffect, useRef } from "react"
import './layout.css'
import { ProjectTitle } from "../../../i18n/projects"
import Caption_Bracket from "../../../lib/layouts/Caption_Bracket"
import Three_Block from "../../../lib/layouts/Three_Block"
import { useParams } from "../../../router"
import {   useScrollToX } from "../../../components/common/useScrollTo"
import Bracket from "../../../lib/text/Bracket"
import { Text } from "../../../lib/text"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {LazyImagesUnStyled} from "../../../lib/React-Lazy-Image/LazyImage"
import { useTranslation } from "react-i18next"
import { useQueryOneProject } from "./api"
import { API_URL, TStrapiResponse } from "../../../../axios.config"
import { Project } from "../project.type"
 

export default function Index(){
   
    const  container =useRef(null)
    const  root =useRef(null)
    const { id } = useParams('/projects/:id')
    const { i18n:{ language}} =  useTranslation()
    const title = ProjectTitle[language]
    const { isLoading, data} = useQueryOneProject(id)
    const  anim =  useScrollToX(`project${id}`,false,container,root,"none")

    useEffect(()=>{
        anim
        ScrollTrigger.getById('footer')?.disable()
      setTimeout(()=>{
        ScrollTrigger.getById(`project${id}`)?.refresh()
      },300)  
        return ()=>{
            ScrollTrigger.getById('footer')?.enable()
        }
    })
    if(isLoading) return <div> Loading</div>
    const project:TStrapiResponse<Project> = data
    if(project === null) return <div className=" h-screen w-full"> Not found</div>
    const item = project?.data[0]?.attributes
    console.log(item?.story)
    return <div className=" mb:pt-[65px] mb:gap-[40px]  w-full h-auto flex flex-col lap:gap-[150px]">
            {item?.about &&    <div className=" w-full h-auto   lap:pt-[150px]">
                    < Caption_Bracket innClassName=" mb:w-[70%]" className=" mb:w-full mb:justify-between     mb:flex-row" pages="PROJECTS" color={""} bracket={ title.about} text={item?.about}></Caption_Bracket>
                </div>}
            { item?.details &&   <Three_Block brackClassName=" mb:opacity-0"  innClassName=" mb:w-[70%]"  pages="PROJECTS"  color=" " text={{
                    title: title.detail,
                    caption:  item?.details
                    
            }} ></Three_Block>}
            <div ref={container}   className=" self-center     w-screen mb:h-[150vh] h-[250vh]  relative ">
                <div ref={root} className="  sticky  lap:top-[20%] tab:top-[14%] mb:top-[5%] hide  overflow-x-auto flex  mb:gap-3   lap:gap-5  w-auto  h-auto ">
                {  item?.pics?.data.map((item)=>{
                  console.log(item)
                    return(
                    
                        <LazyImagesUnStyled className="   rounded-2xl min-w-[26rem] h-[33rem] object-cover object-center " src={`${API_URL}`+item.attributes.formats.small?.url} alt={ item.attributes.name } />
    
                    )
                })}

                </div>
            </div>
            { item?.story  &&   <Three_Block innClassName="mb:w-full " className="   mb:pt-[60px]" offBracket={true} pages="PROJECTS"  color=" " text={{
                    subtitle: item?.story.title,
                    caption: item?.story.para
                    
            }} ></Three_Block>}
           {item?.picHero2?.data   && <div className=" w-full h-auto flex gap-[20px] flex-col">
                    <div className=" grid grid-rows-1 grid-cols-2 gap-[20px] w-full justify-between mb:gap-[20px]   mb:flex-col h-screen mb:h-auto ">
                        <LazyImagesUnStyled  className=" mb:h-[100vw] mb:w-screen h-full  w-full  object-cover mb:rounded-[10px] rounded-[20px]"    src={`${API_URL}`+item.picHero2.data[0].attributes.formats.medium?.url} alt="1" ></LazyImagesUnStyled>
                        <LazyImagesUnStyled  className="   mb:h-[100vw] mb:w-screen  h-full w-full  object-cover mb:rounded-[10px] rounded-[20px]" src={`${API_URL}`+ item.picHero2.data[1].attributes.formats.medium?.url} alt="2" ></LazyImagesUnStyled>
                    </div>
                    <LazyImagesUnStyled  className=" mb:h-[100vw] mb:w-screen mb:rounded-[10px] h-screen object-cover w-full rounded-[50px]" src={`${API_URL}`+item?.picHero2.data[2].attributes.formats.large?.url} alt="3" ></LazyImagesUnStyled>
            </div>  }
            { item?.goal1?.title  &&   <Three_Block offBracket  pages="PROJECTS"  color=" " text={{
                    subtitle: item?.goal1.title,
                    caption: item?.goal1.para
                    
            }} ></Three_Block>}

          {Array.isArray(item?.picHero3?.data)? 
            item?.picHero3?.data.map((item)=>{
              return <LazyImagesUnStyled key={item.id}  className=" h-screen object-cover w-full rounded-[50px]" src={`${API_URL}`+item?.attributes.formats.large?.url} alt={`${API_URL}`+item.attributes.formats.large?.url} ></LazyImagesUnStyled>
            }):
            null
          }
         
          { item?.goal2?.title  &&   <Three_Block offBracket  pages="PROJECTS"  color=" " text={{
                    subtitle: item?.goal2.title,
                    caption: item?.goal2.para
                    
            }} ></Three_Block>}

          {     item?.awards?.[0] &&  <div className="   lap:pb-[150px]    mb:flex-col mb:gap-[20px]  flex  justify-between">
                <Bracket color={" "}> { title.more}</Bracket>
           
  
                <div className='flex gap-[160px]  w-[80%]'>
                 <div className='   gap-[15px] flex flex-col   '>
                    {item?.awards?.map((i)=>{
                         return(
                        <div onClick={()=> window.open(i.link, '_blank')}  className=" cursor-pointer   flex items-center gap-[10px] ">
                        <Text._18_600 color=" "  className=" mb:underline mb:underline-offset-1 mb:leading-[1.3] capitalize border-b mb:border-none leading-[1] border-primary">{i.title}</Text._18_600>  <LazyImagesUnStyled className=" w-[14.5px] mb:hidden object-fill object-center h-[14.5px] " src={"https://live.staticflickr.com/65535/52253609325_f4291fae6b_o.png"} alt="" />
            </div>
         
          )
        })}
       
      
       
    </div>
      </div> 
            </div>}
    

    </div>
}