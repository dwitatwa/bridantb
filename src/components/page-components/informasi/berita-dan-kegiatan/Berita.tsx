import { useState, useEffect } from "react";
import { createClient } from "contentful";

// import contentful from "contentful";
// const { createClient } = contentful;

export default function Berita() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    createClient({
      space: "yhv40pnlg70o",
      accessToken: "ho3n-fblnmKTj8z8e61eQ6L1L4ORhzKKo-S5IuXKvVk",
    })
      .getEntries({
        content_type: "berita",
        limit: 4,
      })
      .then((res: any) => {
        setItems(res.items);
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mb-10">
        <div className="flex justify-center sm:justify-between items-center gap-4">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">
            Berita dan Kegiatan
          </h2>
        </div>
      </div>
      {isLoading ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
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
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
          {items.map((item: any) => (
            <a
              href={`/informasi/berita/${item.fields.slug}`}
              className="group h-48 md:h-64 xl:h-96 flex flex-col bg-blue-100 rounded-lg shadow-lg overflow-hidden relative"
              key={item.sys.id}
            >
              <div className="w-full h-full bg-slate-500 mix-blend-multiply z-30" />
              <img
                src={`https:${item.fields.thumbnail.fields.file.url}`}
                loading="lazy"
                alt="Photo by Agung Dwitatwa"
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
              />

              <div className="absolute p-4 mt-auto z-40 bottom-0">
                <span className="block text-blue-200 text-sm">
                  {item.fields.tanggalBerita.split("-").reverse().join("-")}
                </span>
                <h2 className="text-white text-xl font-semibold transition duration-100 mb-2">
                  {item.fields.judulBerita.substring(0, 50)}{" "}
                  {item.fields.judulBerita.length > 50 && "..."}
                </h2>
                <span className="text-blue-300 font-semibold">Read more</span>
              </div>
            </a>
          ))}
        </div>
      )}

      <div className="flex justify-center sm:justify-between items-start sm:items-center gap-8 mt-5">
        <p className="hidden md:block max-w-screen-sm text-gray-500 text-sm lg:text-base">
          Kumpulan informasi berupa berita dan kegiatan seputar Badan Riset dan
          Inovasi Daerah Provinsi Nusa Tenggara Barat
        </p>

        <a
          href="/informasi/berita"
          className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
        >
          Selengkapnya
        </a>
      </div>
    </section>
  );
}
