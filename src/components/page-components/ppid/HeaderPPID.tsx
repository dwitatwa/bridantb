import { useState } from "react";

interface propTypes {
  index: number;
}

export default function HeaderPPID({ index }: propTypes) {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle(true);
  };
  return (
    <>
      <header className="flex justify-between items-center py-4 md:py-8">
        <a
          href="/ppid"
          className="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5 text-gray-800"
          aria-label="logo"
        >
          <img src="/logo.png" alt="" className="w-6" width="64" height="64" />
          <img src="/logoPPID.png" alt="" className="w-[150px]" />
        </a>
        <nav className="hidden xl:flex gap-12">
          <a
            href="/ppid/profil-ppid"
            className={`hover:text-blue-900 text-lg font-semibold ${
              index === 2 ? "text-blue-900" : "text-gray-500"
            }`}
          >
            Profil
          </a>
          <a
            href="/ppid/informasi"
            className={`${
              index === 3 ? "text-blue-900" : "text-gray-500"
            } hover:text-blue-900 active:text-blue-700 text-lg font-semibold transition duration-100`}
          >
            Informasi
          </a>
          <a
            href="/ppid/dokumen"
            className={`${
              index === 4 ? "text-blue-900" : "text-gray-500"
            } hover:text-blue-900 active:text-blue-700 text-lg font-semibold transition duration-100`}
          >
            Dokumen
          </a>
          <a
            href="/ppid/prosedur"
            className={`${
              index === 5 ? "text-blue-900" : "text-gray-500"
            } hover:text-blue-900 active:text-blue-700 text-lg font-semibold transition duration-100`}
          >
            Prosedur
          </a>
          <a
            href="https://v2.ppid.ntbprov.go.id/halaman-25-regulasi.html"
            className={`${
              index === 6 ? "text-blue-900" : "text-gray-500"
            } hover:text-blue-900 active:text-blue-700 text-lg font-semibold transition duration-100`}
          >
            SI PPID
          </a>
        </nav>
        <div className="xl:flex gap-2 hidden">
          <a
            href="/"
            className="flex items-center justify-center gap-2 border-[2px] border-blue-900 hover:bg-blue-900 hover:text-white focus-visible:ring ring-blue-300 text-blue-900 active:text-blue-900 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="w-[15px] h-[15px]"
              fill="currentColor"
            >
              <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
            </svg>
            Halaman Utama
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center xl:hidden bg-blue-900  focus-visible:ring ring-blue-300 text-white active:text-white text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2"
          id="menuButton"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          Menu
        </button>
      </header>
      <div
        className={`${
          toggle ? "block" : "hidden"
        } absolute z-10 top-0 bg-white left-0 w-screen overflow-hidden p-5 pb-10`}
      >
        <div className="flex justify-between items-center">
          <div className="font-bold text-blue-900 text-xl mb-8">Menu PPID</div>
          <div
            className="font-bold text-blue-900 text-xl mb-8"
            onClick={() => setToggle(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5">
          <a href="/" className="flex border rounded-md p-3 justify-center">
            <span className="mt-[1px] text-xs font-medium text-slate-500">
              Beranda
            </span>
          </a>
          <a
            href="/ppid/profil-ppid"
            className="flex border rounded-md p-3 justify-center"
          >
            <span className="mt-[1px] text-xs font-medium text-slate-500">
              Profil
            </span>
          </a>
          <a
            href="/ppid/informasi"
            className="flex border rounded-md p-3 justify-center"
          >
            <span className="mt-[1px] text-xs font-medium text-slate-500">
              Informasi
            </span>
          </a>
          <a
            href="/ppid/dokumen"
            className="flex border rounded-md p-3 justify-center"
          >
            <span className="mt-[1px] text-xs font-medium text-slate-500">
              Dokumen
            </span>
          </a>
          <a
            href="/ppid/prosedur"
            className="flex border rounded-md p-3 justify-center"
          >
            <span className="mt-[1px] text-xs font-medium text-slate-500">
              Prosedur
            </span>
          </a>
          <a
            href="https://v2.ppid.ntbprov.go.id/halaman-25-regulasi.html"
            className="flex border rounded-md p-3 justify-center"
          >
            <span className="mt-[1px] text-xs font-medium text-slate-500">
              SI PPID
            </span>
          </a>
        </div>
        <a
          href="/"
          className="relative flex items-center bg-gray-100 h-[100px] mt-5 p-6 rounded-lg bg-[url('/gambar1.webp')] bg-cover overflow-hidden"
        >
          <div className="absolute bg-blue-900 w-full h-full inset-0 opacity-80"></div>
          <div className="absolute">
            <div className="font-bold text-white">
              {" "}
              Kembali Ke Halaman Utama
            </div>
            <div className="font-bold text-white text-[10px]">
              Kembali &rarr;
            </div>
          </div>
        </a>
        <div className="mt-10 text-[8px] text-center font-medium text-slate-400">
          &copy; {new Date().getFullYear()}. Badan Riset dan Inovasi Daerah
          Provinsi NTB
        </div>
      </div>
    </>
  );
}
