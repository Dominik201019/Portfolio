'use strict';
(()=>{
 const form=document.querySelector('#portfolio-contact-form');if(!form)return;
 const dialog=document.querySelector('#contact-dialog'),opener=document.querySelector('#open-contact-dialog'),submit=form.querySelector('[type="submit"]');
 const name=form.elements.namedItem('name'),email=form.elements.namedItem('email'),message=form.elements.namedItem('message'),topic=form.elements.namedItem('topic'),counter=document.querySelector('#contact-message-count'),status=document.querySelector('#contact-delivery'),another=document.querySelector('#contact-send-another');
 const endpoint='https://formsubmit.co/ajax/druciarekdominik4@gmail.com';
 let pending=false;
 opener.disabled=false;submit.disabled=false;
 opener.addEventListener('click',()=>{dialog.showModal();document.body.classList.add('contact-dialog-open')});
 document.querySelector('#close-contact-dialog').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('close',()=>{document.body.classList.remove('contact-dialog-open');opener.focus({preventScroll:true})});
 dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
 function showStatus(kind,heading,text){status.dataset.state=kind;document.querySelector('#delivery-heading').textContent=heading;document.querySelector('#delivery-text').textContent=text;document.querySelector('#delivery-symbol').textContent=kind==='success'?'✓':'!';status.hidden=false;another.hidden=kind!=='success';if(dialog.open){status.focus({preventScroll:true});status.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth',block:'nearest'})}}
 function clearError(){name.setCustomValidity('');message.setCustomValidity('');counter.textContent=message.value.length+' / 3000';if(!pending&&status.dataset.state!=='success')status.hidden=true}
 form.addEventListener('input',clearError);form.addEventListener('change',clearError);
 form.addEventListener('submit',async event=>{
  event.preventDefault();if(pending)return;
  name.setCustomValidity(name.value.trim().length<2?'Podaj imię — przynajmniej 2 znaki.':'');message.setCustomValidity(message.value.trim().length<20?'Opisz swój pomysł w co najmniej 20 znakach.':'');if(!form.reportValidity())return;
  if(form.elements.namedItem('_honey').value)return;
  const data={name:name.value.trim(),email:email.value.trim(),temat:topic.value,message:message.value.trim(),_subject:'Portfolio — '+topic.value,_template:'table',_honey:''};
  pending=true;status.hidden=true;submit.querySelector('span').textContent='Wysyłanie…';submit.disabled=true;form.setAttribute('aria-busy','true');
  const controls=[...form.querySelectorAll('input,select,textarea')];controls.forEach(el=>el.disabled=true);
  const controller=new AbortController(),timeout=setTimeout(()=>controller.abort(),25000);
  try{
   const response=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(data),signal:controller.signal,credentials:'omit',referrerPolicy:'strict-origin-when-cross-origin'});
   const result=await response.json();
   if(!response.ok)throw new Error('service');
   if(result.success!==true&&result.success!=='true'){
    if(/activat|confirm.*email|verify/i.test(String(result.message||''))){showStatus('activation','Formularz czeka na aktywację.','Właściciel strony musi potwierdzić adres odbiorcy w wiadomości od FormSubmit. Twoja wiadomość nie ma jeszcze potwierdzonej wysyłki. Możesz napisać bezpośrednio na druciarekdominik4@gmail.com.');return}
    throw new Error('service');
   }
   form.hidden=true;showStatus('success','Dziękuję za wiadomość.','Twoje zapytanie zostało przyjęte przez usługę wysyłki. Odpowiem na podany adres e-mail.');
  }catch(error){showStatus('error','Nie udało się potwierdzić wysyłki.','Wpisane informacje pozostają w formularzu. Sprawdź połączenie i spróbuj ponownie za chwilę lub napisz bezpośrednio na druciarekdominik4@gmail.com.');}
  finally{clearTimeout(timeout);pending=false;controls.forEach(el=>el.disabled=false);submit.disabled=false;submit.querySelector('span').textContent='Wyślij wiadomość';form.removeAttribute('aria-busy')}
 });
 another.addEventListener('click',()=>{form.reset();form.hidden=false;status.hidden=true;counter.textContent='0 / 3000';name.focus()});
})();
