import { useState, useEffect } from "react";
// import { createClient } from "contentful";

import contentful from "contentful";
const { createClient } = contentful;

export default function Blog() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    createClient({
      space: "yhv40pnlg70o",
      accessToken: "ho3n-fblnmKTj8z8e61eQ6L1L4ORhzKKo-S5IuXKvVk",
    })
      .getEntries({
        content_type: "blog",
        limit: 4,
      })
      .then((res: any) => {
        setItems(res.items);
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="bg-white mt-10">
      <div className="mb-10">
        <div className="flex justify-center sm:justify-between items-center gap-4">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">
            Blog Informasi
          </h2>
        </div>
      </div>
      {isLoading ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
          <div className="bg-slate-200 h-40 flex-col rounded-lg shadow-lg overflow-hidden relative flex justify-center items-center text-slate-500">
            Loading...
          </div>
          <div className="bg-slate-200 h-40 flex-col rounded-lg shadow-lg overflow-hidden relative flex justify-center items-center text-slate-500">
            Loading...
          </div>
          <div className="bg-slate-200 h-40 flex-col rounded-lg shadow-lg overflow-hidden relative flex justify-center items-center text-slate-500">
            Loading...
          </div>
          <div className="bg-slate-200 h-40 flex-col rounded-lg shadow-lg overflow-hidden relative flex justify-center items-center text-slate-500">
            Loading...
          </div>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
          {items.map((item: any) => (
            <div className="flex flex-col gap-2 p-4 lg:p-6 border rounded-md">
              <span className="text-gray-400 text-sm">
                {item.fields.judul === "coming-soon" ? (
                  <div className="bg-slate-200 h-5 w-20"></div>
                ) : (
                  "Selengkapnya"
                )}
              </span>

              <h2 className="text-gray-800 text-xl font-bold">
                <a
                  href="#"
                  className="hover:text-blue-500 active:text-blue-600 transition duration-100"
                >
                  {item.fields.judul}
                </a>
              </h2>

              <p className="text-gray-500">
                {item.fields.judul === "coming-soon" ? (
                  <div className="flex flex-col gap-2">
                    <div className="bg-slate-200 h-5"></div>
                    <div className="bg-slate-200 h-5"></div>
                  </div>
                ) : (
                  item.fields.preview.substring(0, 70)
                )}{" "}
                {item.fields.preview.length > 90 &&
                  item.fields.name !== "coming-soon" &&
                  "..."}
              </p>

              <div>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600 active:text-blue-700 font-semibold transition duration-100"
                >
                  {item.fields.judul === "coming-soon" ? (
                    <div className="bg-slate-200 h-5 w-20"></div>
                  ) : (
                    "Selengkapnya"
                  )}
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-center sm:justify-between items-start sm:items-center gap-8 mt-5">
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
