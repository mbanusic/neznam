import{d,ax as x,v as _,H as a,b as f,c as z,a0 as I,I as o,k as S}from"./entry.M9NPd8zT.js";const y=d({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(l){var r;x(s=>({"1a0e9c02":o(m)}));const e=_();(r=e==null?void 0:e.nuxtIcon)!=null&&r.aliases;const n=l,p=a(()=>{var s;return(((s=e==null?void 0:e.nuxtIcon)==null?void 0:s.aliases)||{})[n.name]||n.name}),m=a(()=>`url('https://api.iconify.design/${p.value.replace(":","/")}.svg')`),c=a(()=>{var t,i,u;if(!n.size&&typeof((t=e.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((i=e.nuxtIcon)!=null&&i.size))return;const s=n.size||((u=e.nuxtIcon)==null?void 0:u.size)||"1em";return String(Number(s))===s?`${s}px`:s});return(s,t)=>(f(),z("span",{style:I({width:o(c),height:o(c)})},null,4))}}),v=S(y,[["__scopeId","data-v-a04c9603"]]);export{v as default};