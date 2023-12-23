import{r as l,u as m,f as x,b as g,j as e,d as p}from"./index-D8bdQzsE.js";import{S as f,s as w}from"./search-B8ifR5nh.js";import{n as r}from"./emotion-styled.browser.esm-JgYe3u2V.js";function v(){const[i,a]=l.useState(!1),t=m(x),o=g();l.useEffect(()=>{(()=>{(t==null?void 0:t.length)==0?a(!1):a(!0)})()},[t]);const c=s=>{o(p(s))},n=r.p`
        color: white;
        font-weight: bold;
        font-size: 2rem;
    `,d=r.p`
        color: white;
        font-size: 1rem;
        font-weight: bold;
    `,h=r.p`
        color: white;
        font-size: 0.6rem;
        font-weight: 300;
    `;return e.jsx(e.Fragment,{children:e.jsxs("section",{className:"h-screen w-screen",children:[e.jsx(f,{}),i?t.length>0&&e.jsx("div",{className:"mt-6 grid px-5 grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8",children:t.map(s=>e.jsxs("div",{className:"group relative max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700",children:[e.jsx("div",{className:"aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80",children:e.jsx("img",{src:`https://image.tmdb.org/t/p/w500/${s.poster_path}`,alt:s.title,className:"h-full w-full object-cover object-center lg:h-full lg:w-full"})}),e.jsxs("div",{className:"mt-4",children:[e.jsxs("div",{className:"flex",children:[e.jsx("img",{src:w,className:"logo w-5 text-white",alt:"start logo"}),e.jsx("span",{className:"text-xs py-3 mt-1 ml-1 text-gray-900 dark:text-white",children:s.popularity})]}),e.jsx(d,{className:"text-xs text-center",children:s.title}),e.jsx(h,{className:"mt-5",children:s.overview})]}),e.jsx("div",{className:"flex flex-col items-center pb-10",children:e.jsx("div",{className:"flex mt-4 md:mt-6",children:e.jsx("a",{onClick:()=>c(s.id),className:"inline-flex items-center px-5  text-white bg-red-700 px-5 rounded bg-border-red-700",children:"Eliminar"})})})]},s.id))}):e.jsx(n,{className:"m-5",children:"Sin favoritos..."})]})})}export{v as default};
