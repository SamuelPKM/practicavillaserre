import {API_URL} from "@/app/config/Const_API";

export const GET_USER: string = `${API_URL}usuario`;
export const POST_USER: string = `${API_URL}usuario`;
export const GET_USERById = (userId: number): string => `${API_URL}usuario/`+userId;
export const DELETE_USERById = (userId: number): string => `${API_URL}usuario/`+userId;
