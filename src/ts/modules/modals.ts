const modals = (): void => {
    let btnPressed: boolean = false;
    
    const bindModal = (triggerSelector: string, modalSelector: string, closeSelector: string, destroy: boolean = false): void => {

        const trigger: NodeListOf<Element> = document.querySelectorAll(triggerSelector),
            modal: HTMLElement | null = document.querySelector(modalSelector),
            close: Element | null = document.querySelector(closeSelector),
            windows: NodeListOf<HTMLElement> = document.querySelectorAll('[data-modal]');


        trigger.forEach(item => {
            item.addEventListener('click', (e: Event) => {
                e.target ? e.preventDefault() : null;
                

                btnPressed = true;

                destroy ? item.remove() : null;
                
                windows.forEach(item => {
                    item.style.display = 'none';
                    item.classList.add('animated', 'fadeIn');
                });

                if (modal) {
                    modal.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                };

                if (modalTimer) {
                    clearInterval(modalTimer);
                };
            });
        });
        if (close && modal) {
            close.addEventListener('click', (e: Event) => {
                windows.forEach((item) => {
                    item.style.display = 'none';
                });
                modal.style.display = 'none';
                document.body.style.overflow = '';
                // document.body.classList.remove('modal-open');
            });


            modal.addEventListener('click', (e: Event) => {
                if (e.target === modal) {
                    windows.forEach(item => {
                        item.style.display = 'none';
                    });
                    modal.style.display = 'none';
                    document.body.style.overflow = '';
                    // document.body.classList.remove('modal-open');
                }
            })
        };
    }

    const modalTimer = (time: number, modalSelector: string): void => {
        setTimeout(() => {

            let modalActive: boolean| string| undefined;

            document.querySelectorAll('[data-modal]').forEach((item: Element) => {
                getComputedStyle(item).display !== 'none' ? modalActive = 'block': modalActive = 'none'; 
            });

            if (!modalActive) {
                const modalActive: HTMLElement | null = document.querySelector(modalSelector);
                modalActive!.style.display = 'block';
                let scroll: number = calcScroll();
                document.body.style.overflow = 'hidden';
                document.body.style.paddingRight = `${scroll}px`;
            }
        }, time);
    }


    const calcScroll = (): number => {
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

    const openByScroll = (selector: string): void => {
        window.addEventListener('scroll', () => {
            if (!btnPressed && window.pageYOffset + document.documentElement.clientHeight + 1 >= document.documentElement.scrollHeight) {
                (document.querySelector(selector) as HTMLElement).click();

            }
        });
    }
    bindModal('.button-design', '.popup-design', '.popup-design .popup-close',);
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close',);
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
    openByScroll('.fixed-gift');
    modalTimer(6000, '.popup-consultation');


};

export default modals;