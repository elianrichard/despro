import React from "react";

interface Props {
  counter: number;
  max: number;
  isLoading: boolean;
  title: string;
}

const ItemCard = ({ counter, max, isLoading, title }: Props) => {
  return (
    <div
      className={`flex h-40 w-40 flex-col overflow-hidden rounded-3xl border border-black bg-gradient-to-tr ${
        counter > max || isLoading
          ? "from-red-200 via-red-400 to-red-600"
          : "from-green-100 via-green-300 to-green-500"
      } shadow-2xl transition-all duration-200 ease-out hover:scale-110`}
    >
      <div className="flex h-full w-full items-center justify-center text-5xl">
        <div className="w-fit font-bold">
          <span>{!isLoading ? counter : "--"}</span>
          <span className="text-lg font-normal">
            / <span>{!isLoading ? max : "--"}</span>
          </span>
        </div>
      </div>
      <div className="flex justify-center bg-white/40 py-2 px-3 text-center font-bold">
        {title}
      </div>
    </div>
  );
};

export default ItemCard;
