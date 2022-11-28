import { useState } from "react";

interface propTypes {
  index: number;
}

export default function Header({ index }: propTypes) {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle(true);
  };
  return (
    <>
      <header className="flex justify-between items-center py-4 md:py-8">
        <a
          href="/"
          className="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5 text-gray-800"
          aria-label="logo"
        >
          <img src="/logo.png" alt="" className="w-6" width="64" height="64" />
          <span className="-mt-2 text-gray-800">BRIDA NTB</span>
        </a>
        <nav className="hidden xl:flex gap-12">
          <a
            href="/"
            className={`hover:text-blue-900 text-lg font-semibold ${
              index === 1 ? "text-blue-900" : "text-gray-500"
            }`}
          >
            Beranda
          </a>
          <a
            href="/profil"
            className={`hover:text-blue-900 text-lg font-semibold ${
              index === 2 ? "text-blue-900" : "text-gray-500"
            }`}
          >
            Profil
          </a>
          <a
            href="/program"
            className={`${
              index === 3 ? "text-blue-900" : "text-gray-500"
            } hover:text-blue-900 active:text-blue-700 text-lg font-semibold transition duration-100`}
          >
            Program
          </a>
          <a
            href="/informasi"
            className={`${
              index === 4 ? "text-blue-900" : "text-gray-500"
            } hover:text-blue-900 active:text-blue-700 text-lg font-semibold transition duration-100`}
          >
            Informasi
          </a>
          <a
            href="/layanan"
            className={`${
              index === 5 ? "text-blue-900" : "text-gray-500"
            } hover:text-blue-900 active:text-blue-700 text-lg font-semibold transition duration-100`}
          >
            Layanan
          </a>
        </nav>
        <div className="xl:flex gap-2 hidden">
          <a
            href="/ppid"
            className="flex items-center justify-center gap-2 border-[2px] border-blue-900 hover:bg-blue-900 hover:text-white focus-visible:ring ring-blue-300 text-blue-900 active:text-blue-900 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              className="w-[15px] h-[15px]"
              fill="currentColor"
            >
              <path d="M224 256c-70.7 0-128-57.3-128-128S153.3 0 224 0s128 57.3 128 128s-57.3 128-128 128zm-45.7 48h91.4c11.8 0 23.4 1.2 34.5 3.3c-2.1 18.5 7.4 35.6 21.8 44.8c-16.6 10.6-26.7 31.6-20 53.3c4 12.9 9.4 25.5 16.4 37.6s15.2 23.1 24.4 33c15.7 16.9 39.6 18.4 57.2 8.7v.9c0 9.2 2.7 18.5 7.9 26.3H29.7C13.3 512 0 498.7 0 482.3C0 383.8 79.8 304 178.3 304zM436 218.2c0-7 4.5-13.3 11.3-14.8c10.5-2.4 21.5-3.7 32.7-3.7s22.2 1.3 32.7 3.7c6.8 1.5 11.3 7.8 11.3 14.8v30.6c7.9 3.4 15.4 7.7 22.3 12.8l24.9-14.3c6.1-3.5 13.7-2.7 18.5 2.4c7.6 8.1 14.3 17.2 20.1 27.2s10.3 20.4 13.5 31c2.1 6.7-1.1 13.7-7.2 17.2l-25 14.4c.4 4 .7 8.1 .7 12.3s-.2 8.2-.7 12.3l25 14.4c6.1 3.5 9.2 10.5 7.2 17.2c-3.3 10.6-7.8 21-13.5 31s-12.5 19.1-20.1 27.2c-4.8 5.1-12.5 5.9-18.5 2.4l-24.9-14.3c-6.9 5.1-14.3 9.4-22.3 12.8l0 30.6c0 7-4.5 13.3-11.3 14.8c-10.5 2.4-21.5 3.7-32.7 3.7s-22.2-1.3-32.7-3.7c-6.8-1.5-11.3-7.8-11.3-14.8V454.8c-8-3.4-15.6-7.7-22.5-12.9l-24.7 14.3c-6.1 3.5-13.7 2.7-18.5-2.4c-7.6-8.1-14.3-17.2-20.1-27.2s-10.3-20.4-13.5-31c-2.1-6.7 1.1-13.7 7.2-17.2l24.8-14.3c-.4-4.1-.7-8.2-.7-12.4s.2-8.3 .7-12.4L343.8 325c-6.1-3.5-9.2-10.5-7.2-17.2c3.3-10.6 7.7-21 13.5-31s12.5-19.1 20.1-27.2c4.8-5.1 12.4-5.9 18.5-2.4l24.8 14.3c6.9-5.1 14.5-9.4 22.5-12.9V218.2zm92.1 133.5c0-26.5-21.5-48-48.1-48s-48.1 21.5-48.1 48s21.5 48 48.1 48s48.1-21.5 48.1-48z"></path>
            </svg>
            PPID
          </a>
          <a
            href="/kontak-kami"
            className="lg:inline-block bg-blue-900 hover:bg-white hover:text-blue-900 border-[2px] border-blue-900 focus-visible:ring ring-blue-300 text-white active:text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
          >
            Kontak Kami
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
          <div className="font-bold text-blue-900 text-xl mb-8">Menu</div>
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
            href="/profil"
            className="flex border rounded-md p-3 justify-center"
          >
            <span className="mt-[1px] text-xs font-medium text-slate-500">
              Profil
            </span>
          </a>
          <a
            href="/program"
            className="flex border rounded-md p-3 justify-center"
          >
            <span className="mt-[1px] text-xs font-medium text-slate-500">
              Program
            </span>
          </a>
          <a
            href="/informasi"
            className="flex border rounded-md p-3 justify-center"
          >
            <span className="mt-[1px] text-xs font-medium text-slate-500">
              Informasi
            </span>
          </a>
          <a
            href="/layanan"
            className="flex border rounded-md p-3 justify-center"
          >
            <span className="mt-[1px] text-xs font-medium text-slate-500">
              Layanan
            </span>
          </a>
          <a
            href="/kontak-kami"
            className="flex border rounded-md p-3 justify-center"
          >
            <span className="mt-[1px] text-xs font-medium text-slate-500">
              Kontak
            </span>
          </a>
        </div>
        <a
          href="/ppid"
          className="relative flex items-center bg-gray-100 h-[100px] mt-5 p-6 rounded-lg bg-[url('/gambar1.webp')] bg-cover overflow-hidden"
        >
          <div className="absolute bg-blue-900 w-full h-full inset-0 opacity-80"></div>
          <div className="absolute">
            <div className="font-bold text-white"> Layanan PPID</div>
            <div className="font-bold text-white text-[10px]">
              Kunjungi &rarr;
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
