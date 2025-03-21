import { MassageJson } from "../../interface";
const getShops = async (): Promise<MassageJson> => {
    await new Promise( (resolve) => setTimeout(resolve,300) );
    const response = await fetch("https://a08-venue-explorer-backend.vercel.app/api/v1/venues")
    if(!response.ok){
        throw Error("Failed to fetch Venues")
    }
    const jsonfile = await response.json()
    return jsonfile
}

export default getShops