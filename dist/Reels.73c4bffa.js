import{r as l}from"./chunks/index.962c38c4.js";import{j as e}from"./chunks/jsx-runtime.be65cd1d.js";function x(){const[a,r]=l.exports.useState([]),[i,o]=l.exports.useState(!0),n=async()=>{const s=await fetch("https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url&access_token=IGQVJXRHNlM2tkM2JsaUNEbGY5Ym9UT25MdTYwc2Q4Szl2YTh2WEdFdW1xcUh0WTZAYMHB4QzQzLVJ2VmFQVnlSc2pvR1MyV09fVWwyWUZAhYzRsWHVyckxFWnc5bHZAoNG1BV1RkUnRn").then(t=>t.json()).catch(t=>console.error(t));console.log(s),r(s.data.filter(t=>t.media_type==="VIDEO")),o(!1)};return l.exports.useEffect(()=>{n()},[]),e.exports.jsxs("section",{className:"bg-white py-6 sm:py-8 lg:py-12",children:[e.exports.jsx("div",{className:"mb-10",children:e.exports.jsx("div",{className:"flex justify-center sm:justify-between items-center gap-4",children:e.exports.jsx("h2",{className:"text-gray-800 text-2xl lg:text-3xl font-bold",children:"Video Reels"})})}),i?e.exports.jsxs("div",{className:"grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8",children:[e.exports.jsx("div",{className:"bg-slate-200 h-48 md:h-64 xl:h-96  flex-col rounded-lg shadow-lg overflow-hidden relative flex justify-center items-center text-slate-500",children:"Loading..."}),e.exports.jsx("div",{className:"bg-slate-200 h-48 md:h-64 xl:h-96  flex-col rounded-lg shadow-lg overflow-hidden relative flex justify-center items-center text-slate-500",children:"Loading..."}),e.exports.jsx("div",{className:"bg-slate-200 h-48 md:h-64 xl:h-96  flex-col rounded-lg shadow-lg overflow-hidden relative flex justify-center items-center text-slate-500",children:"Loading..."}),e.exports.jsx("div",{className:"bg-slate-200 h-48 md:h-64 xl:h-96  flex-col rounded-lg shadow-lg overflow-hidden relative flex justify-center items-center text-slate-500",children:"Loading..."})]}):e.exports.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8",children:a.slice(0,4).map(s=>e.exports.jsxs("a",{href:s.media_url,className:"group h-48 md:h-64 xl:h-96 flex flex-col bg-blue-100 rounded-lg shadow-lg overflow-hidden relative",children:[e.exports.jsx("div",{className:"w-full h-full bg-slate-400 mix-blend-multiply z-30"}),e.exports.jsx("div",{className:"absolute z-50 top-0 text-white flex justify-center w-full h-full items-center",children:e.exports.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"#ffffff",className:"w-12 h-12",children:e.exports.jsx("path",{d:"M188.3 147.1C195.8 142.8 205.1 142.1 212.5 147.5L356.5 235.5C363.6 239.9 368 247.6 368 256C368 264.4 363.6 272.1 356.5 276.5L212.5 364.5C205.1 369 195.8 369.2 188.3 364.9C180.7 360.7 176 352.7 176 344V167.1C176 159.3 180.7 151.3 188.3 147.1V147.1zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"})})}),e.exports.jsx("img",{src:s.thumbnail_url,loading:"lazy",alt:"Photo by Agung Dwitatwa",className:"w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"})]},s.id))}),e.exports.jsxs("div",{className:"flex justify-center sm:justify-between items-start sm:items-center gap-8 mt-5",children:[e.exports.jsx("p",{className:"hidden md:block max-w-screen-sm text-gray-500 text-sm lg:text-base",children:"Kumpulan informasi berupa Video Reels Instagram seputar berita, kegiatan maupun program Badan Riset dan Inovasi Daerah Provinsi Nusa Tenggara Barat"}),e.exports.jsx("a",{href:"https://www.instagram.com/brida_ntb/reels/",target:"_blank",className:"inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3",children:"Selengkapnya"})]})]})}export{x as default};