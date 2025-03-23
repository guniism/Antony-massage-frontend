"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ReservationItem from "@/components/ReservationItem";
import { ReserveItem } from "../../../../interface";
import getReservations from "@/libs/getReservations";
import deleteReservation from "@/libs/deleteReservation";
import EditReservation from "@/components/EditReservation";
import updateReservation from "@/libs/updateReservation";

export default function ReservationPage() {
  const [reservations, setReservations] = useState<ReserveItem[]>([]);
  const [error, setError] = useState("");
  const [editingReservationId, setEditingReservationId] = useState<string | null>(null);
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

  const handleEdit = (reservationId: string) => {
    setEditingReservationId(reservationId);
  };

  const handleDelete = async (reservationId: string) => {
    try {
      const token = localStorage.getItem("token");
      const result = await deleteReservation(reservationId, token || "");
      console.log("Reservation deleted:", result);
      alert("Delete Reservation successful!");
      const data = await getReservations();
      setReservations(data || []);
    } catch (error) {
      console.error("Error deleting reservation:", error);
    }
  };

  const handleUpdate = async (reservationId: string, updatedData: any) => {
    try {
      const token = localStorage.getItem("token");
      const result = await updateReservation({
        reservationId,
        ...updatedData,
        token: token || "",
      });
  
      console.log("Reservation updated:", result);
      alert("Update Reservation successful!");
  
      const data = await getReservations();
      setReservations(data || []);
      setEditingReservationId(null);
    } catch (error) {
      console.error("Error updating reservation:", error);
    }
  };
  

  const handleCloseEdit = () => {
    setEditingReservationId(null);
  };

  return (
    <div className="flex flex-col items-center p-6 w-full">
      <div className="w-full max-w-4xl space-y-4 mt-15">
        {reservations.map((reservation) => (
          <ReservationItem
            key={reservation._id}
            reserve={reservation}
            onEdit={() => handleEdit(reservation._id)}
            onDelete={() => handleDelete(reservation._id)}
          />
        ))}
      </div>

      {editingReservationId && (
        <div className="absolute inset-0 bg-opacity-50 flex justify-center items-center">
          <EditReservation
            reservationId={editingReservationId}
            onClose={handleCloseEdit}
            onUpdate={handleUpdate}
          />
        </div>
      )}
    </div>
  );
}
