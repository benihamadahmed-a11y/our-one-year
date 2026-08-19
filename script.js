const song=document.getElementById("song");
const musicText=document.getElementById("musicText");
function toggleMusic(){
  if(song.paused){song.play().then(()=>musicText.textContent="Pause our song").catch(()=>musicText.textContent="Add assets/song.mp3");}
  else{song.pause();musicText.textContent="Play our song";}
}
function openSurprise(){
  document.getElementById("modalText").textContent="If you are reading this, then you have officially survived one whole year of my love, my nonsense, my messages and everything in between. Thank you for being you. I would choose you again.";
  document.getElementById("modal").classList.remove("hidden");
  burst();
}
function openFuture(){
  document.getElementById("modalText").textContent="This button is not a prediction. It is a promise from me: whatever comes next, I want to keep making beautiful memories with you. One chapter finished. So many more waiting.";
  document.getElementById("modal").classList.remove("hidden"); burst();
}
function closeModal(){document.getElementById("modal").classList.add("hidden")}
function reason(btn){
  const messages={
    "Her smile":"Because somehow one smile from you can make a terrible day feel a little less terrible.",
    "Her heart":"Because the way you care about the people you love tells me what kind of beautiful person you are.",
    "The way she cares":"Because even the smallest things you do can stay in my head for hours.",
    "Our stupid jokes":"Because nobody else can make me laugh at the same completely stupid things the way you do.",
    "How she makes ordinary days special":"Because sometimes nothing special happens — and having you there is still enough.",
    "Because she's simply her":"Honestly? I could write a thousand reasons and still not explain the whole feeling."
  };
  document.getElementById("reasonOutput").textContent=messages[btn.textContent]||"I love you. That's the reason.";
}
function burst(){
  for(let i=0;i<28;i++){
    const h=document.createElement("div"); h.className="float-heart"; h.textContent=["♡","♥","❤","✨"][Math.floor(Math.random()*4)];
    h.style.left=Math.random()*100+"vw"; h.style.top=(70+Math.random()*30)+"vh"; h.style.animationDuration=(3+Math.random()*3)+"s";
    document.getElementById("hearts").appendChild(h); setTimeout(()=>h.remove(),6500);
  }
}
setInterval(()=>{ if(Math.random()<.45){const h=document.createElement("div");h.className="float-heart";h.textContent="♡";h.style.left=Math.random()*100+"vw";h.style.top="100vh";h.style.animationDuration=(5+Math.random()*4)+"s";document.getElementById("hearts").appendChild(h);setTimeout(()=>h.remove(),10000)}},900);
