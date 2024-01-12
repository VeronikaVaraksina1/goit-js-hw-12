import{S as L,i as b,a as v}from"./assets/vendor-bad0427b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=l(e);fetch(e.href,s)}})();const c=document.querySelector(".form"),w=document.querySelector(".gallery"),r=document.querySelector(".loader"),p=document.querySelector(".more-results"),S=new L(".gallery a",{captionsData:"alt",captionDelay:250}),m=40;let n=1;const $=Math.ceil(500/m);let g="";c.addEventListener("submit",async a=>{a.preventDefault(),g=c.search.value.trim();try{r.classList.remove("hide");const t=await d();u(t)}catch(t){console.log(t.message)}finally{r.classList.add("hide"),console.log()}p.addEventListener("click",async()=>{try{r.classList.remove("hide");const t=await d();u(t),n>$&&b.error({position:"topRight",message:"We're sorry, there are no more posts to load"}),r.classList.add("hide")}catch(t){console.log(t.message)}finally{r.classList.add("hide"),console.log()}})});async function d(){return n+=1,(await v.get("https://pixabay.com/api/",{params:{key:"41563330-08ed4e1341b4edecabdae7272",q:g,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:m,page:n}})).data}async function u(a){const t=a.hits.reduce((l,{webformatURL:i,largeImageURL:e,tags:s,likes:o,views:f,comments:y,downloads:h})=>l+`<li class='gallery-item'>
              <a class='gallery-link' href='${e}'>
                <img
                    class='gallery-image'
                    src='${i}'
                    alt='${s}'
                    width='360'
                    height='200'
                    />
              </a>
              <ul class='gallery-statistic'>
                  <li><p class='statistic'>💗 Likes<span>${o}</span></p></li>
                  <li><p class='statistic'>👁️ Views<span>${f}</span></p></li>
                  <li><p class='statistic'>💬 Comments<span>${y}</span></p></li>
                  <li><p class='statistic'>💌 Downloads<span>${h}</span></p></li>
              </ul>
            </li>`,"");w.insertAdjacentHTML("beforeend",t),S.refresh(),p.classList.remove("hide")}
//# sourceMappingURL=commonHelpers.js.map
