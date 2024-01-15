import{S as v,i,a as S}from"./assets/vendor-bad0427b.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const d=document.querySelector(".form"),g=document.querySelector(".gallery"),p=document.querySelector(".loader"),n=document.querySelector(".btn-load-more"),w=new v(".gallery a",{captionsData:"alt",captionDelay:250}),u=40;let l=1,m="";d.addEventListener("submit",k);n.addEventListener("click",q);async function k(s){s.preventDefault(),l=1,g.innerHTML="",m=d.search.value.trim(),n.classList.add("hide");const r=await h();r.hits.length===0?i.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#987fbb"}):r.hits.length<u?i.error({position:"topRight",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#987fbb"}):n.classList.remove("hide"),d.reset(),f(r)}async function q(){l+=1;const s=await h();l>=Math.ceil(s.totalHits/u)&&(n.classList.add("hide"),i.error({position:"topRight",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#987fbb"})),f(s),$()}async function h(){p.classList.remove("hide");try{return(await S.get("https://pixabay.com/api/",{params:{key:"41563330-08ed4e1341b4edecabdae7272",q:m,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:u,page:l}})).data}catch(s){console.log(s.message),i.error({position:"topRight",message:"Sorry, service unavailable.",backgroundColor:"#987fbb"})}finally{p.classList.add("hide")}}function f(s){const r=s.hits.reduce((c,{webformatURL:a,largeImageURL:e,tags:t,likes:o,views:y,comments:b,downloads:L})=>c+`<li class='gallery-item'>
              <a class='gallery-link' href='${e}'>
                <img
                    class='gallery-image'
                    src='${a}'
                    alt='${t}'
                    width='360'
                    height='200'
                    />
              </a>
              <p class='gallery-tags'>Tags: ${t}</p>
              <ul class='gallery-statistic'>
                  <li><p class='statistic'>💗 Likes<span>${o}</span></p></li>
                  <li><p class='statistic'>👁️ Views<span>${y}</span></p></li>
                  <li><p class='statistic'>💬 Comments<span>${b}</span></p></li>
                  <li><p class='statistic'>💌 Downloads<span>${L}</span></p></li>
              </ul>
            </li>`,"");g.insertAdjacentHTML("beforeend",r),w.refresh()}function $(){const r=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
