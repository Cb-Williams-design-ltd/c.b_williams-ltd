const form=document.getElementById('contactForm'),menu=document.getElementById('menuBtn'),nav=document.getElementById('siteNav');
document.getElementById('year').textContent=new Date().getFullYear();
form.addEventListener('submit',event=>{event.preventDefault();const data=new FormData(form);const subject=encodeURIComponent(`C.B. Williams Ltd enquiry — ${data.get('service')}`);const body=encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\nService: ${data.get('service')}\n\nMessage:\n${data.get('message')}`);window.location.href=`mailto:c.b_williams.ltd@proton.me?subject=${subject}&body=${body}`});
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));menu.setAttribute('aria-label',open?'Open navigation':'Close navigation');nav.dataset.open=String(!open)});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');nav.dataset.open='false'}));

document.querySelectorAll('[data-service]').forEach(link=>link.addEventListener('click',()=>{form.elements.service.value=link.dataset.service}));
