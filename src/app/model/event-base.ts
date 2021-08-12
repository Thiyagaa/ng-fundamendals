export interface EventBase {
    id: number,
    name:string,
    subject?:string,
    date : Date,
    time : string,
    price : number,
    imageUrl?: string,
    location? : {
        address : string,
        city : string,
        country : string,
        province : string
    },
    itenary? : ItenaryBase[]|SessionBase[]
    onlineUrl? : string,
    eventType : string,
    difficulty?: string

}

export  interface ISchedule{
    id: number,
    eventId?:number,
    title: string
}

export interface ItenaryBase extends ISchedule{
    planed: string[],
    destination: string,
    source: string,
    images: string[],
    transportMode: string
    distance:number
}

export interface SessionBase extends ISchedule{
    presenter: string,
    duration: number,
    level: string,
    abstract: string,
    voters?: string[]
}
