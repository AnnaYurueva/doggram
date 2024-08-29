import axios from "axios";

export const fetchInitialFact = async () => {
    const factsResponse = await axios.get('https://dogapi.dog/api/v2/facts')
    return factsResponse.data.data[0].attributes.body
}
export const fetchInitialMedia = async () => {
    const fotoResponse = await axios.get('https://random.dog/woof.json')
    return fotoResponse.data.url
}
