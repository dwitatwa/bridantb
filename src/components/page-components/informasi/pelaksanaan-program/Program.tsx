import { useState, useEffect } from "react";
// import { createClient } from "contentful";

import contentful from "contentful";
const { createClient } = contentful;

export default function Program() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadMore = () => {
    setIsLoading(true);
    getData(items.length + 2);
  };

  const getData = (index: number) => {
    createClient({
      space: "yhv40pnlg70o",
      accessToken: "ho3n-fblnmKTj8z8e61eQ6L1L4ORhzKKo-S5IuXKvVk",
    })
      .getEntries({
        content_type: "pelaksanaanProgram",
        skip: 0,
        limit: index,
      })
      .then((res: any) => {
        setItems(res.items);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getData(2);
  }, []);

  return (
    <section className="bg-white py-6 sm:py-8 lg:py-12" id="pelaksanaanProgram">
      <div className="mb-10">
        <div className="flex justify-center mt-10 sm:justify-between items-end gap-4 items-center">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">
            Pelaksanaan Program
          </h2>
          <a
            href="/informasi/program"
            className="hidden sm:inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
          >
            Selengkapnya
          </a>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {items.map((item: any) => (
          <a
            href={"/informasi/program/" + item.fields.slug}
            className="group h-80 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4"
            key={item.sys.id}
          >
            <div className="w-full h-full bg-slate-500 mix-blend-multiply z-40 absolute left-0 bottom-0"></div>
            <img
              src={item.fields.cover.fields.file.url}
              loading="lazy"
              alt="Photo by Fakurian Design"
              className="w-full h-full object-cover object-top absolute inset-0 group-hover:scale-110 transition duration-200"
            />

            <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

            <div className="flex flex-col absolute z-50 bottom-5">
              <span className="text-gray-300">
                {item.fields.judulAtasKecil}
              </span>
              <span className="text-white text-lg lg:text-3xl font-semibold">
                {item.fields.judulBawahBesar}
              </span>
            </div>
          </a>
        ))}
      </div>
      {isLoading ? (
        <div className="grid sm:grid-cols-2 gap-6 mt-6">
          <div className="group bg-slate-200 h-80 flex items-center justify-center rounded-lg overflow-hidden shadow-lg relative p-4">
            Loading...
          </div>
          <div className="group bg-slate-200 h-80 flex items-center justify-center rounded-lg overflow-hidden shadow-lg relative p-4">
            Loading...
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className="flex justify-center items-start sm:justify-between sm:items-center gap-8 mt-5">
        <p className="hidden md:block max-w-screen-sm text-gray-500 text-sm lg:text-base">
          Kumpulan informasi terbaru mengenai pelaksanaan program Badan Riset
          dan Inovasi Daerah Provinsi Nusa Tenggara Barat
        </p>

        {items.length === 4 ? (
          <a
            href="/informasi/program"
            className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
          >
            Selengkapnya
          </a>
        ) : (
          <button
            className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
            onClick={loadMore}
          >
            Lainnya
          </button>
        )}
      </div>
    </section>
  );
}
