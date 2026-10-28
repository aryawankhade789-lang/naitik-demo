(function(){
var root=document.documentElement,t=document.getElementById("theme"),m=document.getElementById("burger"),n=document.getElementById("nav");
try{var s=localStorage.getItem("theme");if(s)root.setAttribute("data-theme",s)}catch(e){}
t.addEventListener("click",function(){var dark=getComputedStyle(root).getPropertyValue("--bg").trim()==="#071426";var v=dark?"light":"dark";root.setAttribute("data-theme",v);try{localStorage.setItem("theme",v)}catch(e){}});
m.addEventListener("click",function(){var o=n.classList.toggle("open");m.setAttribute("aria-expanded",o)});
var f=document.getElementById("ask-form"),st=document.getElementById("ask-status");
f.addEventListener("submit",function(e){e.preventDefault();
var name=document.getElementById("aq-name").value.trim(),q=document.getElementById("aq-question").value.trim();
if(!name||!q){st.textContent="Please enter your name and question.";return}
var msg="Hello, I am "+name+". "+q;
window.open("https://wa.me/919850819799?text="+encodeURIComponent(msg),"_blank","noopener");
st.textContent="Opening WhatsApp…"});
})();