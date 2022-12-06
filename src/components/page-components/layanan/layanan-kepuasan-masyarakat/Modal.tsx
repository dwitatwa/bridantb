import type { Dispatch, SetStateAction } from "react";
import { lazy, useState, Suspense } from "react";
const ModalKepuasanMasyarakat = lazy(() => import("./ModalKepuasanMasyarakat"));

type Props = {
  setToggle: Dispatch<SetStateAction<boolean>>;
};

export default function Modal({ setToggle }: Props) {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(true);
  };

  if (showModal)
    return (
      <Suspense
        fallback={
          <div className="fixed inset-0 flex z-30 justify-center items-center">
            <div
              className="absolute bg-slate-800 inset-0 z-30 opacity-60"
              onClick={() => setToggle(false)}
            ></div>
            <div className="bg-white p-2">Loading ... </div>
          </div>
        }
      >
        <ModalKepuasanMasyarakat toggle={setShowModal} />
      </Suspense>
    );
  return (
    <div className="fixed inset-0 flex z-30 justify-center items-center">
      <div
        className="absolute bg-slate-800 inset-0 z-30 opacity-60"
        onClick={() => setToggle(false)}
      ></div>
      <div className="relative z-40 bg-white p-5 sm:p-10 rounded-lg flex flex-col  justify-center items-center ">
        <h1 className=" text-blue-900 font-bold text-xl mb-5">
          Menu Layanan :
        </h1>
        <div className="flex sm:gap-2 flex-col my-2 flex-col sm:flex-row my-2 items-center">
          <a
            href="/layanan/kepuasan-masyarakat/survey"
            className="px-2 py-1 border border-blue-900 text-blue-900 w-fit rounded-lg mt-2 text-sm flex items-center gap-2 hover:bg-blue-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"></path>
            </svg>
            <span>Ajukan Layanan</span>
          </a>
          <button
            className="px-2 py-1 border border-blue-900 text-blue-900 w-fit rounded-lg mt-2 text-sm flex items-center gap-2 hover:bg-blue-50"
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
        </div>
      </div>
    </div>
  );
}
