import { Suspense } from "react";
import MassageShops from "@/components/MassageShops";
import CircularProgress from "@mui/material/CircularProgress";

export default async function massageShopPage() {
    return (
        <div className="flex flex-col items-center p-10 w-full ">
            <Suspense
            fallback={
                <div className="flex flex-col items-center -mt-10 justify-center h-screen space-y-4">
                <CircularProgress sx={{ color: "rgb(220, 38, 38)" }} size={60} thickness={5} />
                <p className="text-lg font-semibold text-gray-600">Loading...</p>
                </div>
            }
            >
            <MassageShops />
            </Suspense>
        </div>
    );
}
