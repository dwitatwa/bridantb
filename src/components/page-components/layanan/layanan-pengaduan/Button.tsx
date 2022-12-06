import { useState, lazy, Suspense } from "react";

const Modal = lazy(() => import("./Modal"));

export default function Button() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(true);
  };

  return (
    <div className="flex flex-col gap-8 mt-auto">
      {toggle ? (
        <Suspense
          fallback={
            <div className="fixed inset-0 flex z-30 justify-center items-center">
              <div className="bg-white p-2">Loading ... </div>
            </div>
          }
        >
          <Modal setToggle={setToggle} />
        </Suspense>
      ) : (
        ""
      )}
      <button
        onClick={handleToggle}
        className="block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
      >
        Selengkapnya
      </button>
    </div>
  );
}
