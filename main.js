(()=>{"use strict";function e(e){switch(e.getAttribute("title")){case"Visa":e.classList.remove("visa"),e.classList.add("visa_gray");break;case"Mastercard":e.classList.remove("master"),e.classList.add("master_gray");break;case"American_Express":e.classList.remove("amex"),e.classList.add("amex_gray");break;case"Discover":e.classList.remove("discover"),e.classList.add("discover_gray");break;case"JCB":e.classList.remove("jcb"),e.classList.add("jcb_gray");break;case"Diners_Club":e.classList.remove("diners_club"),e.classList.add("diners_club_gray");break;case"Mir":e.classList.remove("mir"),e.classList.add("mir_gray")}}function s(e,s){const a=document.getElementById("result_validation");a.classList.contains("hided")&&a.classList.remove("hided"),a.classList.contains("validNumber")&&a.classList.remove("validNumber"),a.classList.contains("invalidNumber")&&a.classList.remove("invalidNumber"),a.querySelector("p").innerHTML=s,e?(a.classList.add("validNumber"),a.querySelector("div").innerHTML="card-number is OK!"):(a.classList.add("invalidNumber"),a.querySelector("div").innerHTML="INVALID card-number!!!")}function a(e){if("undefined"!=typeof window){const s=document.querySelectorAll(".card");for(let a=0;a<s.length;a++)if(s[a].getAttribute("title")===e)return s[a]}}function t(a,t,r){void 0!==a&&e(a),function(e){const s=e.replace(/\D/g,"");let a=0,t=!1;for(let e=s.length-1;e>=0;e--){let r=parseInt(s.charAt(e),10);t&&(r*=2)>9&&(r-=9),a+=r,t=!t}return a%10==0}(t)?s(!0,t):s(!1,t),r.value=""}document.addEventListener("DOMContentLoaded",(()=>{const s=document.getElementById("card_number");s.value="";const r=document.getElementById("submitform");let i,c,d;document.getElementById("form").addEventListener("submit",(e=>{e.preventDefault()})),s.addEventListener("input",(()=>{i=s.value,/[^0-9]/gm.test(i)&&(i=i.replace(/[a-zа-яё]/gi,"")),c=function(e){const s={Visa:/^4[0-9]\d+$/,Mastercard:/^5[1-5][0-9]\d+$/,American_Express:/^3[47][0-9]\d+$/,Diners_Club:/^3(?:0[0-5]|[68][0-9])[0-9]\d+$/,Discover:/^6(011|5[0-9]{2})[0-9]\d+$/,JCB:/^(2131|1800|35)\d+$/,Mir:/^(2200|2204)\d+$/};for(const a in s)if(s[a].test(e))return a}(Number(i)),void 0!==d&&e(d),void 0!==c&&(function(e){switch(e.getAttribute("title")){case"Visa":e.classList.remove("visa_gray"),e.classList.add("visa");break;case"Mastercard":e.classList.remove("master_gray"),e.classList.add("master");break;case"American_Express":e.classList.remove("amex_gray"),e.classList.add("amex");break;case"Discover":e.classList.remove("discover_gray"),e.classList.add("discover");break;case"JCB":e.classList.remove("jcb_gray"),e.classList.add("jcb");break;case"Diners_Club":e.classList.remove("diners_club_gray"),e.classList.add("diners_club");break;case"Mir":e.classList.remove("mir_gray"),e.classList.add("mir")}}(a(c)),d=a(c))})),s.addEventListener("keyup",(e=>{"Enter"===e.key&&t(d,i,s)})),r.addEventListener("click",(()=>{r.classList.add("btn-success"),t(d,i,s)}))}))})();