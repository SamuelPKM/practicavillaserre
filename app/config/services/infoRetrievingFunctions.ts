import axios, {AxiosResponse} from "axios";
import {GET_USER} from "@/app/config/endpoints/userEndpoints";
import {GET_PRODUCT} from "@/app/config/endpoints/productEndpoints";
import {Producto, Usuario} from "@/app/config/DataTypes";

export const getUsersFunction = async () : Promise<Usuario[]> => {
    try {
        const response: AxiosResponse<Usuario[]>  = await axios.get(GET_USER);
        return response.data;
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        throw error;
    }
};
export const getProductsFunction = async () : Promise<Producto[]> => {
    try {
        const response : AxiosResponse<Producto[]> = await axios.get(GET_PRODUCT);
        return response.data;
    } catch (error) {
        console.error("Error al obtener los productos:", error);
        throw error;
    }
};