import { useState } from "react";

export default function InformasiSection() {
  const [minimum, setMinimum] = useState(0);
  const [maximum, setMaximum] = useState(4);

  const nextBerita = () => {
    console.log("next");
  };

  const prevBerita = () => {
    console.log("prev");
  };

  return (
    <section className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mb-10">
        <div className="flex justify-between items-end gap-4">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">
            Informasi Terbaru
          </h2>
          <div className="flex gap-4  justify-center">
            <button
              href="#"
              className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-1 md:py-1"
              onClick={prevBerita}
            >
              &larr;
            </button>
            <button
              href="#"
              className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
              onClick={nextBerita}
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <a
          href="#"
          className="group h-80 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4"
        >
          <div className="w-full h-full bg-slate-500 mix-blend-multiply z-40 absolute left-0 bottom-0"></div>
          <img
            src="https://images.unsplash.com/photo-1635859890085-ec8cb5466806?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRvY3VtZW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
            loading="lazy"
            alt="Photo by Fakurian Design"
            className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
          />

          <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

          <div className="flex flex-col absolute z-50 bottom-5">
            <span className="text-gray-300">Hasil Seleksi Administrasi</span>
            <span className="text-white text-lg lg:text-3xl font-semibold">
              Beasiswa NTB Tujuan Malaysia
            </span>
          </div>
        </a>
        <a
          href="#"
          className="group h-80 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4"
        >
          <div className="w-full h-full bg-slate-500 mix-blend-multiply z-40 absolute left-0 bottom-0"></div>
          <img
            src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
            loading="lazy"
            alt="Photo by Fakurian Design"
            className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
          />

          <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

          <div className="flex flex-col absolute z-50 bottom-5">
            <span className="text-gray-300">Pengumuman Kelas Pemrograman</span>
            <span className="text-white text-lg lg:text-3xl font-semibold">
              Brida School Academy
            </span>
          </div>
        </a>
      </div>
      <div className="flex justify-between items-start sm:items-center gap-8 mt-5">
        <p className="hidden md:block max-w-screen-sm text-gray-500 text-sm lg:text-base">
          Kumpulan informasi terbaru mengenai pelaksanaan program dan kegiatan
          seputar Badan Riset dan Inovasi Daerah Provinsi Nusa Tenggara Barat
        </p>

        <a
          href="#"
          className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
        >
          Selengkapnya
        </a>
      </div>
    </section>
  );
}
