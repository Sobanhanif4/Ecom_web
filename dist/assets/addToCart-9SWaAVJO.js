import{g as d,s as P,u as C,p as q}from"./showToast-VeCZjpR4.js";const f=(r,e)=>{let c=d().find(u=>u.id===r),n=1;return c&&(n=c.quantity,e=c.price),{quantity:n,price:e}},y=()=>{let r=document.querySelector(".productSubTotal"),e=document.querySelector(".productFinalTotal"),n=d().reduce((u,l)=>{let t=parseInt(l.price)||0;return u+t},0);r.textContent=`PKR${n}`,e.textContent=`PKR${n+50}`},g=(r,e,o,c)=>{const n=document.querySelector(`#card${e}`),u=n.querySelector(".productQuantity"),l=n.querySelector(".productPrice");let t=1,a=0,i=d(),m=i.find(s=>s.id===e);m?(t=m.quantity,a=m.price):(a=c,c=c),r.target.className==="cartIncrement"&&(t<o?t+=1:t===o&&(t=o,a=c*o)),r.target.className==="cartDecrement"&&t>1&&(t-=1),a=c*t,a=Number(a.toFixed(2));let p={id:e,quantity:t,price:a};p=i.map(s=>s.id===e?p:s),localStorage.setItem("cartProductLS",JSON.stringify(p)),u.innerText=t,l.innerText=a,y()},x=r=>{let e=d();e=e.filter(c=>c.id!=r),localStorage.setItem("cartProductLS",JSON.stringify(e));let o=document.getElementById(`card${r}`);o&&(o.remove(),P("delete",r)),C(e)};let T=d(),S=q.filter(r=>T.some(e=>e.id===r.id));console.log(S);const E=document.querySelector("#productCartContainer"),L=document.querySelector("#productCartTemplate"),N=()=>{S.forEach(r=>{const{category:e,id:o,image:c,name:n,stock:u,price:l}=r;let t=document.importNode(L.content,!0);const a=f(o,l);t.querySelector("#cardValue").setAttribute("id",`card${o}`),t.querySelector(".category").textContent=e,t.querySelector(".productImage").src=c,t.querySelector(".productName").textContent=n,t.querySelector(".productQuantity").textContent=a.quantity,t.querySelector(".productPrice").textContent=a.price,t.querySelector(".stockElement").addEventListener("click",i=>{g(i,o,u,l)}),t.querySelector(".remove-to-cart-button").addEventListener("click",()=>x(o)),E.appendChild(t)})};N();y();
