import{r as t}from"./chunks/index.962c38c4.js";import{c as l}from"./chunks/contentful.f50a375e.js";import{j as e}from"./chunks/jsx-runtime.be65cd1d.js";import"./chunks/_commonjsHelpers.208618ea.js";const{createClient:n}=l.default?l.default:l;function g(){const[a,i]=t.exports.useState([]),[r,o]=t.exports.useState(!0);return t.exports.useEffect(()=>{n({space:"yhv40pnlg70o",accessToken:"ho3n-fblnmKTj8z8e61eQ6L1L4ORhzKKo-S5IuXKvVk"}).getEntries({content_type:"berita",limit:4}).then(s=>{i(s.items),o(!1)})},[]),e.exports.jsxs("section",{className:"bg-white py-6 sm:py-8 lg:py-12",children:[e.exports.jsx("div",{className:"mb-10",children:e.exports.jsx("div",{className:"flex justify-center sm:justify-between items-center gap-4",children:e.exports.jsx("h2",{className:"text-gray-800 text-2xl lg:text-3xl font-bold",children:"Berita dan Kegiatan"})})}),r?e.exports.jsxs("div",{className:"grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8",children:[e.exports.jsx("div",{className:"bg-slate-200 h-48 md:h-64 xl:h-96  flex-col rounded-lg shadow-lg overflow-hidden relative flex justify-center items-center text-slate-500",children:"Loading..."}),e.exports.jsx("div",{className:"bg-slate-200 h-48 md:h-64 xl:h-96  flex-col rounded-lg shadow-lg overflow-hidden relative flex justify-center items-center text-slate-500",children:"Loading..."}),e.exports.jsx("div",{className:"bg-slate-200 h-48 md:h-64 xl:h-96  flex-col rounded-lg shadow-lg overflow-hidden relative flex justify-center items-center text-slate-500",children:"Loading..."}),e.exports.jsx("div",{className:"bg-slate-200 h-48 md:h-64 xl:h-96  flex-col rounded-lg shadow-lg overflow-hidden relative flex justify-center items-center text-slate-500",children:"Loading..."})]}):e.exports.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8",children:a.map(s=>e.exports.jsxs("a",{href:`/informasi/berita/${s.fields.slug}`,className:"group h-48 md:h-64 xl:h-96 flex flex-col bg-blue-100 rounded-lg shadow-lg overflow-hidden relative",children:[e.exports.jsx("div",{className:"w-full h-full bg-slate-500 mix-blend-multiply z-30"}),e.exports.jsx("img",{src:`https:${s.fields.thumbnail.fields.file.url}`,loading:"lazy",alt:"Photo by Agung Dwitatwa",className:"w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"}),e.exports.jsxs("div",{className:"absolute p-4 mt-auto z-40 bottom-0",children:[e.exports.jsx("span",{className:"block text-blue-200 text-sm",children:s.fields.tanggalBerita.split("-").reverse().join("-")}),e.exports.jsxs("h2",{className:"text-white text-xl font-semibold transition duration-100 mb-2",children:[s.fields.judulBerita.substring(0,50)," ",s.fields.judulBerita.length>50&&"..."]}),e.exports.jsx("span",{className:"text-blue-300 font-semibold",children:"Read more"})]})]},s.sys.id))}),e.exports.jsxs("div",{className:"flex justify-center sm:justify-between items-start sm:items-center gap-8 mt-5",children:[e.exports.jsx("p",{className:"hidden md:block max-w-screen-sm text-gray-500 text-sm lg:text-base",children:"Kumpulan informasi berupa berita dan kegiatan seputar Badan Riset dan Inovasi Daerah Provinsi Nusa Tenggara Barat"}),e.exports.jsx("a",{href:"/informasi/berita",className:"inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3",children:"Selengkapnya"})]})]})}export{g as default};
