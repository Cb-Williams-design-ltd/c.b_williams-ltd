const form=document.getElementById('contactForm');
form.addEventListener('submit',e=>{
  e.preventDefault();
  const data=new FormData(form);
  const subject=encodeURIComponent('C.B. Williams Ltd enquiry — '+data.get('service'));
  const body=encodeURIComponent(
`Name: ${data.get('name')}
Email: ${data.get('email')}
Service: ${data.get('service')}

Message:
${data.get('message')}`
  );
  window.location.href=`mailto:hello@cbwilliams.co.uk?subject=${subject}&body=${body}`;
});
const menu=document.getElementById('menuBtn');
menu.addEventListener('click',()=>{
  const nav=document.querySelector('.site-header nav');
  const open=nav.dataset.open==='true';
  nav.dataset.open=String(!open);
  nav.style.display=open?'none':'flex';
  nav.style.position='absolute';
  nav.style.top='60px';
  nav.style.left='0';
  nav.style.right='0';
  nav.style.padding='15px 16px';
  nav.style.background='#071321';
  nav.style.flexDirection='column';
  nav.style.gap='14px';
  nav.style.borderBottom='1px solid #20364e';
});
