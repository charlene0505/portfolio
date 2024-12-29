"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  const [isReady, setReady] = useState(false);
  const pathname = usePathname();
  const [oldColor, setOldColor] = useState("");
  useEffect(() => {
    setReady(false);
    const lastPage = localStorage.getItem("currentPage") || "";
    console.log("lastPage", lastPage);
    setOldColor(() => {
      const color =
        lastPage === "/projects"
          ? "bg-lime-100"
          : lastPage === "/experiences"
          ? "bg-yellow-100"
          : lastPage === "/hobbies"
          ? "bg-pink-100"
          : lastPage === "/contact"
          ? "bg-slate-200"
          : "white";
      console.log("oldColor", color);
      return color;
    });
    setTimeout(() => {
      setReady(true);
      console.log("oldColor",oldColor)
      localStorage.setItem("currentPage", pathname);
    }, 1000);
  }, []);

  return (
    <div className={`w-full h-full ${oldColor}`}>
      <motion.div
        className=" w-full h-screen flex bg-slate-200 transition-transform origin-top-left"
        initial={{ clipPath: "circle(0% at 0% 0%)" }}
        animate={{ clipPath: "circle(100% at 50% 50%)" }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {isReady && (
          <div className="flex flex-1 justify-center items-center">
            This is the experiences page.
          </div>
        )}
      </motion.div>
    </div>
  );
}
