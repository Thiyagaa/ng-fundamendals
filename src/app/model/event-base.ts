export interface EventBase {
    id: number,
    name:string,
    subject?:string,
    date : Date,
    dateTime ?: Date,
    time : string,
    price : number,
    imageUrl?: string,
    location? : {
        address : string,
        city : string,
        country : string,
        province : string
    },
    itenary? : SessionBase[]
    onlineUrl? : string,
    eventType : string,
    difficulty?: string

}

export  interface ISchedule{
    id: number,
    eventId?:number,
    title: string
}



export interface SessionBase extends ISchedule{
    presenter: string,
    duration: number,
    level: string,
    abstract: string,
    voters: string[],
    planed?: string[],
    destination?: string,
    source?: string,
    images?: string[],
    transportMode?: string
    distance?:number
}
