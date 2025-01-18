import{S as h,i as u}from"./assets/vendor-B07T6_gy.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d=r=>`
    <li class="gallery-card"><a href="${r.largeImageURL}">
      <img class="gallery-img" src="${r.webformatURL}" alt="${r.tags}" title=""/></a>
      <div class="info">
        <p class="info-item">
          <b>Likes</b> ${r.likes}
        </p>
        <p class="info-item">
          <b>Views</b> ${r.views}
        </p>
        <p class="info-item">
          <b>Comments</b> ${r.comments}
        </p>
        <p class="info-item">
          <b>Downloads</b> ${r.downloads}
        </p>
      </div>
    </li>
  `,m=r=>{const s=new URLSearchParams({key:"48293498-9bc96457b3129dac42cff7415",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:9});return fetch(`https://pixabay.com/api/?${s}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})},f=document.querySelector(".loader"),p=()=>{f.style.display="block"},i=()=>{f.style.display="none"},c=document.querySelector(".js-search-form"),n=document.querySelector(".js-gallery"),g=new h(".gallery a"),y=r=>{r.preventDefault(),p();const s=r.currentTarget.elements.user_query.value.trim();if(s===""){i(),u.show({backgroundColor:"#ef4040",messageColor:"#fff",message:'<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM17 15.74L15.74 17 12 13.26 8.26 17 7 15.74 10.74 12 7 8.26 8.26 7 12 10.74 15.74 7 17 8.26 13.26 12 17 15.74z"/></svg> Поле має бути заповнено!',close:"true"});return}m(s).then(o=>{if(o.total===0){i(),u.show({backgroundColor:"#ef4040",messageColor:"#fff",message:'<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" ><path d="M0 0h24v24H0z" fill="none"/><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM17 15.74L15.74 17 12 13.26 8.26 17 7 15.74 10.74 12 7 8.26 8.26 7 12 10.74 15.74 7 17 8.26 13.26 12 17 15.74z"/></svg>  Sorry, there are no images matching your search query. Please try again!',close:"true",iconColor:"#fff"}),n.innerHTML="",c.reset();return}n.innerHTML="";const a=o.hits.map(e=>d(e)).join("");i(),n.innerHTML=a,g.refresh(),c.reset()}).catch(o=>{console.log(o)})};c.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
