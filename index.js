import{S as y,i}from"./assets/vendor-B07T6_gy.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="https://pixabay.com/api/?",g=l=>{const o=new URLSearchParams({key:"49462102-62c5bd388bb9085ad52d727ed",q:l,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${p}${o}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})},m=document.querySelector(".gallery"),u=document.querySelector(".loader"),d=l=>{m.innerHTML=l.map(({webformatURL:o,largeImageURL:t,tags:a,likes:e,views:r,comments:s,downloads:f})=>`<li class="gallery-item">
      <a class="gallery-link" href="${t}">
        <img
          class="gallery-img"
          src="${o}"
          alt="${a}"
          load="lazy"
        />
      </a>
      <ul class="gallery-info">
        <li class="gallery-info-item">
          <p class="gallery-info-title">Likes</p>
          <p class="gallery-info-text">${e}</p>
        </li>
        <li class="gallery-info-item">
          <p class="gallery-info-title">Views</p>
          <p class="gallery-info-text">${r}</p>
        </li>
        <li class="gallery-info-item">
          <p class="gallery-info-title">Comments</p>
          <p class="gallery-info-text">${s}</p>
        </li>
        <li class="gallery-info-item">
          <p class="gallery-info-title">Downloads</p>
          <p class="gallery-info-text">${f}</p>
        </li>
      </ul>
    </li>`).join("")},h=()=>m.innerHTML="",L=()=>u.classList.add("loader"),c=()=>u.classList.remove("loader"),n=document.querySelector(".form-search"),b=new y(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt",overlayOpacity:1}),P=l=>{l.preventDefault();const o=n.elements["search-text"].value.trim();if(o===""){i.warning({message:"Please enter a search query.",position:"bottomRight"});return}h(),L(),g(o).then(t=>{if(c(),!t.hits||t.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"}),n.reset();return}d(t.hits),b.refresh()}).catch(t=>{c(),i.error({message:"An error occurred. Please try again later.",position:"bottomRight"}),console.log(t)})};n.addEventListener("submit",P);
//# sourceMappingURL=index.js.map
