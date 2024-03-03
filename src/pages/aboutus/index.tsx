import { useLayoutEffect } from "react";
import InfoBlock from "../../components/main/Section1/InforBlock";
import { useNavbarStore } from "../../components/navbar/navbar_controller";
import { copyRightSign } from "../../format_common/date";
import { useAbout } from "../../i18n/about";
import Caption_Bracket from "../../lib/layouts/Caption_Bracket";
import Three_Block from "../../lib/layouts/Three_Block";
import { Text } from "../../lib/text";
import Bracket from "../../lib/text/Bracket";
import pic1 from './about.9afba47bc8301c0c028a.png'
import pic2 from './abouthero2.76812cc77e8e07baf45e.png'
import { LazyImagesUnStyled } from "../../lib/React-Lazy-Image/LazyImage";
export default function Index(){

const { toPrimary} = useNavbarStore()

useLayoutEffect(()=>{
        toPrimary()
},[])

const text = useAbout()
        return <div className="  w-full  flex flex-col lap:gap-[200px] mb:gap-[50px] lap:pt-[50px] mb:items-start items-center justify-center  h-auto">
                {/* s1 */}
                <div className=" flex flex-col">
                 <Bracket>
                  {text?.title}
                 </Bracket>
                 <div className=" justify-between  flex">

                        <Text.S_96_500 className=" w-[85%] mb:w-full mb:text-28px leading-[1.2] lap:tracking-wide capitalize">
                                {text?.caption}
                        </Text.S_96_500>
                        <Text.S_32_500 className=" mb:hidden self-end">
                                {copyRightSign()}
                        </Text.S_32_500>
                 </div>
                </div>
                {/* s2 */}
                <div className=" w-full flex min-h-screen justify-between">
                        <InfoBlock className="mb:hidden lap:gap-[20px] w-fit flex-col" type="main_page"></InfoBlock>
                        <LazyImagesUnStyled className=" lap:h-[120vh] mb:w-full  w-full"   src={pic1} alt={pic1}></LazyImagesUnStyled>
                </div>
                <Three_Block innClassName="mb:w-full" className=" mb:flex-col self-start"   pages="ABOUT_US" text={text?.sct3} ></Three_Block>
                <LazyImagesUnStyled   className=" w-full mb:self-center h-screen mb:w-screen mb:object-cover " src={pic2} alt={pic2}></LazyImagesUnStyled>
                <Three_Block innClassName="mb:w-full" className=" mb:flex-col self-start"     pages="ABOUT_US" text={text?.sct5} ></Three_Block>
                <div className="w-screen self-center px-8  py-[200px] bg-yellow">

                <Caption_Bracket className="  self-start" text={text?.sct6} ></Caption_Bracket>
                </div>
        </div>
}