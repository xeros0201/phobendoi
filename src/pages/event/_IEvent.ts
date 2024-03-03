 

type ImagesType = 'event' | 'product'

export type Trans = {
    [vn: string]: string
} & {
   [ us:string]: string
}
export type Payment= 'offline' | 'online' |"online & offline"
 export type Image = {
    _id:string,
    name: string,
    img: string,
    type:ImagesType,
    createdAt: string,
    updatedAt: string
 }

export type Payment_info = {
    bank_account: string,
    bank_number: string,
    bank: string
} 
export type Address = Trans
export type Room ={
    name:Trans,
    address: Address,
    _id: string,
    room_number: string,
    isOn:Boolean,
    createdAt: string,
    updatedAt: string
}
export type eventStatus = 'coming' | 'opening' |'hidden'
export type Event ={
    name: Trans,
    about: Trans,
    _id: string,
    image: Image
    isOn:Boolean,
    createdAt: string,
    updatedAt: string
}



export type Result ={
    _id:string,
    payment_info: Payment_info,
    room: Room,
    event: Event,
    start_date: string,
    end_date: string,
    payment: Payment,
    status: eventStatus,
    artist: [string]|[],
    fee: string,
    isOn:Boolean,
    createdAt: string,
    updatedAt: string
}