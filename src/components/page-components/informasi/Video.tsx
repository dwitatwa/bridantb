import { useState, useEffect } from "react";

export default function Video() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC080LWwxcuQ1pmSORgDEkWQ&maxResults=9&order=date&key=AIzaSyCBCVBmUhEdmUHvB811XNuQ7uNWQSqi5fg"
    ).then((res) => {
      return res.json();
    });
    console.log(data);
    setItems(data.items);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="bg-gray-100 rounded-lg px-4 py-6 md:py-8 lg:py-12 mb-10">
        <p className="text-blue-500 lg:text-lg font-semibold text-center mb-2 md:mb-3">
          Kumpulan Informasi Tentang
        </p>

        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
          Video Seputar BRIDA NTB
        </h2>

        <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
          Laman ini berisi informasi mengenai video seputar Badan Riset dan
          Inovasi Daerah Provinsi NTB. Untuk menonton video secara lengkap,
          silahkan klik pada thumbnail dari video yang ingin Anda tonton. Untuk
          info video secara lengkap, silahkan kunjungi Youtube Channel kami{" "}
          <a
            href="https://www.youtube.com/channel/UC080LWwxcuQ1pmSORgDEkWQ"
            className="text-blue-500 underline"
            target="_blank"
          >
            Disini
          </a>
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
        {items.map((item: any) => (
          <a
            href={`https://www.youtube.com/watch?v=${item.id.videoId}`}
            className="group h-48 md:h-64 xl:h-96 flex flex-col bg-blue-100 rounded-lg shadow-lg overflow-hidden relative"
            key={item.id.videoId}
          >
            <div className="w-full h-full bg-slate-500 mix-blend-multiply z-40" />
            <img
              src={item.snippet.thumbnails.high.url}
              loading="lazy"
              alt="Photo by Agung Dwitatwa"
              className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
            />
            <div className="absolute z-50 top-0 text-white flex justify-center w-full h-full items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="#ffffff"
                className="w-12 h-12"
              >
                <path d="M188.3 147.1C195.8 142.8 205.1 142.1 212.5 147.5L356.5 235.5C363.6 239.9 368 247.6 368 256C368 264.4 363.6 272.1 356.5 276.5L212.5 364.5C205.1 369 195.8 369.2 188.3 364.9C180.7 360.7 176 352.7 176 344V167.1C176 159.3 180.7 151.3 188.3 147.1V147.1zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
              </svg>
            </div>
            <div className="absolute p-4 mt-auto z-50 bottom-0">
              <h2 className="text-white text-xl font-semibold transition duration-100 mb-2">
                {item.snippet.title.substring(0, 50)}{" "}
                {item.snippet.title.length > 50 && "..."}
              </h2>
              <span className="block text-blue-200 text-sm">
                {item.snippet.description}
              </span>
            </div>
          </a>
        ))}
      </div>
      {isLoading ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 xl:gap-8 mt-6">
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
    </section>
  );
}
