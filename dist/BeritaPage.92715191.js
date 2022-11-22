import{r as s}from"./chunks/index.9d80e365.js";import{c as x}from"./chunks/contentful.080d898e.js";import{j as e}from"./chunks/jsx-runtime.81317ecf.js";const{createClient:c}=x;function h(){const[l,i]=s.exports.useState([]),[n,a]=s.exports.useState(!0),r=t=>{c({space:"yhv40pnlg70o",accessToken:"ho3n-fblnmKTj8z8e61eQ6L1L4ORhzKKo-S5IuXKvVk"}).getEntries({content_type:"berita",skip:0,limit:t}).then(d=>{i(d.items),a(!1)})},o=()=>{a(!0),r(l.length+4)};return s.exports.useEffect(()=>{r(8)},[]),e.exports.jsxs("section",{className:"bg-white py-6 sm:py-8 lg:py-12",children:[e.exports.jsxs("div",{className:"bg-gray-100 rounded-lg px-4 py-6 md:py-8 lg:py-12 mb-10",children:[e.exports.jsx("p",{className:"text-blue-500 lg:text-lg font-semibold text-center mb-2 md:mb-3",children:"Informasi Seputar"}),e.exports.jsx("h2",{className:"text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6",children:"Berita dan Kegiatan BRIDA NTB"}),e.exports.jsx("p",{className:"max-w-screen-md text-gray-500 md:text-lg text-center mx-auto",children:"Laman ini merupakan laman yang berisi mengenai Berita dan Kegiatan yang dilakukan oleh BRIDA NTB. Informasi selengkapnya dari masing - masing berita dapat Anda peroleh dengan mengklik gambar pada berita tersebut."})]}),e.exports.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8",children:l.map(t=>e.exports.jsxs("a",{href:`/informasi/berita/${t.fields.slug}`,className:"group h-48 md:h-64 xl:h-96 flex flex-col bg-blue-100 rounded-lg shadow-lg overflow-hidden relative",children:[e.exports.jsx("div",{className:"w-full h-full bg-slate-500 mix-blend-multiply z-40"}),e.exports.jsx("img",{src:`https:${t.fields.thumbnail.fields.file.url}`,loading:"lazy",alt:"Photo by Agung Dwitatwa",className:"w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"}),e.exports.jsxs("div",{className:"absolute p-4 mt-auto z-50 bottom-0",children:[e.exports.jsx("span",{className:"block text-blue-200 text-sm",children:t.fields.tanggalBerita.split("-").reverse().join("-")}),e.exports.jsxs("h2",{className:"text-white text-xl font-semibold transition duration-100 mb-2",children:[t.fields.judulBerita.substring(0,50)," ",t.fields.judulBerita.length>50&&"..."]}),e.exports.jsx("span",{className:"text-blue-300 font-semibold",children:"Selengkapnya"})]})]},t.sys.id))}),n?e.exports.jsxs("div",{className:"grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8 mt-6",children:[e.exports.jsx("div",{className:"bg-slate-200 h-48 md:h-64 xl:h-96  flex-col rounded-lg shadow-lg overflow-hidden relative flex justify-center items-center text-slate-500",children:"Loading..."}),e.exports.jsx("div",{className:"bg-slate-200 h-48 md:h-64 xl:h-96  flex-col rounded-lg shadow-lg overflow-hidden relative flex justify-center items-center text-slate-500",children:"Loading..."}),e.exports.jsx("div",{className:"bg-slate-200 h-48 md:h-64 xl:h-96  flex-col rounded-lg shadow-lg overflow-hidden relative flex justify-center items-center text-slate-500",children:"Loading..."}),e.exports.jsx("div",{className:"bg-slate-200 h-48 md:h-64 xl:h-96  flex-col rounded-lg shadow-lg overflow-hidden relative flex justify-center items-center text-slate-500",children:"Loading..."})]}):null,e.exports.jsx("div",{className:"flex justify-center mt-10",children:e.exports.jsx("button",{className:"inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-blue-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3",onClick:o,children:"Muat Lebih Banyak"})})]})}export{h as default};