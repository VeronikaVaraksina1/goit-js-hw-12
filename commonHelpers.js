import{S as v,i as p,a as w}from"./assets/vendor-bad0427b.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const d=document.querySelector(".form"),m=document.querySelector(".gallery"),c=document.querySelector(".loader"),r=document.querySelector(".more-results"),S=new v(".gallery a",{captionsData:"alt",captionDelay:250}),u=40;let i=1,f="";d.addEventListener("submit",q);r.addEventListener("click",$);async function q(s){s.preventDefault(),r.classList.add("hide"),m.innerHTML="",i=1,f=d.search.value.trim();const a=await h();a.hits.length===0?p.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#fff"}):g(a)}async function $(){r.classList.add("hide");const s=await h();c.classList.add("hide"),r.classList.remove("hide"),i>=Math.ceil(s.totalHits/u)&&(r.classList.add("hide"),p.error({position:"topRight",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#fff"})),g(s),k()}async function h(){c.classList.remove("hide"),i+=1;try{return(await w.get("https://pixabay.com/api/",{params:{key:"41563330-08ed4e1341b4edecabdae7272",q:f,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:u,page:i}})).data}catch(s){console.log(s.message)}finally{c.classList.add("hide"),d.reset()}}async function g(s){const a=s.hits.reduce((n,{webformatURL:l,largeImageURL:e,tags:t,likes:o,views:y,comments:L,downloads:b})=>n+`<li class='gallery-item'>
              <a class='gallery-link' href='${e}'>
                <img
                    class='gallery-image'
                    src='${l}'
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
            </li>`,"");m.insertAdjacentHTML("beforeend",a),S.refresh(),s.hits.length===0||i>=Math.ceil(s.totalHits/u)?r.classList.add("hide"):r.classList.remove("hide")}function k(){const a=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
