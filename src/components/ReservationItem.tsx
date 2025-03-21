import { ReserveItem } from "../../interface";

export default function ReservationItem({ reserve }: { reserve: ReserveItem }) {
    return (
        <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-sm">
            <div>
                <h2 className="text-lg font-semibold">{reserve.user[0]?.name}</h2>
                <p className="text-gray-500">{reserve.massageShop}</p>
                <p className="text-gray-500">{reserve.reserveDate.format("YYYY-MM-DD HH:mm")}</p>
            </div>
            <div className="flex space-x-2">
                <button className="bg-gray-900 text-white px-4 py-2 rounded-lg">Edit</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Delete</button>
            </div>
            
        </div>
    );
}