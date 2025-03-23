"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ReservationItem from "@/components/ReservationItem";
import { ReserveItem } from "../../../../interface";
import getReservations from "@/libs/getReservations";

export default function ReservationPage() {
  const [reservations, setReservations] = useState<ReserveItem[]>([]);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        router.push("/login"); 
        return;
      }

      try {
        const data = await getReservations();
        setReservations(data || []);
      } catch (err: any) {
        setError(err.message || "Failed to load reservations");
      }
    };

    fetchData();
  }, [router]);

  return (
    <div className="flex flex-col items-center p-6 w-full">
      <div className="w-full max-w-4xl space-y-4 mt-15">
        {reservations.map((reservation) => (
          <ReservationItem key={reservation._id} reserve={reservation} />
        ))}
      </div>
    </div>
  );
}
