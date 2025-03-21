const getVenue = async (id:string) => {
    await new Promise( (resolve) => setTimeout(resolve,300) );
    console.log(id)
    const response = await fetch(`https://a08-venue-explorer-backend.vercel.app/api/v1/venues/${id}`)
    if(!response.ok){
        throw new Error("Failed to fetch Venues")
    }
    return response.json()
}

export default getVenue