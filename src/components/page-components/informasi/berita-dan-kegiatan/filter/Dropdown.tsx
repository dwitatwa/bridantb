import type { Dispatch, SetStateAction, MouseEvent } from "react";

type Props = {
  title: string;
  value: number[] | string[];
  stateThn?:string;
  stateBln?:string;
  stateTgl?:string;
  setTanggal?: Dispatch<SetStateAction<string>>;
  setBulan?: Dispatch<SetStateAction<string>>;
  setTahun?: Dispatch<SetStateAction<string>>;
};

export default function Dropdown({
  title,
  value,
  stateThn,
  stateBln,
  stateTgl,
  setTanggal,
  setBulan,
  setTahun,
}: Props) {
  const handleSelect = (e: MouseEvent<HTMLElement>) => {
    const selectedValue = (e.target as HTMLDivElement).innerHTML;
    if (title === "Bulan") {
      if (setBulan) return setBulan(selectedValue);
      if()
    }
    if (title === "Tahun") {
      if (setTahun) return setTahun(selectedValue);
    }
    if (title === "Tanggal") {
      if (setTanggal) return setTanggal(selectedValue);
    }
  };

  const handleSelectAll = () => {
    if (title === "Tanggal") {
      return setTanggal ? setTanggal("~") : null;
    }
    if (title === "Bulan") {
      if (setTanggal) setTanggal("~");
      if (setBulan) setBulan("~");
    }

    if (title === "Tahun") {
      if (setTanggal) setTanggal("~");
      if (setBulan) setBulan("~");
      if (setTahun) setTahun("~");
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div
        className={`relative text-xs border px-4 py-2 rounded flex gap-2 items-center bg-white ${
          title === "Tanggal" ? "w-[120px]" : "w-[150px]"
        } text-center`}
      >
        <span className="w-full">
          {title} : <span className="font-bold text-blue-500">{state}</span>
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
