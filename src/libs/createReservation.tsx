export interface ReservationPayload {
    massageShopId: string;
    reserveDate: string; 
    token: string;
  }
  
  export default async function createReservation({
    massageShopId,
    reserveDate,
    token,
  }: ReservationPayload) {
    console.log("createReservation", massageShopId, reserveDate, token);
    try {
      const response = await fetch(`https://antony-massage-backend-production.up.railway.app/api/v1/massage-shops/${massageShopId}/reservations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ reserveDate }),
      });
  
      const resText = await response.text(); 
      if (!response.ok) {
        console.error("API Error:", resText); 
        throw new Error(JSON.parse(resText).message);
      }
  
      return JSON.parse(resText); 
    } catch (error) {
      throw error;
    }
  }
  

  