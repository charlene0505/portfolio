"use client"

import "./globals.css";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname= usePathname();
  const isActive = (path) =>
    pathname === path
      ? "border-border border-2 bg-lime-300 shadow-4 "
      : "border-transparent border-2 ";

  return (
    <html lang="en">
      <body className="flex flex-col justify-center items-center">
        <div className="z-10 fixed top-12 ">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger
                className={`${isActive(
                  "/"
                )} hover:bg-lime-300 hover:border-border hover:border-2 hover:shadow-4`}
              >
                <Link href="/">Home</Link>
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger
                className={`${isActive(
                  "/projects"
                )} hover:bg-lime-300 hover:border-border hover:border-2 hover:shadow-4`}
              >
                <Link href="projects">Projects</Link>
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger
                className={`${isActive(
                  "/experiences"
                )} hover:bg-lime-300 hover:border-border hover:border-2 hover:shadow-4`}
              >
                <Link href="experiences">Experiences</Link>
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger
                className={`${isActive(
                  "/hobbies"
                )} hover:bg-lime-300 hover:border-border hover:border-2 hover:shadow-4`}
              >
                <Link href="hobbies">Hobbies</Link>
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger
                className={`${isActive(
                  "/contact"
                )} hover:bg-lime-300 hover:border-border hover:border-2 hover:shadow-4`}
              >
                <Link href="contact">Contact Me</Link>
              </MenubarTrigger>
            </MenubarMenu>
          </Menubar>
        </div>
        {children}
      </body>
    </html>
  );
}
