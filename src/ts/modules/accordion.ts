const accordion = (triggerSelector: string): void => {
    const btns: NodeListOf<HTMLElement> = document.querySelectorAll(triggerSelector);

    btns.forEach((btn: HTMLElement | null) => {
        btn ? btn.addEventListener('click', function (this: HTMLElement) {
            const nextSibling = this.nextElementSibling as HTMLElement | null;
            this.classList.toggle('active-style');
            if (nextSibling) {
                nextSibling.classList.toggle('active-content');
                this.classList.contains('active-style') ? nextSibling.style.maxHeight = nextSibling.scrollHeight + 80 + 'px' : nextSibling.style.maxHeight = '0px';
            }
        }) : null;
    });

};

// using css styles 
// cosnt accordion = (triggerSelector:string, blockSelector: string): void => {
//     const blocks: NodeListOf<HTMLElement> = document.querySelectorAll(blockSelector);
//     const btns: NodeListOf<HTMLElement> = document.querySelectorAll(triggerSelector);

//     blocks.forEach((block: HTMLElement) => {
//         block.classList.add('animated', 'fadeInDown');
//     });

//     btns.forEach((btn: HTMLElement | null) => {
//         btn ? btn.addEventListener('click', function (this: HTMLElement) {
//             if (!this.classList.contains('active')) {
//                 btns.forEach((btn: HTMLElement | null) => {
//                     btn ? btn.classList.remove('active', 'active-style') : null;
//                 });
//                 this.classList.add('active', 'active-style');

//             }
//         }) : null;
//     });
// }

export default accordion;