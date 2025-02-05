import axios from "axios";
import {GET_USER} from "@/app/config/endpoints/userEndpoints";
import {GET_PRODUCT} from "@/app/config/endpoints/productEndpoints";

export const getUsersFunction = async () : Promise<unknown> => {
    try {
        const response : unknown = await axios.get(GET_USER);
        return response.data;
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        throw error;
    }
};
export const getProductsFunction = async () : Promise<unknown> => {
    try {
        const response : unknown = await axios.get(GET_PRODUCT);
        return response.data;
    } catch (error) {
        console.error("Error al obtener los productos:", error);
        throw error;
    }
};