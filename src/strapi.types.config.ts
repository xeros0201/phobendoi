


type ImageFormat = {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: string | null;
    size: number;
    width: number;
    height: number;
  }


export type TImage = {
        name: string;
        alternativeText: string;
        caption: null | string;
        width: number;
        height: number;
        formats:{
            large?: ImageFormat;
            small?: ImageFormat;
            medium?: ImageFormat;
            thumbnail?: ImageFormat;
          }
        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        previewUrl: null | string;
        provider: string;
        provider_metadata: null;
        createdAt: string;
        updatedAt: string;
   
}

export type IDataImage ={
    data:{
        id: number
        attributes: TImage
    }
}
 

export type Media = IDataImage