import ShopItem from "@/components/ShopItem";
import { MassageItem } from "../../../../interface";

export default function massageShop() {
    const shops: MassageItem[] = [
        { _id: "1", name: "Lind and Sons", address: "Cruickshank Centers", tel: "895", openTime: "09:00 AM", closeTime: "06:00 PM" },
        { _id: "2", name: "Doe Spa", address: "Downtown Plaza", tel: "123-456", openTime: "10:00 AM", closeTime: "08:00 PM" },
        { _id: "3", name: "Relax Hub", address: "Mall Avenue", tel: "789-012", openTime: "11:00 AM", closeTime: "07:00 PM" }
    ];

    return (
        <div className="flex flex-col items-center p-6 w-full ">
            <div className="w-full max-w-4xl space-y-4 mt-15">
                {shops.map((shop) => (
                    <ShopItem key={shop._id} shop={shop} />
                ))}
            </div>
        </div>
    );
}
