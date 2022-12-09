import { useContext } from "react";
import type { MouseEvent } from "react";
import { FilterContext } from "./ModalFilter";

const value = [
  "~",
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

export default function BulanDrop() {
  const { setBlnState, setTglState, setThnState, blnState, thnState } =
    useContext(FilterContext);

  const handleSelect = (e: MouseEvent<HTMLButtonElement>) => {
    const selectedValue = (e.target as HTMLButtonElement).value;
    setBlnState(parseInt(selectedValue));
    if (thnState === 0) {
      const thn = new Date().getFullYear();
      setThnState(thn);
    }
  };

  const handleSelectAll = () => {
    setBlnState(0);
    setTglState(0);
  };

  return (
    <div className="flex flex-col gap-2">
      <div
        className={`relative text-xs border max-[320px]:px-2 px-4 py-2 rounded flex gap-2 items-center bg-white text-center sm:w-[150px]`}
      >
        <span className="w-full flex flex-col sm:flex-row justify-center gap-1 items-center">
          <span>Bulan :</span>
          <span className="font-bold text-blue-500">{value[blnState]}</span>
        </span>
      </div>
      <div className="border bg-white text-xs rounded-md h-[140px] overflow-y-auto flex flex-col">
        <div
          className={`px-2 py-2 text-center border-b cursor-pointer hover:bg-slate-200 active:bg-slate-300 font-bold`}
          onClick={handleSelectAll}
        >
          Semua
        </div>
        {value.map((value, index) => {
          if (index !== 0) {
            return (
              <button
                className={`px-2 py-2 text-center border-b cursor-pointer hover:bg-slate-200 active:bg-slate-300`}
                key={value}
                onClick={handleSelect}
                value={index}
              >
                {value}
              </button>
            );
          }
        })}
      </div>
    </div>
  );
}
