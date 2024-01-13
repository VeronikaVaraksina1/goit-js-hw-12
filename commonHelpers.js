import{S as v,i as p,a as w}from"./assets/vendor-bad0427b.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const d=document.querySelector(".form"),m=document.querySelector(".gallery"),c=document.querySelector(".loader"),o=document.querySelector(".more-results"),S=new v(".gallery a",{captionsData:"alt",captionDelay:250}),u=40;let i=1,f="";d.addEventListener("submit",q);o.addEventListener("click",$);async function q(s){s.preventDefault(),o.classList.add("hide"),m.innerHTML="",i=1,f=d.search.value.trim();const a=await g();a.hits.length===0&&p.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#fff"}),h(a)}async function $(){const s=await g();c.classList.add("hide"),i>=Math.ceil(s.totalHits/u)&&(o.classList.add("hide"),p.error({position:"topRight",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#fff"})),h(s),k()}async function g(){c.classList.remove("hide"),i+=1;try{return(await w.get("https://pixabay.com/api/",{params:{key:"41563330-08ed4e1341b4edecabdae7272",q:f,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:u,page:i}})).data}catch(s){console.log(s.message)}finally{c.classList.add("hide"),d.reset()}}async function h(s){const a=s.hits.reduce((l,{webformatURL:n,largeImageURL:e,tags:t,likes:r,views:y,comments:L,downloads:b})=>l+`<li class='gallery-item'>
              <a class='gallery-link' href='${e}'>
                <img
                    class='gallery-image'
                    src='${n}'
                    alt='${t}'
                    width='360'
                    height='200'
                    />
              </a>
              <p class='gallery-tags'>Tags: ${t}</p>
              <ul class='gallery-statistic'>
                  <li><p class='statistic'>💗 Likes<span>${r}</span></p></li>
                  <li><p class='statistic'>👁️ Views<span>${y}</span></p></li>
                  <li><p class='statistic'>💬 Comments<span>${L}</span></p></li>
                  <li><p class='statistic'>💌 Downloads<span>${b}</span></p></li>
              </ul>
            </li>`,"");m.insertAdjacentHTML("beforeend",a),S.refresh(),s.hits.length===0||i>=Math.ceil(s.totalHits/u)?o.classList.add("hide"):o.classList.remove("hide")}function k(){const a=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
