(()=>{"use strict";function t(){const t=document.createElement("div");return t.classList.add("main"),t.textContent="Hello from Home!",t}function e(){const t=document.createElement("div");return t.classList.add("main"),t.textContent="Hello from Menu!",t}function n(){const t=document.createElement("div");return t.classList.add("main"),t.textContent="Hello from Contact!",t}!function(){const c=document.createElement("div");c.classList.add("header");const d=document.createElement("BUTTON");d.innerHTML="Home",d.addEventListener("click",(()=>o(t)));const a=document.createElement("button");a.textContent="Menu",a.addEventListener("click",(()=>o(e)));const l=document.createElement("button");l.textContent="Contact",l.addEventListener("click",(()=>o(n))),c.append(d,a,l),document.body.prepend(c)}();const c=document.querySelector(".content");function o(t){c.lastElementChild&&c.removeChild(c.lastElementChild),c.append(t())}})();