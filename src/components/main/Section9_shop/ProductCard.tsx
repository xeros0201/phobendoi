import { Text } from "../../../lib/text"
import Loading from "../../State/Loading"

export default function ProductCard({loading,src,name,onClick}:{

    loading:  boolean
    src?: string 
    name: string
    onClick?: ()=> void
}) {
 
    return <span onClick={onClick} className=" w-1/3 mb:w-full cursor-pointer  rounded-[20px] relative   h-fit flex flex-col group gap-[10px]">
         {!loading &&   <img loading="lazy"  className="self-center absolute ease-in-out  top-[40%] scale-0 group-hover:duration-500  group-hover:scale-105  z-10   " src={"https://api.phobendoi.art/uploads/products/iconYellow.svg"} />}
            <div className="lap:h-[65vh] absolute bg-black w-full opacity-0 z-[2]  group-hover:opacity-30   justify-center items-center rounded-[20px]    ">
            </div>
           {loading? <Loading className=" h-[65vh]"></Loading> :<img loading="lazy"  className="    lap:h-[65vh] rounded-[20px]  w-full  " src={src} />}
            <Text.P_22_300 className=" mb:font-500 lap:leading-[1.1] lap:font-medium">
            {name}
            </Text.P_22_300>
           
    </span>     
}