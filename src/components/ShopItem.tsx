import { MassageItem } from "../../interface";
import Link from "next/link";

export default function ShopItem({ shop }: { shop: MassageItem }) {
    return (
        <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-sm">
            <div>
                <h2 className="text-lg font-semibold">{shop.name}</h2>
                <p className="text-gray-500">{shop.address}</p>
                <p className="text-gray-500">Tel: {shop.tel}</p>
                <p className="text-gray-500">Open: {shop.openTime} - {shop.closeTime}</p>
            </div>
            <Link href="/reservation">
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Reserve</button>
            </Link>
        </div>
    );
}