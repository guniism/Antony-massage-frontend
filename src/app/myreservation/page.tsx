import ReservationItem from "@/components/ReservationItem";
import { ReserveItem } from "../../../interface";
import dayjs from "dayjs";

export default function ReservationPage() {
    const reservations: ReserveItem[] = [
        {
            _id: "1",
            reserveDate: dayjs("2025-03-22T10:00:00"),
            user: [
                {
                    _id: "u1",
                    name: "John Doe",
                    username: "johndoe",
                    email: "john@example.com",
                    role: "customer",
                    password: "password123",
                    tel: "123-456-7890"
                }
            ],
            massageShop: "Lind and Sons",
            createdAt: dayjs("2025-03-21T08:00:00")
        },
        {
            _id: "2",
            reserveDate: dayjs("2025-03-23T14:30:00"),
            user: [
                {
                    _id: "u2",
                    name: "Jane Smith",
                    username: "janesmith",
                    email: "jane@example.com",
                    role: "customer",
                    password: "password456",
                    tel: "987-654-3210"
                }
            ],
            massageShop: "Doe Spa",
            createdAt: dayjs("2025-03-21T09:00:00")
        }
    ];

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
