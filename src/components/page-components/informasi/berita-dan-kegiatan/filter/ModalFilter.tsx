import { useState, useEffect, createContext } from "react";
import type { Dispatch, SetStateAction } from "react";
import BulanDrop from "./BulanDrop";
import TanggalDrop from "./TanggalDrop";
import TahunDrop from "./TahunDrop";

// import { createClient } from "contentful";
import contentful from "contentful";
const { createClient } = contentful;

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
  setLoading: Dispatch<SetStateAction<boolean>>;
};

export default function ModalFilter({ setItems, setLoading }: Props) {
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
    setBlnState(bln + 1);
    setThnState(thn);
  }, []);

  type filterType = {
    content_type: string;
    "fields.tanggalBerita"?: string;
    "fields.tanggalBerita[gte]"?: string;
    "fields.tanggalBerita[lte]"?: string;
  };

  const setFilter = (): filterType => {
    let entries: filterType = {
      content_type: "berita",
    };

    let tanggal = tglState < 10 ? "0" + tglState : tglState;
    let bulan = blnState < 10 ? "0" + blnState : blnState;

    // Filter Semua Tanggal
    if (tanggal === "00" && bulan !== "00") {
      tanggal = "01";
      const blnPls1 =
        blnState < 9
          ? "0" + (blnState + 1)
          : blnState + 1 > 12
          ? blnState
          : blnState + 1;
      entries["fields.tanggalBerita[gte]"] = `${thnState}-${bulan}-${tanggal}`;
      entries[
        "fields.tanggalBerita[lte]"
      ] = `${thnState}-${blnPls1}-${tanggal}`;
      return entries;
    }

    // Filter Semua Bulan
    if (tanggal === "00" && bulan === "00" && thnState !== 1970) {
      tanggal = "01";
      bulan = "01";
      let lastTGL = "31";
      let lastBLN = "12";
      entries["fields.tanggalBerita[gte]"] = `${thnState}-${bulan}-${tanggal}`;
      entries[
        "fields.tanggalBerita[lte]"
      ] = `${thnState}-${lastBLN}-${lastTGL}`;
      return entries;
    }
    if (tanggal === "00" && bulan === "00" && thnState === 1970) {
      return entries;
    }
    // Filter Semua Tahun

    entries["fields.tanggalBerita"] = `${thnState}-${bulan}-${tanggal}`;
    return entries;
  };

  useEffect(() => {
    setLoading(true);
    const filter = setFilter();
    createClient({
      space: "yhv40pnlg70o",
      accessToken: "ho3n-fblnmKTj8z8e61eQ6L1L4ORhzKKo-S5IuXKvVk",
    })
      .getEntries(filter)
      .then((res: any) => {
        setItems(res.items);
        setLoading(false);
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
