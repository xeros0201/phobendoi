import { CalendarEvent } from "./Event";

 

export interface Calender {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    thumbnail_title: string;
    start_date: string;
    fee:string,
    end_date: string;
    url: string;
    status: "opening"|"coming"| "hidden";
    tickets: Ticket[];
    event:CalendarEvent;
    time_zone: TimeSlot[];
    payment: "online & offline" | "offline" | "online",
    address:{
        text:string
    }
}