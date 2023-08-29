const modals = (): void => {
    function bindModal (triggerSelector: string, modalSelector:string, closeSelector: string, closeClickOverlay: boolean = true) {

        const trigger = document.querySelectorAll<HTMLElement>(triggerSelector),
            modal = document.querySelector(modalSelector) as HTMLElement,
            close = document.querySelector(closeSelector) as HTMLElement,
            windows = document.querySelectorAll<HTMLElement>('[data-modal]');

            
        trigger.forEach(item =>{
            item.addEventListener('click', (e: Event) => {
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

        close.addEventListener('click', (e:Event) => {
            windows.forEach(item => {
                item.style.display = 'none'; 
             });

            modal.style.display = 'none';
            document.body.style.overflow = '';
            // document.body.classList.remove('modal-open');
        });

        modal.addEventListener('click', (e: Event) => {
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

function modalTimer (time: number, modalSelector: string): void{
    setTimeout(() => {

        let modalActive;

        document.querySelectorAll('[data-modal]').forEach(item => {
            if(getComputedStyle(item).display !== 'none'){
                modalActive = 'block';
            }
        });

        if(!modalActive){
            const modalActive = document.querySelector(modalSelector) as HTMLElement;
            modalActive.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }, time);
}


function calcScroll(): number {
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
    modalTimer(6000, '.popup-consultation');


};

export default modals;