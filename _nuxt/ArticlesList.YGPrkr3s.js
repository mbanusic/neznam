import k from"./ArticlesListItem.RpQw-VIc.js";import w from"./ProseA.e1km87Nk.js";import v from"./ProseCodeInline.T4ov1R1a.js";import{u as I}from"./asyncData.SDCMFJHU.js";import{q as g}from"./query.A67vaBL-.js";import{d as A,X as C,H as S,I as r,b as a,c as n,e as o,g as i,F as b,Y as B,C as e,w as d,p as L,i as N,Z as V,W as q,k as F}from"./entry.v7aO5jNS.js";import"./preview.ZhkudX81.js";import"./date.3uOv5BcS.js";const P=t=>(L("data-v-0cbe233e"),t=t(),N(),t),T={key:0,class:"articles-list"},Y={class:"featured"},D={class:"layout"},E={key:1,class:"tour"},H=P(()=>o("p",null,"Seems like there are no articles yet.",-1)),W=A({__name:"ArticlesList",props:{path:{type:String,default:"articles"}},async setup(t){let s,l;const u=t,{data:m}=([s,l]=C(async()=>I("articles",async()=>await g(V(u.path)).sort({date:-1}).find())),s=await s,l(),s),c=S(()=>m.value||[]);return(X,Z)=>{var p;const _=k,f=w,h=v;return(p=r(c))!=null&&p.length?(a(),n("div",T,[o("div",Y,[i(_,{article:r(c)[0],featured:!0},null,8,["article"])]),o("div",D,[(a(!0),n(b,null,B(r(c).slice(1),(y,x)=>(a(),q(_,{key:x,article:y},null,8,["article"]))),128))])])):(a(),n("div",E,[H,o("p",null,[e(" You can start by "),i(f,{href:"https://alpine.nuxt.space/articles/write-articles"},{default:d(()=>[e("creating")]),_:1}),e(" one in the "),i(h,null,{default:d(()=>[e("articles")]),_:1}),e(" folder. ")])]))}}}),R=F(W,[["__scopeId","data-v-0cbe233e"]]);export{R as default};