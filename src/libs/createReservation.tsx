export interface ReservationPayload {
    massageShopId: string;
    reservationDate: string; // ISO string format (e.g., 2025-03-23T14:00:00.000Z)
    token: string;
  }
  
  export default async function createReservation({
    massageShopId,
    reservationDate,
    token,
  }: ReservationPayload) {
    console.log("createReservation", massageShopId, reservationDate, token);
    try {
      const response = await fetch(`https://antony-massage-backend-production.up.railway.app/api/v1/massage-shops/${massageShopId}/reservations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ reservationDate }),
      });
  
      const resText = await response.text(); // อ่าน raw response
      if (!response.ok) {
        console.error("API Error:", resText); // ✅ Log error จาก API
        throw new Error("Reservation failed");
      }
  
      return JSON.parse(resText); // ถ้า response.ok จริง ค่อย parse เป็น JSON
    } catch (error) {
      throw error;
    }
  }
  

  