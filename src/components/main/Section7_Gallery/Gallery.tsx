import { useTransHome } from "../../../i18n/i18n"
import './gallery.css'
import GalleryItem from "./galleryItem"
export default function Gallery(){
        const sample = {
            title:"title",
            detail:"detail",
            bg:"bg"
        }
        const sample_array = [sample,sample,sample]
        const { _t } = useTransHome("GALLERY",true)

    return <div className=" w-screen flex flex-col items-center h-auto px-8">
                {sample_array.map((val,i)=>{
                    return <div className={`w-screen h-screen bg-cover flex items-center bg-no-repeat  ${_t(val.bg,i)}`}>
                                <GalleryItem index={i} link={ _t(val.detail,i)} title={ _t(val.title,i)}></GalleryItem>
                    </div>
                })}
    </div>
}