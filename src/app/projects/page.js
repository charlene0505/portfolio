"use client"

// import Window from "@/components/ui/window";
import { usePathname } from "next/navigation";
import { motion } from "motion/react"
import { useEffect, useState } from "react";
export default function Home() {
  const [isReady, setReady] = useState(false);
  const pathname = usePathname();
  const [oldColor, setOldColor] = useState("");
  useEffect(()=>{
    setReady(false);
    const lastPage = localStorage.getItem("currentPage") || "";
    setOldColor((oldColor) => {
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
      localStorage.setItem("currentPage", pathname);
    }, 1000);
  }, [])

  return (
    <div className={`w-screen h-screen ${oldColor}`}>
      <motion.div
        className=" w-screen h-screen flex bg-lime-100 flex-1 justify-center items-center transition-transform origin-top-left"
        initial={{ clipPath: "circle(0% at 0% 0%)" }}
        animate={{ clipPath: "circle(100% at 50% 50%)" }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {isReady && (
          <div className="flex h-2/3 w-full justify-center items-center p-10 gap-10 overflow-x-auto flex-nowrap">
            <div className="w-[400px] h-full flex flex-col p-0 items-center justify-center gap-5 bg-slate-600 border-border shadow-4 rounded-lg shrink-0">
              <img
                src="https://i.pinimg.com/736x/f0/32/4c/f0324c1277567822a661245cbe5d823b.jpg"
                className="object-cover rounded-lg"
              />
              <div className="items-center justify-center h-full">hello</div>
            </div>
            <div className="w-[400px] h-full flex flex-col p-0 items-center justify-center gap-5 bg-slate-600 border-border shadow-4 rounded-lg shrink-0">
              <img
                src="https://i.pinimg.com/736x/f0/32/4c/f0324c1277567822a661245cbe5d823b.jpg"
                className="object-cover rounded-lg"
              />
              <div className="items-center justify-center h-full">hello</div>
            </div>
            <div className="w-[400px] h-full flex flex-col p-0 items-center justify-center gap-5 bg-slate-600 border-border shadow-4 rounded-lg shrink-0">
              <img
                src="https://i.pinimg.com/736x/f0/32/4c/f0324c1277567822a661245cbe5d823b.jpg"
                className="object-cover rounded-lg"
              />
              <div className="items-center justify-center h-full">hello</div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
