import{r as u,j as t,T as f}from"./index-B-wAYjFk.js";import{P as g}from"./ProductCard-Bd1msDC3.js";import{u as P,P as h,F as j}from"./useProductFilterAndSort-DpjGPZae.js";import{u as C}from"./useQuery-BQEVoXP1.js";import{g as S}from"./apiProduct-DnmNEjyS.js";import{P as A}from"./Pagination-DxsR3Rql.js";import{G as a}from"./chunk-JARCRF6W-DbE-j0Ku.js";import{B as F}from"./chunk-PULVB27S-Ch_R_y_s.js";import{C as y}from"./chunk-5MKCW436-Cg2HDkOu.js";import"./index-CVf2sffD.js";import"./chunk-YQO7BFFX-DcYHKca6.js";import"./chunk-QINAG4RG-Crh5SdU4.js";import"./chunk-SPIKMR6I-DKgwk26N.js";import"./chunk-6QYXN73V-XiCQhsve.js";import"./chunk-7OLJDQMT-BuJdq_n8.js";import"./chunk-IYS4KVU2-DhSEwTdN.js";import"./chunk-GOJLRND4-Cb4C_z-b.js";import"./chunk-KC77MHL3-Bg1szFpQ.js";import"./chunk-ZHMYA64R-DG8BThpc.js";import"./chunk-65IR7CTH-D3SaTXJX.js";import"./chunk-4FCEGNGT-CqqiBJZ0.js";import"./chunk-RDF2AYID-DLmO7JGl.js";import"./chunk-OCNORRQU-CnoCSq4m.js";import"./chunk-56K2BSAJ-C_Q_2N6z.js";import"./chunk-3JHDQ75O-BEFCT4rR.js";import"./chunk-7JBTTEVG-eGrrjdQK.js";import"./chunk-3ASUQ6PA-BebN9-6c.js";const Z=()=>{const{isLoading:n,data:r}=C("products",S),{filteredProducts:o,...p}=P((r==null?void 0:r.products)||[]),[s,l]=u.useState(1);if(n)return t.jsx(a,{m:"30",templateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"6",children:Array.from({length:20},(i,d)=>t.jsx(h,{},d))});const e=6,x=Math.ceil(o.length/e),m=(s-1)*e,c=m+e;return t.jsxs(t.Fragment,{children:[t.jsx(F,{mt:"10px",children:t.jsx(y,{maxW:"6xl",children:t.jsx(j,{data:r,...p})})}),o.length===0?t.jsx(f,{textAlign:"center",fontWeight:"bolder",fontSize:"xx-large",children:"لا يوجد منتجات تطابق الفرز"}):t.jsxs(t.Fragment,{children:[t.jsx(a,{m:"30",templateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"6",children:o.slice(m,c).map(i=>t.jsx(g,{...i},i.id))}),t.jsx(A,{currentPage:s,totalPages:x,onPageChange:l})]})]})};export{Z as default};
