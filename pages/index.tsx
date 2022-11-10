import React from "react";

const Home = () => {
  return (
    <div className="flex h-screen w-screen select-none flex-col items-center justify-center bg-gray-900">
      <div className="mb-10 flex w-full justify-center text-5xl font-bold">
        <p className="bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 bg-clip-text text-center text-transparent">
          I-CELL
          <br />
          VISITOR COUNTER
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div
          className="flex h-40 w-40 flex-col overflow-hidden rounded-3xl border border-black bg-gradient-to-tr from-green-100 via-green-300 to-green-500 shadow-2xl transition-all duration-200 ease-out hover:scale-110"
          id="card_container"
        >
          <div className="flex h-full w-full items-center justify-center text-5xl">
            <div className="w-fit font-bold">
              <span id="counter">10</span>
              <span className="text-lg font-normal">
                / <span id="max_number">11</span>
              </span>
            </div>
          </div>
          <div className="flex justify-center bg-white/40 py-2 px-3 text-center font-bold">
            Lab. DTE 1
          </div>
        </div>
        <div className="flex h-40 w-40 flex-col overflow-hidden rounded-3xl border border-black bg-gradient-to-tr from-green-100 via-green-300 to-green-500 shadow-2xl transition-all duration-200 ease-out hover:scale-110">
          <div className="flex h-full w-full items-center justify-center text-5xl">
            <div className="w-fit font-bold">
              13<span className="text-lg font-normal"> / 15</span>
            </div>
          </div>
          <div className="flex justify-center bg-white/40 py-2 px-3 text-center font-bold">
            Lab. DTE 2
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
