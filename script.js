
function bookTable(form){
  const name=form.name.value;
  const email=form.email.value;
  const date=form.date.value;
  const time=form.time.value;
  const guests=form.guests.value;

  if(!name||!email||!date||!time||!guests){
    alert("Please fill all fields!");
    return false;
  }

  alert("Thank you "+name+"! Your table for "+guests+" guests is booked on "+date+" at "+time+".");
  form.reset();
  return false;
}


function submitContact(form){
  const name=form.cname.value;
  const email=form.cemail.value;
  const message=form.cmessage.value;

  if(!name||!email||!message){
    alert("Please fill all fields!");
    return false;
  }

  alert("Thank you "+name+"! Your message has been sent.");
  form.reset();
  return false;
}


function filterCategory(category){
  const allItems=document.querySelectorAll('.menu-item');
  for(let i=0;i<allItems.length;i++){
    let item=allItems[i];
    if(category==='all'){
      item.style.display='flex'; // Show all items
    }else if(item.getAttribute('data-category')===category){
      item.style.display='flex'; // Show matching category
    }else{
      item.style.display='none'; // Hide non-matching category
    }
  }

  
  const buttons=document.querySelectorAll('.filter-btn');
  for(let i=0;i<buttons.length;i++){
    let btn=buttons[i];
    if(btn.getAttribute('data-category')===category){
      btn.classList.add('active'); 
    }else if(category==='all'&&btn.getAttribute('data-category')==='all'){
      btn.classList.add('active');
    }else{
      btn.classList.remove('active'); 
    }
  }
}


const filterButtons=document.querySelectorAll('.filter-btn');
for(let i=0;i<filterButtons.length;i++){
  filterButtons[i].addEventListener('click',function(){
    filterCategory(this.getAttribute('data-category'));
  });
}

