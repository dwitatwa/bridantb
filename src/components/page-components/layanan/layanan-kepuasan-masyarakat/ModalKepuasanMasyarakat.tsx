import { useEffect, useState } from "react";
import { getData } from "./utils/getData";
import handle from "./utils/handleFunction";

export default function ModalKepuasanMasyarakat({ toggle }: any) {
  const [submitStatus, setSubmitStatus] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [sangatPuasValue, setSangatPuasValue] = useState("");
  const [cukupPuasValue, setCukupPuasValue] = useState("");
  const [puasValue, setPuasValue] = useState("");
  const [kurangPuasValue, setKurangPuasValue] = useState("");
  const [tidakPuasValue, setTidakPuasValue] = useState("");

  const setTheValue = async () => {
    const { theData, total } = await getData();
    setSangatPuasValue(Math.floor((theData[0] / total) * 100) + "%");
    setCukupPuasValue(Math.floor((theData[1] / total) * 100) + "%");
    setPuasValue(Math.floor((theData[2] / total) * 100) + "%");
    setKurangPuasValue(Math.floor((theData[3] / total) * 100) + "%");
    setTidakPuasValue(Math.floor((theData[4] / total) * 100) + "%");
    setIsLoading(false);
  };

  useEffect(() => {
    setTheValue();
  }, []);

  if (submitStatus === "submitting") {
    return (
      <div className="fixed inset-0 flex z-30 justify-center items-center">
        <div
          className="absolute bg-slate-800 inset-0 z-30 opacity-60"
          onClick={() => toggle(false)}
        ></div>
        <div className="relative z-40 bg-white p-5 sm:p-10 rounded-lg flex flex-col gap-5">
          <div className="flex items-center justify-center space-x-2 mt-5">
            <div className="w-4 h-4 rounded-full animate-pulse bg-blue-400"></div>
            <div className="w-4 h-4 rounded-full animate-bounce bg-blue-400"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg-blue-400"></div>
          </div>
          <h1 className="font-bold text-slate-600">Menyimpan ... </h1>
        </div>
      </div>
    );
  }

  if (submitStatus === "success") {
    return (
      <div
        className="fixed inset-0 flex z-30 justify-center items-center"
        onClick={() => toggle(false)}
      >
        <div className="absolute bg-slate-800 inset-0 z-30 opacity-60"></div>
        <div className="relative z-40 bg-white p-5 sm:p-10 rounded-lg flex flex-col gap-3 justify-center items-center text-blue-500">
          <h1 className=" font-bold">Terimakasih, Atas Penilaian Anda</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-heart-handshake"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
            <path d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25"></path>
            <path d="M12.5 15.5l2 2"></path>
            <path d="M15 13l2 2"></path>
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex z-30 justify-center items-center">
      <div
        className="absolute bg-slate-800 inset-0 z-30 opacity-60"
        onClick={() => toggle(false)}
      ></div>
      <div className="relative z-40 bg-white p-5 sm:p-10 rounded-lg flex flex-col gap-3">
        {isLoading ? (
          <div className="flex items-center justify-center space-x-2 mt-5">
            <div className="w-4 h-4 rounded-full animate-pulse bg-blue-400"></div>
            <div className="w-4 h-4 rounded-full animate-bounce bg-blue-400"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg-blue-400"></div>
          </div>
        ) : (
          <>
            <div className="flex gap-5 justify-between mb-5 text-slate-500">
              <h1 className="font-bold ">Berikan Penilaian :</h1>
              <div onClick={() => toggle(false)} className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-5">
              <div className="flex flex-col ">
                <div
                  className="border py-2 px-3 rounded-lg flex items-center justify-center text-xs cursor-pointer hover:bg-slate-100 font-medium text-slate-500"
                  onClick={() => handle.sangatPuas(setSubmitStatus)}
                  id="sangat-puas"
                >
                  <span className="flex gap-5 text-sm sm:text-xl text-yellow-500">
                    ⊛ ⊛ ⊛ ⊛ ⊛
                  </span>
                </div>
              </div>
              <div className="flex flex-col ">
                <div
                  className="border py-2 px-3 rounded-lg flex items-center justify-center text-xs cursor-pointer hover:bg-slate-100 font-medium text-slate-500"
                  onClick={() => handle.cukupPuas(setSubmitStatus)}
                  id="cukup-puas"
                >
                  <span className="flex gap-5 text-sm sm:text-xl text-yellow-500">
                    ⊛ ⊛ ⊛ ⊛
                  </span>
                </div>
              </div>
              <div className="flex flex-col ">
                <div
                  className="border py-2 px-3 rounded-lg flex items-center justify-center text-xs cursor-pointer hover:bg-slate-100 font-medium text-slate-500"
                  onClick={() => handle.puas(setSubmitStatus)}
                  id="puas"
                >
                  <span className="flex gap-5 text-sm sm:text-xl text-yellow-500">
                    ⊛ ⊛ ⊛
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <div
                  className="border py-2 px-3 rounded-lg flex items-center justify-center text-xs cursor-pointer hover:bg-slate-100 font-medium text-slate-500"
                  onClick={() => handle.kurangPuas(setSubmitStatus)}
                  id="kurang-puas"
                >
                  <span className="flex gap-5 text-sm sm:text-xl text-yellow-500">
                    ⊛ ⊛
                  </span>
                </div>
              </div>
              <div className="flex flex-col ">
                <div
                  className="border py-2 px-3 rounded-lg flex items-center justify-center text-xs cursor-pointer hover:bg-slate-100 font-medium text-slate-500"
                  onClick={() => handle.tidakPuas(setSubmitStatus)}
                  id="tidak-puas"
                >
                  <span className="flex gap-5 text-sm sm:text-xl text-yellow-500">
                    ⊛
                  </span>
                </div>
              </div>
            </div>
            <div className=" mt-3">
              <h1 className="font-medium text-slate-500 text-sm">
                Hasil Penilaian :{" "}
              </h1>
              <div className="flex items-center mt-4 gap-5">
                <div className="text-sm font-medium text-blue-900 w-[150px] sm:w-[100px]">
                  ⊛ ⊛ ⊛ ⊛ ⊛
                </div>
                <div className="h-5 bg-slate-100 w-full rounded">
                  <div
                    className="bg-yellow-400 h-5 rounded"
                    id="sangat-puas-progress"
                    style={{ width: sangatPuasValue }}
                  ></div>
                </div>
                <div
                  className="text-sm font-medium text-slate-500 w-[100px] "
                  id="sangat-puas-v"
                >
                  {sangatPuasValue}
                </div>
              </div>
              <div className="flex items-center mt-4 gap-5">
                <div className="text-sm font-medium text-blue-900 w-[150px] sm:w-[100px]">
                  ⊛ ⊛ ⊛ ⊛
                </div>
                <div className="h-5 bg-slate-100 w-full rounded">
                  <div
                    className="bg-yellow-400 h-5 rounded"
                    id="cukup-puas-progress"
                    style={{ width: cukupPuasValue }}
                  ></div>
                </div>
                <div
                  className="text-sm font-medium text-slate-500 w-[100px] "
                  id="cukup-puas-v"
                >
                  {cukupPuasValue}
                </div>
              </div>
              <div className="flex items-center mt-4 gap-5">
                <div className="text-sm font-medium text-blue-900 w-[150px] sm:w-[100px]">
                  ⊛ ⊛ ⊛
                </div>
                <div className="h-5 bg-slate-100 w-full rounded">
                  <div
                    className="bg-yellow-400 h-5 rounded"
                    id="puas-progress"
                    style={{ width: puasValue }}
                  ></div>
                </div>
                <div
                  className="text-sm font-medium text-slate-500 w-[100px] "
                  id="puas-v"
                >
                  {puasValue}
                </div>
              </div>
              <div className="flex items-center mt-4 gap-5">
                <div className="text-sm font-medium text-blue-900 w-[150px] sm:w-[100px]">
                  ⊛ ⊛
                </div>
                <div className="h-5 bg-slate-100 w-full rounded">
                  <div
                    className="bg-yellow-400 h-5 rounded"
                    id="kurang-puas-progress"
                    style={{ width: kurangPuasValue }}
                  ></div>
                </div>
                <div
                  className="text-sm font-medium text-slate-500 w-[100px]"
                  id="kurang-puas-v"
                >
                  {kurangPuasValue}
                </div>
              </div>
              <div className="flex items-center mt-4 gap-5">
                <div className="text-sm font-medium text-blue-900 w-[150px] sm:w-[100px]">
                  ⊛
                </div>
                <div className="h-5 bg-slate-100 w-full rounded">
                  <div
                    className="bg-yellow-400 h-5 rounded"
                    id="tidak-puas-progress"
                    style={{ width: tidakPuasValue }}
                  ></div>
                </div>
                <div
                  className="text-sm font-medium text-slate-500 w-[100px]"
                  id="tidak-puas-v"
                >
                  {tidakPuasValue}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
