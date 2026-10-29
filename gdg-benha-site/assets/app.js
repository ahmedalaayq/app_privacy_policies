(function(){
  var d=document.documentElement;
  function get(){try{var s=localStorage.getItem('gdg-lang');if(s)return s}catch(e){}return null}
  function put(l){try{localStorage.setItem('gdg-lang',l)}catch(e){}}
  var l=(location.hash==='#ar'||location.hash==='#en')?location.hash.slice(1):(get()||(((navigator.language||'').toLowerCase().indexOf('ar')===0)?'ar':'en'));
  function apply(x){
    l=x;d.lang=x;d.dir=x==='ar'?'rtl':'ltr';
    var b=document.getElementById('lang');if(b)b.textContent=x==='ar'?'English':'العربية';
    var t=document.documentElement.getAttribute('data-t'+x);if(t)document.title=t;
    var F=window.GDG_FORM;if(F)F(x);
  }
  window.addEventListener('DOMContentLoaded',function(){
    apply(l);
    var b=document.getElementById('lang');
    if(b)b.addEventListener('click',function(){var n=l==='ar'?'en':'ar';put(n);apply(n)});
  });
  /* delete-account form */
  var T={en:{n:"Full name",e:"Registered email",p:"Phone number (optional)",r:"Reason (optional)",c:"I understand deletion is permanent and cannot be undone.",s:"Send request",er:"Please enter your name, a valid email, and tick the confirmation box.",ok:"If your email app did not open, write to benhagdg@gmail.com with the subject “Delete my account”."},
         ar:{n:"الاسم الكامل",e:"البريد المسجّل في التطبيق",p:"رقم الهاتف (اختياري)",r:"السبب (اختياري)",c:"أفهم أن الحذف نهائي ولا يمكن التراجع عنه.",s:"إرسال الطلب",er:"من فضلك اكتب اسمك وبريدًا صحيحًا وأكّد الموافقة.",ok:"لو تطبيق الإيميل مفتحش، ابعت على benhagdg@gmail.com بعنوان “Delete my account”."}};
  function g(i){return document.getElementById(i)}
  window.addEventListener('DOMContentLoaded',function(){
    var f=g('f');if(!f)return;
    window.GDG_FORM=function(x){var t=T[x];['n','e','p','r','c'].forEach(function(k){g('l'+k).textContent=t[k]});g('sb').textContent=t.s;g('er').textContent=t.er;g('ok').textContent=t.ok;apply2=x};
    var apply2=l;window.GDG_FORM(l);
    f.addEventListener('submit',function(ev){
      ev.preventDefault();
      var n=g('n').value.trim(),e=g('e').value.trim();
      if(!n||!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e)||!g('c').checked){g('er').hidden=false;return}
      g('er').hidden=true;g('ok').hidden=false;
      var body="Account deletion request\n\nFull name: "+n+"\nRegistered email: "+e+"\nPhone: "+(g('p').value.trim()||"-")+"\nReason: "+(g('r').value.trim()||"-")+"\n\nI confirm I want my account and personal data permanently deleted.";
      window.location.href="mailto:benhagdg@gmail.com?subject="+encodeURIComponent("Delete my account")+"&body="+encodeURIComponent(body);
    });
  });
})();
