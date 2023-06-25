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
    //modal widnow
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
    
    
          //form
          const forms = document.querySelectorAll('form'),
          modalDialog = document.querySelector('.modal__content')
          btnForm = document.querySelector('.btnForm');
    
          btnForm.addEventListener('click', ()=>{
             console.log("Fff")
            modalDialog.classList.add(' hide');
          })
     const message = {
         loading: 'img/form/spinner.svg',
         success: 'Спасибо! Скоро мы с вами свяжемся',
         failure: 'Что-то пошло не так...'
     };
    
     forms.forEach(item => {
         postData(item);
     });
    
     function postData(form) {
         form.addEventListener('submit', (e) => {
             e.preventDefault();
            
    
             let statusMessage = document.createElement('img');
             statusMessage.src = message.loading;
             statusMessage.style.cssText = `
                 display: block;
                 margin: 0 auto;
             `;
             form.insertAdjacentElement('afterend', statusMessage);
         
             const request = new XMLHttpRequest();
             request.open('POST', 'server.php');
             request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
             const formData = new FormData(form);
    
             const object = {};
             formData.forEach(function(value, key){
                 object[key] = value;
             });
             const json = JSON.stringify(object);
    
             request.send(json);
    
             request.addEventListener('load', () => {
                 if (request.status === 200) {
                     console.log(request.response);
                     showThanksModal(message.success);
                     statusMessage.remove();
                     form.reset();
                 } else {
                     showThanksModal(message.failure);
                 }
             });
         });
     }
    
     function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');
    
        prevModalDialog.classList.add('hide');
        openModal();
    
        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div data-close class="modal__close" >×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 4000);
    }
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    