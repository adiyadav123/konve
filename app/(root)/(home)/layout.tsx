import Navbar from "@/components/ui/Navbar";
import Sidebar from "@/components/ui/Sidebar";
import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Konve - Video Conferencing App",
  description: "Video conferencing app built with Next.js, Stream SDK, and Clerk",
  icons: {
    icon:'/icons/logo.svg'
  },
  }

const HomeLayout = ({ children } : { children: ReactNode } ) => {
  return (
    <main className=" ">
      <Navbar />

      <div className=" flex">
        <Sidebar />

        <section className=" flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
            <div className=" w-full">
            {children}
            </div>
        </section>

      </div>

      
      
    </main>
  );
};

export default HomeLayout;
