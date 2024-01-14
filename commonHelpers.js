import{S as v,i as l,a as S}from"./assets/vendor-bad0427b.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const d=document.querySelector(".form"),p=document.querySelector(".gallery"),u=document.querySelector(".loader"),a=document.querySelector(".btn-load-more"),w=new v(".gallery a",{captionsData:"alt",captionDelay:250}),m=40;let n=1,g="";d.addEventListener("submit",k);a.addEventListener("click",q);async function k(s){s.preventDefault(),n=1,a.classList.add("hide"),p.innerHTML="",g=d.search.value.trim();const r=await h();r.hits.length===0?l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#987fbb"}):r.hits.length<m?(a.classList.add("hide"),l.error({position:"topRight",message:"We&#8217;re sorry, but you&#8217;ve reached the end of search results.",backgroundColor:"#987fbb"})):a.classList.remove("hide"),d.reset(),f(r)}async function q(){n+=1,a.classList.add("hide");const s=await h();u.classList.add("hide"),a.classList.remove("hide"),n>=Math.ceil(s.totalHits/m)?(a.classList.add("hide"),l.error({position:"topRight",message:"We&#8217;re sorry, but you&#8217;ve reached the end of search results.",backgroundColor:"#987fbb"})):a.classList.remove("hide"),f(s),$()}async function h(){u.classList.remove("hide");try{return(await S.get("https://pixabay.com/api/",{params:{key:"41563330-08ed4e1341b4edecabdae7272",q:g,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:m,page:n}})).data}catch(s){console.log(s.message),l.error({position:"topRight",message:"Sorry, service unavailable.",backgroundColor:"#fff"})}finally{u.classList.add("hide")}}function f(s){const r=s.hits.reduce((c,{webformatURL:i,largeImageURL:e,tags:t,likes:o,views:y,comments:b,downloads:L})=>c+`<li class='gallery-item'>
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
                  <li><p class='statistic'>💬 Comments<span>${b}</span></p></li>
                  <li><p class='statistic'>💌 Downloads<span>${L}</span></p></li>
              </ul>
            </li>`,"");p.insertAdjacentHTML("beforeend",r),w.refresh()}function $(){const r=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
