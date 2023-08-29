const modals = () => {
    function bindModal ( triggerSelector: string, modalSelector: string, closeSelector: string, closeClickOverlay: boolean = true) {

        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]');

        trigger.forEach(item =>{
            item.addEventListener('click', (e) => {
                if(e.target){
                    e.preventDefault();
                }

                windows.forEach(item => {
                   item.style.display = 'none'; 
                });
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';

                if(modalTimer){
                    clearInterval(modalTimer);
                }
            });
        });

        close.addEventListener('click', (e) => {
            windows.forEach(item => {
                item.style.display = 'none'; 
             });

            modal.style.display = 'none';
            document.body.style.overflow = '';
            // document.body.classList.remove('modal-open');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                windows.forEach(item => {
                    item.style.display = 'none'; 
                 });
                modal.style.display = 'none';
                document.body.style.overflow = '';
                // document.body.classList.remove('modal-open');
            }
        
        })
    }

    
    function modalTimer (time: number, modalSelector: string){
        setTimeout(() => {

            let modalActive;

            document.querySelectorAll('[data-modal]').forEach(item => {
                if(getComputedStyle(item).display !== 'none'){
                    modalActive = 'block';
                }
            });

            if(!modalActive){
                document.querySelector(modalSelector).style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        }, time);
    }

function calcScroll() {
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
}

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close',);
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close',);
    modalTimer('6000', '.popup-consultation');

};

export default modals;