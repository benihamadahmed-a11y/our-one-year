const a=document.getElementById("song");
const $=s=>document.querySelector(s);

function enter(){
  $("#intro").classList.add("out");
  a.play().then(()=>{$("#musicText").textContent="Playing"}).catch(()=>{});
  burst(45);
  setTimeout(()=>document.body.classList.add("entered"),400);
}
function toggleMusic(){
  if(a.paused){a.play().catch(()=>{});$("#musicText").textContent="Pause"}
  else{a.pause();$("#musicText").textContent="Music"}
}
function scrollToLetter(){$("#letter").scrollIntoView({behavior:"smooth"})}

const messages=[
"Your smile is one of those things I could see a thousand times and still stop for it.",
"Your laugh is one of my favorite sounds in the universe. I hope you never stop giving me reasons to hear it.",
"I love hearing about your day. Even the smallest details matter to me because they are pieces of your world.",
"Your softness and warmth make me feel loved in a way I cannot properly explain.",
"I will never forget your beautiful journey — everything you've lived through helped make you the person I love today.",
"After everything, I still choose you. Not because it is always easy, but because you are worth choosing, Frederika."
];
function reason(i){
  $("#reason").textContent=messages[i];
  burst(10);
  $("#reason").animate([{transform:"scale(.96)",opacity:.4},{transform:"scale(1)",opacity:1}],{duration:450});
}
function show(t,b){
  $("#mt").textContent=t;$("#mb").textContent=b;$("#modal").classList.remove("hidden");
  burst(35);
}
function surprise(){show("For Frederika ♡","If you are reading this, you found the little world I made for you. I hope every scroll reminds you that I am grateful a random TikTok reply led me back to you. Happy first year, my love. I choose you.");}
function forever(){show("And this is my favorite part.","The website ends here. Our story doesn't. There are places we haven't visited, photos we haven't taken, hugs we haven't had, and ordinary days we haven't shared yet. I want them with you, Frederika.");}
function closeModal(){$("#modal").classList.add("hidden")}

function openLetter(){
  $("#letterOverlay").classList.add("open");
  $("#letterOverlay").setAttribute("aria-hidden","false");
  document.body.classList.add("letter-open");
  burst(60);
}
function closeLetter(){
  $("#letterOverlay").classList.remove("open");
  $("#letterOverlay").setAttribute("aria-hidden","true");
  document.body.classList.remove("letter-open");
}
$("#catStage").addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" ")openLetter()});

document.querySelectorAll(".gallery figure").forEach(fig=>{
  fig.addEventListener("click",()=>{
    const img=fig.querySelector("img");
    $("#lightboxImg").src=img.src;
    $("#lightbox").classList.remove("hidden");
    document.body.classList.add("light-open");
  });
});
function closeLightbox(e){if(e && e.target!==e.currentTarget && !e.target.matches(".lightbox button"))return;$("#lightbox").classList.add("hidden");document.body.classList.remove("light-open")}

function burst(n){
  for(let i=0;i<n;i++){
    const e=document.createElement("span");e.className="float";
    e.textContent=["♡","♥","✦","❤","✧"][Math.floor(Math.random()*5)];
    e.style.left=Math.random()*100+"vw";e.style.top=(70+Math.random()*30)+"vh";
    e.style.animationDuration=3+Math.random()*4+"s";e.style.fontSize=(10+Math.random()*18)+"px";
    document.body.appendChild(e);setTimeout(()=>e.remove(),8000);
  }
}

const revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>revealObserver.observe(el));

const progress=$("#progressBar");
addEventListener("scroll",()=>{
  const max=document.documentElement.scrollHeight-innerHeight;
  progress.style.width=(max>0?(scrollY/max)*100:0)+"%";
  if(Math.random()<.035 && !document.body.classList.contains("letter-open")){
    const h=$("#cursorHeart");h.style.left=(Math.random()*90+5)+"vw";h.style.top=(Math.random()*75+10)+"vh";
    h.classList.remove("show");void h.offsetWidth;h.classList.add("show");
  }
});

let lastX=innerWidth/2,lastY=innerHeight/2;
addEventListener("pointermove",e=>{
  lastX=e.clientX;lastY=e.clientY;
  $("#cursorHeart").style.left=e.clientX+"px";$("#cursorHeart").style.top=e.clientY+"px";
});
addEventListener("click",e=>{
  if(e.target.closest("button,.gallery figure,.cat-stage,.letter-overlay"))return;
  const s=document.createElement("span");s.className="click-heart";s.textContent="♡";
  s.style.left=e.clientX+"px";s.style.top=e.clientY+"px";document.body.appendChild(s);setTimeout(()=>s.remove(),1000);
});
addEventListener("keydown",e=>{if(e.key==="Escape"){closeModal();closeLetter();closeLightbox()}});
