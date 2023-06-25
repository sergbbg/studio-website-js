window.addEventListener('DOMContentLoaded', function() {

//burger menu
  const BurgerFirst = document.querySelector('.burger_first'),
        listCont = document.querySelector('.list-container'),
        burgerSecond = document.querySelector('.burger_second')


        

    BurgerFirst.addEventListener('click', function () {
          listCont.classList.toggle('active');
    });

    burgerSecond.addEventListener('click', function () {
      listCont.classList.toggle('active');
    });

    burgerSecond.addEventListener('click', function () {
      document.querySelector('.list1490').classList.toggle('active-list');
    });


    BurgerFirst .addEventListener('click', function () {
      document.querySelector('.more-button-list').classList.toggle('active-list');
    });

    document.querySelector('.bt').addEventListener('click', function () {
      document.querySelector('.more-button-list-item_2').classList.toggle('bt-active');
    });

    const  modalTrigger = document.querySelector('.button-green'),
       modal = document.querySelector('.modal'),
       modalCloseBtn = document.querySelector('[data-close]');

    //modal widnow
      modalTrigger.addEventListener('click',(el)=>{
      el.preventDefault();
      console.log("ffd");
      openModal();
      });


      function openModal() {

      modal.classList.add('show');
      modal.classList.remove('hide');
      document.body.style.overflow = 'hidden';

      }



      function closeModal() {
      
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


})















