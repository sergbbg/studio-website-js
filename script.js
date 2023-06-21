document.querySelector('.burger_first').addEventListener('click', function () {
  document.querySelector('.list-container').classList.toggle('active');
});
document.querySelector('.burger_second').addEventListener('click', function () {
  document.querySelector('.list-container').classList.toggle('active');
});




document.querySelector('.burger_second').addEventListener('click', function () {
  document.querySelector('.list1490').classList.toggle('active-list');
});

document.querySelector('.burger_first').addEventListener('click', function () {
  document.querySelector('.more-button-list').classList.toggle('active-list');
});













document.querySelector('.bt').addEventListener('click', function () {
  document.querySelector('.more-button-list-item_2').classList.toggle('bt-active');
});


const  modalTrigger = document.querySelector('.button-green'),
       modal = document.querySelector('.modal'),
       modalCloseBtn = document.querySelector('[data-close]');

modalTrigger.addEventListener('click',(el)=>{
el.preventDefault();
console.log("ffd");
openModal();
});


function openModal() {

modal.classList.add('show');
modal.classList.remove('hide');
document.body.style.overflow = 'hidden';
//  modal.classList.toggle('show'); 

// clearInterval(modalTimeId);
}

// modalTrigger.forEach(btn =>{
//   btn.preventDefault()
// btn.addEventListener('click', openModal);
// console.log("f2f")
// });



function closeModal() {
// modal.classList.add('hide');
 // modal.classList.remove('show'); 
modal.classList.toggle('show'); 
document.body.style.overflow = '';
}



modalCloseBtn.addEventListener('click',close );

modalCloseBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
if (e.target === modal){
closeModal();
}
});

document.addEventListener('keydown', (e) => {
if(e.code === "Escape" && modal.classList.contains('show')){
 closeModal();
}
});
