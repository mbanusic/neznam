import"./MDCSlot.3Dmu2czA.js";import{d as p,r as o,b as _,c as f,e as a,g as v,n,L as l,ar as h,as as g,a4 as y,k as V}from"./entry.utuBbs5-.js";import{r}from"./slot.1RFG0nzu.js";const C={class:"summary"},k={class:"content"},w=p({__name:"Callout",props:{type:{type:String,default:"info",validator(s){return["info","success","warning","danger","primary"].includes(s)}},modelValue:{required:!1,default:()=>o(!1)}},emits:["update:modelValue"],setup(s,{emit:c}){const i=s,u=c,e=o(i.modelValue),d=()=>{e.value=!e.value,u("update:modelValue",e.value)};return(t,B)=>{const m=y;return _(),f("div",{class:n(["callout",[s.type]])},[a("span",{class:"preview",onClick:d},[a("span",C,[r(t.$slots,"summary",{},void 0,!0)]),v(m,{name:"heroicons-outline:chevron-right",class:n(["icon",[l(e)&&"rotate"]])},null,8,["class"])]),h(a("div",k,[r(t.$slots,"content",{},void 0,!0)],512),[[g,l(e)]])],2)}}}),N=V(w,[["__scopeId","data-v-83f1118c"]]);export{N as default};
