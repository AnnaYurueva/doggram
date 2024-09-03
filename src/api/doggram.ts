import type { IFoto } from "@/types/foto";
import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.thedogapi.com/v1',
    headers: {
        'x-api-key': 'live_TCiQXkp5v4N4vgrULL9fmADXorjmOZHY2tllmwuoWyVQDD5LTRJvSTq8bpNcwift'
    }
});
const TEST_USER_ID = 'my-user-1111'

export const getInitalDogsFotos: IFoto[] | any = async () => {
    const dogsFoto = await instance.get('/images/search?format=json&limit=10')

    return dogsFoto.data;
}

export const addFotoToFavorites = async (imageId: string) => {
    const data = {
        "image_id": imageId,
        "sub_id": TEST_USER_ID
    };

    instance.post('/favourites', data)
        .then((res) => console.log(res.data))
        .catch((err) => console.error(err));
}

export const getFavorites = async () => {
    const dogsFoto = await instance.get(`/favourites?sub_id=${TEST_USER_ID}`)

    return dogsFoto.data;
}

export const deleteFotoFromFavorites = async (id: number) => {
    await instance.delete(`/favourites/${id}`)
}
