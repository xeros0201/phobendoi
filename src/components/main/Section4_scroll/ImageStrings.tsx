import pic_1 from './1.png'
import pic_2 from './2.png'
import pic_3 from './3.png'
import pic_4 from './4.png'
import pic_5 from './5.png'
import pic_6 from './6.png'
import pic_7 from './7.png'
import pic_8 from './8.png'
import pic_10 from './10.png'
import pic_9 from './9.jpg'
 
import { useScrollTo } from '../../common/useScrollTo'
 


const ImageView = {
    MB :[[pic_1],[pic_2],[pic_5],[pic_4],[pic_8],[pic_10]],
    PC:  [[pic_1],[pic_2,pic_3],[pic_4],[pic_5,pic_6],[pic_7],[pic_8,pic_9],[pic_10]],
}
export default  function ImageStrings({view}:{
    view:'MB' | 'PC'
}){
     

    const  { root,container} = useScrollTo("Section2")
 
    return  <div ref={ root} className='relative w-full h-[230vh] '>

          <div ref={container} className=' sticky top-[50px] mb:gap-[20px] lap:gap-[20px] w-[98vw] overflow-x-hidden    flex'>
                { ImageView[view].map((val,i)=>{
                    if(val.length === 1){
                        return <div key={ "@"+ i} className=' lap:min-w-[27vw] mb:min-w-[54vw]   mb:gap-[10px]  self-start  h-[85vh] '>
                        <ImageItem duo={false} src={val} ></ImageItem>

                    </div>
                    }
                    return <div className='lap:min-w-[27vw] mb:min-w-[108vw] mb:flex   mb:gap-[10px] lap:flex lap:flex-col lap:gap-[20px] lap:mt-[50px]  h-[85vh] '>
                        {
                            val.map((val_in,i)=>{
                                return <ImageItem _key={"@@"+i} src={val_in} ></ImageItem>

                            })
                        }
                    </div>
                 
                    
                })}
           
    </div>
    </div>
}

const ImageItem: any  = ({src,duo=true,_key}:{
    src: string
    duo?: boolean
    _key?: string
}) =>{
 
    return <img loading='lazy'  key={_key} className={duo ? " mb:h-full h-[48%] w-full object-cover rounded-[20px]  " : " w-full h-full object-cover  rounded-[20px] "} src={src} alt={src}>
    </img>  
}