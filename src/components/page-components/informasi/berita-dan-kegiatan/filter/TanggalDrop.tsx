import { useContext } from "react";
import type { MouseEvent } from "react";
import { FilterContext } from "./ModalFilter";
const value = [...Array(31).keys()].map((v) => (v = v + 1));
const bulan = [
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

export default function TanggalDrop() {
  const {
    setTglState,
    setThnState,
    setBlnState,
    tglState,
    blnState,
    thnState,
  } = useContext(FilterContext);

  const handleSelect = (e: MouseEvent<HTMLElement>) => {
    const selectedValue = (e.target as HTMLDivElement).innerHTML;
    setTglState(parseInt(selectedValue));
    if (blnState === 0) {
      const bln = new Date().getMonth();
      setBlnState(bln);
    }
    if (thnState === 0) {
      const thn = new Date().getFullYear();
      setThnState(thn);
    }
  };

  const handleSelectAll = () => {
    setTglState(0);
  };

  return (
    <div className="flex flex-col gap-2">
      <div
        className={`relative text-xs border max-[320px]:px-2 px-4 py-2 rounded flex gap-2 items-center bg-white text-center sm:w-[120px]`}
      >
        <span className="w-full flex flex-col sm:flex-row justify-center gap-1 items-center">
          <span>Tanggal :</span>
          <span className="font-bold text-blue-500">
            {tglState === 0 ? "~" : tglState}
          </span>
        </span>
      </div>
      <div className="border bg-white text-xs rounded-md h-[140px] overflow-y-auto">
        <div
          className={`px-2 py-2 text-center border-b cursor-pointer hover:bg-slate-200 active:bg-slate-300 font-bold`}
          onClick={handleSelectAll}
        >
          Semua
        </div>
        {value.map((value) => (
          <div
            className={`px-2 py-2 text-center border-b cursor-pointer hover:bg-slate-200 active:bg-slate-300`}
            key={value}
            onClick={handleSelect}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
}
