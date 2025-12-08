// script.js - small interactions
document.addEventListener("DOMContentLoaded", function(){
  const form = document.querySelector("#contactForm");
  if(form){
    form.addEventListener("submit", function(e){
      // Let Netlify handle posting; provide quick UI feedback
      const btn = form.querySelector("button[type=submit]");
      btn.disabled = true;
      btn.textContent = "Sending...";
      setTimeout(()=>{btn.textContent="Message sent — thanks!";}, 1200);
    });
  }
});
