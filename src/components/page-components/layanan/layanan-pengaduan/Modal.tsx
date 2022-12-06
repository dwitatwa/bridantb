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
            href="https://care.ntbprov.go.id/"
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
            <span>Pengaduan Melalui NTB Care</span>
          </a>
          <a
            href="https://www.lapor.go.id/"
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
            <span>Pengaduan Melalui Kanal Lapor</span>
          </a>
          <a
            href="https://forms.gle/Tg245jn6AKdbynRi6"
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
            <span>Penyalahgunaan Wewenang</span>
          </a>
        </div>
      </div>
    </div>
  );
}
