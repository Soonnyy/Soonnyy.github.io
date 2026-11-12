(function(){
  var root=document.documentElement;
  function set(l){root.setAttribute('data-lang',l);root.lang=l==='zh'?'zh-CN':'en';
    document.querySelectorAll('.langs button').forEach(function(b){b.setAttribute('aria-pressed',String(b.dataset.l===l));});
    try{localStorage.setItem('lang',l)}catch(e){}}
  var start=location.hash==='#en'?'en':(location.hash==='#zh'?'zh':null);
  if(!start){try{start=localStorage.getItem('lang')}catch(e){}}
  set(start==='en'?'en':'zh');
  document.querySelectorAll('.langs button').forEach(function(b){b.addEventListener('click',function(){set(b.dataset.l)})});
})();
