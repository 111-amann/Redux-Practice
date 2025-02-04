import React, { useEffect } from "react";

function Home() {
  return (
    <div className="mt-10 p-10 w-full h-32 ">
      <div className="bg-zinc-700 text-zinc-300 h-fit p-5">
        <h1 className="text-2xl font-bold text-center">
          Redux Toolkit Practice
        </h1>
        <h2 className="text-lg mt-2 font-semibold">
          User component for Synchronous Operation in Redux{" "}
        </h2>{" "}
        <p className="text-md text-zinc-400">- Data added Synchronously</p>
        <p className="text-md text-zinc-400">- Performed delete operation using reducer</p>
        <h2 className="text-lg mt-3 font-semibold">
          Product component for Asynchronous Operation Redux
        </h2>
        <p className="text-md text-zinc-400">- Data added using Axios in another file by creating function</p>
      </div>
    </div>
  );
}

export default Home;
