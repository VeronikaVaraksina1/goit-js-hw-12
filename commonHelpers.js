import{S as v,i as u,a as S}from"./assets/vendor-bad0427b.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const c=document.querySelector(".form"),m=document.querySelector(".gallery"),d=document.querySelector(".loader"),a=document.querySelector(".more-results"),w=new v(".gallery a",{captionsData:"alt",captionDelay:250}),p=40;let n=1,g="";c.addEventListener("submit",k);a.addEventListener("click",q);async function k(s){s.preventDefault(),n=1,a.classList.add("hide"),m.innerHTML="",g=c.search.value.trim();const r=await f();r.hits.length===0&&u.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#fff"}),c.reset(),h(r),a.classList.remove("hide")}async function q(){n+=1,a.classList.add("hide");const s=await f();d.classList.add("hide"),a.classList.remove("hide"),n>=Math.ceil(s.totalHits/p)?(a.classList.add("hide"),u.error({position:"topRight",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#813ce0"})):a.classList.remove("hide"),h(s),$()}async function f(){d.classList.remove("hide");try{return(await S.get("https://pixabay.com/api/",{params:{key:"41563330-08ed4e1341b4edecabdae7272",q:g,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:p,page:n}})).data}catch(s){console.log(s.message),u.error({position:"topRight",message:"Sorry, service unavailable.",backgroundColor:"#fff"})}finally{d.classList.add("hide")}}async function h(s){const r=s.hits.reduce((l,{webformatURL:i,largeImageURL:e,tags:t,likes:o,views:y,comments:L,downloads:b})=>l+`<li class='gallery-item'>
              <a class='gallery-link' href='${e}'>
                <img
                    class='gallery-image'
                    src='${i}'
                    alt='${t}'
                    width='360'
                    height='200'
                    />
              </a>
              <p class='gallery-tags'>Tags: ${t}</p>
              <ul class='gallery-statistic'>
                  <li><p class='statistic'>💗 Likes<span>${o}</span></p></li>
                  <li><p class='statistic'>👁️ Views<span>${y}</span></p></li>
                  <li><p class='statistic'>💬 Comments<span>${L}</span></p></li>
                  <li><p class='statistic'>💌 Downloads<span>${b}</span></p></li>
              </ul>
            </li>`,"");m.insertAdjacentHTML("beforeend",r),w.refresh()}function $(){const r=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
