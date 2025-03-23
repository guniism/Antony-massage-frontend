"use client";

import { useRouter } from "next/navigation";

export default function useUserLogOut() {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    router.push("/");
  };

  return logout;
}
