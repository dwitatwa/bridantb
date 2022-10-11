import { useState, useEffect } from "react";
import contentful from "contentful";
const { createClient } = contentful;

export default function BeritaSection() {
  const [minimum, setMinimum] = useState(0);
  const [maximum, setMaximum] = useState(4);
  const [items, setItems] = useState([]);

  const nextBerita = () => {
    if (maximum <= items.length - 1) {
      setMaximum(maximum + 4);
      setMinimum(minimum + 4);
    }
  };

  const prevBerita = () => {
    if (minimum > 0) {
      setMaximum(maximum - 4);
      setMinimum(minimum - 4);
    }
  };

  useEffect(() => {
    createClient({
      space: "yhv40pnlg70o",
      accessToken: "ho3n-fblnmKTj8z8e61eQ6L1L4ORhzKKo-S5IuXKvVk",
    })
      .getEntries({
        content_type: "berita",
        limit: 20,
      })
      .then((res) => {
        setItems(res.items);
        console.log(res.items);
      });
  }, []);

  return (
    <section className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mb-10">
        <div className="flex justify-between items-center gap-4">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">
            Berita Terbaru
          </h2>

          <a
            href="#"
            className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
          >
            Selengkapnya
          </a>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
        {items.slice(minimum, maximum).map((item) => (
          <a
            href="#"
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
              <span className="text-blue-300 font-semibold">Read more</span>
            </div>
          </a>
        ))}
      </div>
      <div className="flex justify-between items-start sm:items-center gap-8 mt-10">
        <p className="max-w-screen-sm text-gray-500 text-sm lg:text-base">
          Kumpulan berita mengenai pelaksanaan program dan kegiatan seputar
          Badan Riset dan Inovasi Daerah Provinsi Nusa Tenggara Barat
        </p>

        <div className="flex gap-9  justify-center">
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
    </section>
  );
}
