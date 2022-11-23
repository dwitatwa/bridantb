import { useState } from "react";

export default function KepuasanMasyarakat() {
  const [showModal, setShowModal] = useState(false);
  const [theValue, settheValue] = useState();
  const toggleModal = () => {
    setShowModal(true);
  };

  const handleClick = (e: any) => {
    const value = e.target.innerHTML;
    if (value === "Sangat Puas") {
      return fetch("https://api.countapi.xyz/hit/bridantbprov/sangat-puas")
        .then((r) => r.json())
        .then((data) => {
          document.getElementById("sangat-puas-v")!.innerHTML = data.value;
        });
    }
    if (value === "Cukup Puas") {
      return fetch("https://api.countapi.xyz/hit/bridantbprov/cukup-puas")
        .then((r) => r.json())
        .then((data) => {
          document.getElementById("sangat-puas-v")!.innerHTML = data.value;
        });
    }
    if (value === "Puas") {
      return fetch("https://api.countapi.xyz/hit/bridantbprov/puas")
        .then((r) => r.json())
        .then((data) => {
          document.getElementById("sangat-puas-v")!.innerHTML = data.value;
        });
    }
    if (value === "Kurang Puas") {
      return fetch("https://api.countapi.xyz/hit/bridantbprov/kurang-puas")
        .then((r) => r.json())
        .then((data) => {
          document.getElementById("sangat-puas-v")!.innerHTML = data.value;
        });
    }
    if (value === "Tidak Puas") {
      return fetch("https://api.countapi.xyz/hit/bridantbprov/tidak-puas")
        .then((r) => r.json())
        .then((data) => {
          document.getElementById("sangat-puas-v")!.innerHTML = data.value;
        });
    }
  };

  if (!showModal) {
    return (
      <div className="fixed inset-0 flex z-30 justify-center items-center">
        <div
          className="absolute bg-slate-800 inset-0 z-30 opacity-60"
          onClick={() => setShowModal(false)}
        ></div>
        <div className="relative z-40 bg-white p-5 sm:p-10 rounded-lg flex flex-col gap-3">
          <h1 className="font-bold text-slate-500">Berikan Penilaian :</h1>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-5">
            <div className="flex flex-col ">
              <div
                className="border py-2 px-3 rounded-lg flex items-center justify-center text-xs cursor-pointer hover:bg-slate-200 font-medium text-slate-500"
                onClick={handleClick}
                id="sangat-puas"
              >
                Sangat Puas
              </div>
              <div className="border-b border-l border-r py-2 px-3 rounded-lg flex flex-col items-center justify-center">
                <div
                  className="text-3xl  font-medium text-blue-400"
                  id="sangat-puas-v"
                >
                  <span className="text-xs block my-2">Loading ...</span>
                </div>
                <div className="text-sm text-slate-500">Orang</div>
              </div>
            </div>
            <div className="flex flex-col ">
              <div
                className="border py-2 px-3 rounded-lg flex items-center justify-center text-xs cursor-pointer hover:bg-slate-200 font-medium text-slate-500"
                onClick={handleClick}
              >
                Cukup Puas
              </div>
              <div className="border-b border-l border-r py-2 px-3 rounded-lg flex flex-col items-center justify-center">
                <div
                  className="text-3xl  font-medium text-blue-400"
                  id="sangat-puas-v"
                >
                  <span className="text-xs block my-2">Loading ...</span>
                </div>
                <div className="text-sm text-slate-500">Orang</div>
              </div>
            </div>
            <div className="flex flex-col ">
              <div
                className="border py-2 px-3 rounded-lg flex items-center justify-center text-xs cursor-pointer hover:bg-slate-200 font-medium text-slate-500"
                onClick={handleClick}
              >
                Puas
              </div>
              <div className="border-b border-l border-r py-2 px-3 rounded-lg flex flex-col items-center justify-center">
                <div
                  className="text-3xl  font-medium text-blue-400"
                  id="sangat-puas-v"
                >
                  <span className="text-xs block my-2">Loading ...</span>
                </div>
                <div className="text-sm text-slate-500">Orang</div>
              </div>
            </div>
            <div className="flex flex-col">
              <div
                className="border py-2 px-3 rounded-lg flex items-center justify-center text-xs cursor-pointer hover:bg-slate-200 font-medium text-slate-500"
                onClick={handleClick}
              >
                Kurang Puas
              </div>
              <div className="border-b border-l border-r py-2 px-3 rounded-lg flex flex-col items-center justify-center">
                <div
                  className="text-3xl  font-medium text-blue-400"
                  id="sangat-puas-v"
                >
                  <span className="text-xs block my-2">Loading ...</span>
                </div>
                <div className="text-sm text-slate-500">Orang</div>
              </div>
            </div>
            <div className="flex flex-col ">
              <div
                className="border py-2 px-3 rounded-lg flex items-center justify-center text-xs cursor-pointer hover:bg-slate-200 font-medium text-slate-500"
                onClick={handleClick}
              >
                Tidak Puas
              </div>
              <div className="border-b border-l border-r py-2 px-3 rounded-lg flex flex-col items-center justify-center">
                <div
                  className="text-3xl  font-medium text-blue-400"
                  id="sangat-puas-v"
                >
                  <span className="text-xs block my-2">Loading ...</span>
                </div>
                <div className="text-sm text-slate-500">Orang</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <button
      className="px-2 py-1 border border-blue-900 text-blue-900 w-fit rounded-lg mt-2 text-xs flex items-center gap-2 hover:bg-blue-50"
      onClick={toggleModal}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        fill="currentColor"
        className="w-4 h-4"
      >
        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
      </svg>
      <span>Berikan Penilaian</span>
    </button>
  );
}
