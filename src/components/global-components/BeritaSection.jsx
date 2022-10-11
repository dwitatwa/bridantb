import { useState } from "react";

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function BeritaSection() {
  const [minimum, setMinimum] = useState(0);
  const [maximum, setMaximum] = useState(4);

  return (
    <section class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="mb-10">
        <div class="flex justify-between items-center gap-4">
          <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold">
            Berita Terbaru
          </h2>

          <a
            href="#"
            class="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
          >
            Selengkapnya
          </a>
        </div>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
        {items.slice(minimum, maximum).map((item) => (
          <a
            href="#"
            class="group h-48 md:h-64 xl:h-96 flex flex-col bg-blue-100 rounded-lg shadow-lg overflow-hidden relative"
          >
            <div class="w-full h-full bg-slate-500 mix-blend-multiply z-40" />
            <img
              src="gambar1.webp"
              loading="lazy"
              alt="Photo by Agung Dwitatwa"
              class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
            />

            <div class="absolute p-4 mt-auto z-50 bottom-0">
              <span class="block text-blue-200 text-sm">{item}</span>
              <h2 class="text-white text-xl font-semibold transition duration-100 mb-2">
                BRIDA NTB bersedia menjadi tuan rumah MXGP 2022
              </h2>

              <span class="text-blue-300 font-semibold">Read more</span>
            </div>
          </a>
        ))}
      </div>
      <div className="flex gap-3 mt-10 justify-end">
        <button
          href="#"
          class="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-1 md:py-1"
        >
          &larr;
        </button>
        <button
          href="#"
          class="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
        >
          &rarr;
        </button>
      </div>
    </section>
  );
}
