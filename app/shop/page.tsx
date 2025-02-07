import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("https://store.thegrail.vip");
  }, [router]);

  return (
    <div className="flex text-white items-center justify-center h-screen">
      <p className="text-lg font-medium">Redirecting...</p>
    </div>
  );
};

export default page;
