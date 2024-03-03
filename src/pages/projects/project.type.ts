type Para = {
    title?: string
    para?: string
    id: number
}
type Pic ={
  id:number,
  attributes:{
    name?: string
    formats:{
      large?: ImageFormat;
      small?: ImageFormat;
      medium?: ImageFormat;
      thumbnail?: ImageFormat;
    }
  }
}
export interface Project {
    id: number;
    attributes: {
      name?: string;
      customLink?: string,
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
      locale?: string;
      title?: string;
      caption?: string;
      type?:[{
        text:string
      }]
      cooperation?: string;
      year?: string;
      about?: string;
      sponsers?:[{
        text:string
      }]
      details?: string;
      rank?: number;
      picHero: {
        data: {
          id: number;
          attributes: {
            name?: string;
            alternativeText?: string | null;
            caption?: string | null;
            width?: number;
            height?: number;
            formats: {
              large?: ImageFormat;
              small?: ImageFormat;
              medium?: ImageFormat;
              thumbnail?: ImageFormat;
            };
            hash?: string;
            ext?: string;
            mime?: string;
            size?: number;
            url?: string;
            previewUrl?: string | null;
            provider?: string;
            provider_metadata?: any | null;
            createdAt?: string;
            updatedAt?: string;
          };
        };
      };
      pics?:{
        data: Pic[]
      }
      story?:Para,
      goal1?: Para,
      goal2?: Para,
      picHero3?:{
        data:Pic[]
      },
      awards?:[{
        title: string,
        link: string
      }],
      picHero2?:{
        data:Pic[]
      }
    };
  }
  
  interface ImageFormat {
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