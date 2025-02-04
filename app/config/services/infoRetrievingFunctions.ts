import axios from "axios";
import {GET_USER} from "@/app/config/endpoints/userEndpoints";

export const getUsersFunction = async () : Promise<unknown> => {
    try {
        const response : unknown = await axios.get(GET_USER);
        return response.data;
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        throw error;
    }
};