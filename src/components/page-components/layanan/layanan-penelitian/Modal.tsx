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
        <h1 className=" text-blue-900 font-bold text-xl mb-5">
          Menu Layanan :
        </h1>
        <div className="flex sm:gap-2 flex-col my-2 flex-col sm:flex-row my-2 items-center">
          <a
            href="/layanan/progres-layanan-penelitian"
            className="px-2 py-1 border border-blue-900 text-blue-900 w-fit rounded-lg mt-2 text-sm flex items-center gap-2 hover:bg-blue-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"></path>
            </svg>
            <span>Lihat Progres Pengajuan</span>
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfl8q2A2tiPrl-5zlNsn6NcTz2XhWGVb2tPeC031WOlPSVAUw/viewform"
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
            <span>Ajukan Layanan Penelitian</span>
          </a>
        </div>
      </div>
    </div>
  );
}
