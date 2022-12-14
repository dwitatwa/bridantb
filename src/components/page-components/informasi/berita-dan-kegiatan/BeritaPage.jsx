import { useState, useEffect, lazy, Suspense } from "react";
// import { createClient } from "contentful";
import contentful from "contentful";
const { createClient } = contentful;

import Searching from "./search/Searching";
const ModalFilter = lazy(() => import("./filter/ModalFilter"));

export default function BeritaSection() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [toggleFilter, setToggleFilter] = useState(false);

  const handleToggle = () => {
    setToggleFilter(!toggleFilter);
  };

  const getData = (length) => {
    createClient({
      space: "yhv40pnlg70o",
      accessToken: "ho3n-fblnmKTj8z8e61eQ6L1L4ORhzKKo-S5IuXKvVk",
    })
      .getEntries({
        content_type: "berita",
        skip: 0,
        limit: length,
      })
      .then((res) => {
        setItems(res.items);
        setIsLoading(false);
      });
  };

  const loadMore = () => {
    setIsLoading(true);
    getData(items.length + 4);
  };

  useEffect(() => {
    getData(8);
  }, []);

  return (
    <section className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="bg-gray-100 rounded-lg px-4 py-6 md:py-8 lg:py-12 mb-10">
        <p className="text-blue-500 lg:text-lg font-semibold text-center mb-2 md:mb-3">
          Informasi Seputar
        </p>
        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
          Berita dan Kegiatan BRIDA NTB
        </h2>
        <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
          Laman ini merupakan laman yang berisi mengenai Berita dan Kegiatan
          yang dilakukan oleh BRIDA NTB. Informasi selengkapnya dari masing -
          masing berita dapat Anda peroleh dengan mengklik gambar pada berita
          tersebut.
        </p>
      </div>
      <div className="mb-10">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            className="sm:inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
            onClick={handleToggle}
          >
            Filter Berita
          </button>
          <Searching setItems={setItems} setLoading={setIsLoading} />
        </div>
        {toggleFilter ? (
          <Suspense
            fallback={
              <div className="bg-gray-100 mt-5 p-3 rounded-lg flex justify-center">
                Loading ...
              </div>
            }
          >
            <ModalFilter setItems={setItems} setLoading={setIsLoading} />
          </Suspense>
        ) : (
          ""
        )}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
        {items.map((item) => (
          <a
            href={`/informasi/berita/${item.fields.slug}`}
            className="group h-48 md:h-64 xl:h-96 flex flex-col bg-blue-100 rounded-lg shadow-lg overflow-hidden relative"
            key={item.sys.id}
          >
            <div className="w-full h-full bg-slate-500 mix-blend-multiply z-40" />
            <img
              src={`https:${item.fields.thumbnail.fields.file.url}`}
              loading="lazy"
              alt="Photo by Agung Dwitatwa"
              className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
            />

            <div className="absolute p-4 mt-auto z-50 bottom-0">
              <span className="block text-blue-200 text-sm">
                {item.fields.tanggalBerita.split("-").reverse().join("-")}
              </span>
              <h2 className="text-white text-xl font-semibold transition duration-100 mb-2">
                {item.fields.judulBerita.substring(0, 50)}{" "}
                {item.fields.judulBerita.length > 50 && "..."}
              </h2>
              <span className="text-blue-300 font-semibold">Selengkapnya</span>
            </div>
          </a>
        ))}
      </div>
      {isLoading ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8 mt-6">
          <div className="bg-slate-200 h-48 md:h-64 xl:h-96  flex-col rounded-lg shadow-lg overflow-hidden relative flex justify-center items-center text-slate-500">
            Loading...
          </div>
          <div className="bg-slate-200 h-48 md:h-64 xl:h-96  flex-col rounded-lg shadow-lg overflow-hidden relative flex justify-center items-center text-slate-500">
            Loading...
          </div>
          <div className="bg-slate-200 h-48 md:h-64 xl:h-96  flex-col rounded-lg shadow-lg overflow-hidden relative flex justify-center items-center text-slate-500">
            Loading...
          </div>
          <div className="bg-slate-200 h-48 md:h-64 xl:h-96  flex-col rounded-lg shadow-lg overflow-hidden relative flex justify-center items-center text-slate-500">
            Loading...
          </div>
        </div>
      ) : null}
      {toggleFilter ? (
        ""
      ) : (
        <div className="flex justify-center mt-10">
          <button
            className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-blue-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
            onClick={loadMore}
          >
            Muat Lebih Banyak
          </button>
        </div>
      )}
    </section>
  );
}
