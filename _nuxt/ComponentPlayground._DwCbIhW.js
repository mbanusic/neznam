import{u as m}from"./asyncData.qOd7NSm_.js";import{I as c,H as p,d as i,ac as u,r as l,M as e,k as d}from"./entry.yYl1-rWr.js";import f from"./Ellipsis.u9b4UIbb.js";import y from"./ComponentPlaygroundData.HIuN5YKT.js";import"./TabsHeader.FvHCmvKx.js";import"./ComponentPlaygroundProps.jLZVxO38.js";import"./ProseH4.Ma6d-kmy.js";import"./ProseCodeInline.RPXc4HVh.js";import"./Badge.CpOJ2Q-9.js";import"./MDCSlot.NOXL3bcJ.js";import"./slot.dG-SD7vS.js";import"./ProseP.DXYp0Mmt.js";import"./index.Cq93PpyY.js";import"./ComponentPlaygroundSlots.vue.pK5UF3b-.js";import"./ComponentPlaygroundTokens.vue.5rFXusj-.js";async function g(o){const t=c(o);{const{data:n}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),n=l({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),A=d(h,[["__scopeId","data-v-d3db963d"]]);export{A as default};
