import {API_URL} from "@/app/config/Const_API";


export const GET_ORDER : string = `${API_URL}orden`;
export const POST_ORDER : string = `${API_URL}orden`;
export const DELETE_ORDER = (orderId : number) : string => `${API_URL}orden/` + orderId;