import ShopItem from "@/components/ShopItem";
import getShops from "@/libs/getShops";

export default async function MassageShops() {
    
    const shops = await getShops();

    return (
        <div className="w-full max-w-4xl space-y-4 mt-15">
            {shops.data.map((shop) => (
                <ShopItem key={shop._id} shop={shop} />
            ))}
        </div>
    );
}
