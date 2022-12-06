import type { Dispatch, SetStateAction } from "react";

type Props = {
  setToggle: Dispatch<SetStateAction<boolean>>;
};

export default function Modal({ setToggle }: Props) {
  return (
    <div className="fixed inset-0 flex z-30 justify-center items-center">
      <div
        className="absolute bg-slate-800 inset-0 z-30 opacity-60"
        onClick={() => setToggle(false)}
      ></div>
      <div className="relative z-40 bg-white p-5 sm:p-10 rounded-lg flex flex-col  justify-center items-center ">
        <h1 className=" text-blue-900 font-bold text-xl mb-5">Menu Layanan</h1>
        <div className="flex justify-center sm:gap-2 flex-col sm:flex-row my-2 w-full items-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfNaRO7iIf-iG4NjIEaOd9PQ-eHaAk9w_MibSAs0qb5hLYjjQ/viewform?usp=sf_link"
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
            <span>Pendaftaran Startup</span>
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSez3b3nk7t4VwVnSF8yWNvA9qAEt_G-vz_Xa20p6wjLjIiHtg/viewform?usp=sf_link"
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
            <span>Pendaftaran Mitra</span>
          </a>
        </div>
      </div>
    </div>
  );
}
