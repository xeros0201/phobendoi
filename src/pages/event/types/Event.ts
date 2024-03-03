import { Media } from "../../../strapi.types.config";

 

type Artist ={
  name:string
}
 
export interface  CalendarEvent {
    data: {
      id: number;
      attributes: {
        name: string;
        about: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        locale: string;
        thumbnail:  Media,
        artist: Artist[]
      };
    };
  }