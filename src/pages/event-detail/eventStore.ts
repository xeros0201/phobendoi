import { create } from 'zustand'

export interface EventStore {
    data: {
      
      date: string;
      time: string;
      client_name:string
      phone:string
      email:string
      discount: number
      giftcode: string
      note:string
      payment: string
      ticket: {
        id: number;
        name: string;
        cost: number;
      };
      quantity: number;
    };
  }
  
  type EventStoreState = {
    data: EventStore['data'];
    updateEvent: (data: EventStore['data']) => void;
  };
  
export const useEventStore = create<EventStoreState>((set) => ({
    data: {
       
      date: '',
      time: '',
      client_name:'',
      phone:'',
      email:'',
      note:'',
      payment:'',
      discount: 0,
      giftcode: '',
      ticket: {
        id: 0,
        name: '',
        cost: 0,
      },
      quantity: 0,
    },
    updateEvent: (data) => set(() => ({ data })),
  }));



export const useEventData = () =>{
    const { data:event, updateEvent } = useEventStore();

    return {
        event ,
        setEvent: (name: keyof  EventStore['data'], val: unknown ) => updateEvent({
            ...event,
            [name]: val
        })
    }
}



 