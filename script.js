(function(){
  var hero=document.getElementById('top'),slides=hero.querySelectorAll('.slide'),dots=hero.querySelector('.dots'),i=0,t;
  slides.forEach(function(s,n){var b=document.createElement('button');b.setAttribute('aria-label','Slide '+(n+1));b.onclick=function(){go(n);};dots.appendChild(b);});
  function go(n){
    i=(n+slides.length)%slides.length;
    slides.forEach(function(s,k){s.classList.toggle('active',k===i);});
    dots.querySelectorAll('button').forEach(function(d,k){d.classList.toggle('on',k===i);});
    clearInterval(t);t=setInterval(function(){go(i+1);},6500);
  }
  hero.querySelector('.prev').onclick=function(){go(i-1);};
  hero.querySelector('.next').onclick=function(){go(i+1);};
  var x0=null;
  hero.addEventListener('touchstart',function(e){x0=e.touches[0].clientX;},{passive:true});
  hero.addEventListener('touchend',function(e){if(x0===null)return;var d=e.changedTouches[0].clientX-x0;if(Math.abs(d)>40)go(d<0?i+1:i-1);x0=null;});
  go(0);
})();
document.getElementById('f').addEventListener('submit',function(e){
  e.preventDefault();
  var d=new FormData(e.target);
  var body='Name: '+d.get('name')+'\nCompany: '+d.get('company')+'\nPhone: '+d.get('phone')+'\nEmail: '+d.get('email')+'\n\n'+d.get('message');
  location.href='mailto:info@altaifire.com?subject='+encodeURIComponent(d.get('topic'))+'&body='+encodeURIComponent(body);
  document.getElementById('msg').textContent='Opening your email app to send the enquiry…';
});