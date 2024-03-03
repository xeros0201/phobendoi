
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export default function LazyImages({src,className,alt}:{
  
    className?: string 
    src :string | undefined
    alt?:string
}) {
    
    return <LazyLoadImage
    className={className}
    effect="blur"
     style={{
       
        height:"100%",
        width:"100%"
     }}
    src={src}
    alt={alt}
    >  
    </LazyLoadImage>
}
export const   LazyImagesUnStyled= ({src,className,alt,preload_url}:{
  
    className?: string 
    src :string | undefined
    alt?:string,
    preload_url?:string
}) => {
    
    return <LazyLoadImage
    style={{
        backgroundImage:`url('${preload_url}')`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"100%",
        backdropFilter:"blur(10px)"
    }}
    className={className}
    effect="blur"
    src={src}
    alt={alt}
    >  
    </LazyLoadImage>
}