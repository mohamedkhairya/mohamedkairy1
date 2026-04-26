import { Daum } from "@/interface/interface.pordact";



export interface Alltypes {
    carteOwner: string,
    createdAt: string,
    products:product[],
    totaleCreatPrice:number,
    updateAd:string,
    __v: number,
    _id:string,


}

export interface product {
    count : number ,
    price:number,
    _id:string,
    product: Daum,


}