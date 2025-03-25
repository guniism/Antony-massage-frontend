"use client"
import deleteShop from "@/libs/deleteShop";
import { MassageItem } from "../../interface";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function ShopItem({ shop, showDeletePopup, isAdmin }: { shop: MassageItem, showDeletePopup: Function, isAdmin: Boolean }) {

    return (
        <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-sm">
            <div>
                <h2 className="text-lg font-semibold">{shop.name}</h2>
                <p className="text-gray-500">{shop.address}</p>
                <p className="text-gray-500">Tel: {shop.tel}</p>
                <p className="text-gray-500">Open: {shop.openTime} - {shop.closeTime}</p>
            </div>
            {
                !isAdmin ? (
                <Link href={`/reservation?shopId=${shop._id}`}>
                    <button className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg hover:cursor-pointer transition">Reserve</button>
                </Link>) : (
                <button onClick={() => showDeletePopup(shop._id)}
                    className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg hover:cursor-pointer transition">
                    Delete
                </button>
                )
            }
        </div>
    );
}