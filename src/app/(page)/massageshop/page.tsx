import ShopItem from "@/components/ShopItem";
import { MassageItem } from "../../../../interface";
import getShops from "@/libs/getShops";

export default async function massageShop() {
    
    const shops = await getShops();

    return (
        <div className="flex flex-col items-center p-6 w-full ">
            <div className="w-full max-w-4xl space-y-4 mt-15">
                {shops.data.map((shop) => (
                    <ShopItem key={shop._id} shop={shop} />
                ))}
            </div>
        </div>
    );
}
