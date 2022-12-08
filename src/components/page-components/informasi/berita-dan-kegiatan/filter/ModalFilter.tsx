import { useState, useEffect, createContext } from "react";
import type { Dispatch, SetStateAction } from "react";
import BulanDrop from "./BulanDrop";
import TanggalDrop from "./TanggalDrop";
import TahunDrop from "./TahunDrop";

import { createClient } from "contentful";
// import contentful from "contentful";
// const { createClient } = contentful;

type contextType = {
  setTglState: Dispatch<SetStateAction<number>>;
  tglState: number;
  setBlnState: Dispatch<SetStateAction<number>>;
  blnState: number;
  setThnState: Dispatch<SetStateAction<number>>;
  thnState: number;
};

export const FilterContext = createContext({} as contextType);

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

type Props = {
  setItems: Dispatch<SetStateAction<never[]>>;
};

export default function ModalFilter({ setItems }: Props) {
  const [tglState, setTglState] = useState(1);
  const [blnState, setBlnState] = useState(1);
  const [thnState, setThnState] = useState(1970);

  const theState = {
    tglState,
    setTglState,
    blnState,
    setBlnState,
    thnState,
    setThnState,
  };

  useEffect(() => {
    const tgl = new Date().getDate();
    const bln = new Date().getMonth();
    const thn = new Date().getFullYear();

    setTglState(tgl);
    setBlnState(bln);
    setThnState(thn);
  }, []);

  useEffect(() => {
    const bulan = blnState < 10 ? "0" + (blnState + 1) : blnState + 1;
    const tanggal = tglState < 10 ? "0" + tglState : tglState;
    const filter = `${thnState}-${bulan}-${tanggal}`;
    createClient({
      space: "yhv40pnlg70o",
      accessToken: "ho3n-fblnmKTj8z8e61eQ6L1L4ORhzKKo-S5IuXKvVk",
    })
      .getEntries({
        content_type: "berita",
        "fields.tanggalBerita": filter,
      })
      .then((res: any) => {
        setItems(res.items);
      })
      .catch((e) => console.error(e));
  }, [tglState, blnState, thnState]);

  return (
    <div className="bg-gray-100 mt-5 p-3 py-10 rounded-lg flex flex-col items-center gap-5">
      <div className="text-gray-500 font-medium">Menampilkan Data :</div>
      <div className="flex justify-center gap-5">
        <FilterContext.Provider value={theState}>
          <TanggalDrop />
          <BulanDrop />
          <TahunDrop />
        </FilterContext.Provider>
      </div>
    </div>
  );
}
