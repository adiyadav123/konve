import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface HomeCardProps {
    className: string,
    img: string,
    title: string,
    description: string,
    handleClick: () => void
}

const HomeCard = ({ className, img, title, description, handleClick } : HomeCardProps) => {
  return (
    <div
      className={cn('bg-orange-1 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] cursor-pointer rounded-[14px] min-h-[260px]', className)}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-12 rounded-[12px]">
        <Image
          src={img}
          alt="meeting"
          width={27}
          height={27}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
