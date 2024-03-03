import Three_Block from "../../../lib/layouts/Three_Block";
import Gallery from "./Gallery";

export default function Section7(){


    return <div className=" w-full min-h-screen flex items-center flex-col lap:gap-[150px] mb:gap-[60px]">
            <Three_Block section="PROJECTS"  className=" self-start  " ></Three_Block>
            <Gallery></Gallery>
    </div>
}