import type { IFoto } from "@/types/foto";
import axios from "axios";

export const getInitalDogsFotos: IFoto[] | any = async () => {
    const dogsFoto = await axios.get('https://api.thedogapi.com/v1/images/search?format=json&limit=3')

    return dogsFoto.data;
}