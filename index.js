import{S as u,i as o}from"./assets/vendor-B07T6_gy.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const d="https://pixabay.com/api/?",g=t=>{const l=new URLSearchParams({key:"49462102-62c5bd388bb9085ad52d727ed",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${d}${l}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})},y=t=>`<li class="gallery-item">
  <a class="gallery-link" href="${t.largeImageURL}">
    <img
      class="gallery-img"
      src="${t.webformatURL}"
      alt="${t.tags}"
      loading="lazy"
    />
  </a>
  <ul class="gallery-info">
    <li class="gallery-info-item">
      <p class="gallery-info-title">Likes</p>
      <p class="gallery-info-text">${t.likes}</p>
    </li>
    <li class="gallery-info-item">
      <p class="gallery-info-title">Views</p>
      <p class="gallery-info-text">${t.views}</p>
    </li>
    <li class="gallery-info-item">
      <p class="gallery-info-title">Comments</p>
      <p class="gallery-info-text">${t.comments}</p>
    </li>
    <li class="gallery-info-item">
      <p class="gallery-info-title">Downloads</p>
      <p class="gallery-info-text">${t.downloads}</p>
    </li>
  </ul>
</li>`,c=document.querySelector(".form-search"),m=document.querySelector(".gallery"),n=document.querySelector(".loader"),f=new u(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt",overlayOpacity:1}),p=t=>{t.preventDefault();const l=c.elements["search-text"].value.trim();if(l===""){o.warning({message:"Please enter a search query.",position:"bottomRight"});return}n.classList.remove("is-hidden"),g(l).then(r=>{if(n.classList.add("is-hidden"),!r.hits||r.hits.length===0){o.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"}),m.innerHTML="",c.reset();return}const i=r.hits.map(e=>y(e)).join("");m.innerHTML=i,f.refresh()}).catch(r=>{n.classList.add("is-hidden"),o.error({message:"An error occurred. Please try again later.",position:"bottomRight"}),console.log(r)})};c.addEventListener("submit",p);
//# sourceMappingURL=index.js.map
