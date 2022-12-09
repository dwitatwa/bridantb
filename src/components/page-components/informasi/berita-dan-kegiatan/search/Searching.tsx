import { useDebounce } from "./useDebounce";
// import { createClient } from "contentful";
import contentful from "contentful";
const { createClient } = contentful;

import type { SetStateAction, Dispatch } from "react";

type SearchProps = {
  setItems: Dispatch<SetStateAction<never[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setCheck: Dispatch<SetStateAction<string>>;
};

export default function Searching({ setItems, setLoading }: SearchProps) {
  const handleChange = (e: any) => {
    createClient({
      space: "yhv40pnlg70o",
      accessToken: "ho3n-fblnmKTj8z8e61eQ6L1L4ORhzKKo-S5IuXKvVk",
    })
      .getEntries({
        content_type: "berita",
        "fields.textBerita[match]": e.target.value,
      })
      .then((res: any) => {
        setItems(res.items);
        setLoading(false);
      })
      .catch((e) => console.error(e));
  };
  const search = useDebounce(handleChange, 500, setLoading);

  return (
    <div className="flex items-center gap-5 bg-white hover:bg-gray-100 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold rounded-lg outline-none transition duration-100 pr-5">
      <input
        type="text"
        className="bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-500 text-sm md:text-base font-semibold outline-none transition duration-100 rounded-lg py-2 md:py-3 pl-4"
        onChange={search}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-search"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <circle cx="10" cy="10" r="7"></circle>
        <line x1="21" y1="21" x2="15" y2="15"></line>
      </svg>
    </div>
  );
}
