import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel } from "swiper";

const dummyList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function BeritaProgram() {
  return (
    <Swiper
      spaceBetween={10}
      mousewheel={true}
      modules={[Mousewheel]}
      slidesPerView={2}
      loop={true}
    >
      {dummyList.map((item) => (
        <SwiperSlide>
          <a
            href="#"
            className="group h-48 md:h-64 xl:h-96 flex flex-col bg-red-100 rounded-lg shadow-lg overflow-hidden relative"
          >
            <div className="w-full h-full bg-slate-500 mix-blend-multiply z-40"></div>
            <img
              src="/gambar1.webp"
              loading="lazy"
              alt="Photo by Minh Pham"
              className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
            />

            <div className="absolute p-4 mt-auto z-50 bottom-0">
              <span className="block text-blue-200 text-[10px] xl:text-sm">
                July 19, 2021
              </span>
              <h2 className="text-white text-[10px] xl:text-xl font-semibold transition duration-100 mb-2">
                BRIDA NTB bersedia menjadi tuan rumah MXGP 2022
              </h2>

              <span className="text-blue-300 font-semibold">Read more</span>
            </div>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default BeritaProgram;
