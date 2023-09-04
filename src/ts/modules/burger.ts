const burger = (menuSelector: string, burgerSelector: string) => {
    const menuElem: HTMLElement | null = document.querySelector(menuSelector);
    const burgerElem: HTMLElement | null = document.querySelector(burgerSelector);


    if (menuElem) {
        menuElem.style.display = 'none';

        burgerElem?.addEventListener('click', () => {
            menuElem.style.display === 'none' && window.screen.availWidth < 993 ? menuElem.style.display = 'block' : menuElem.style.display = 'none';
        });

        window.addEventListener('resize', () =>
            window.screen.availWidth > 992 ? menuElem.style.display = 'none' : menuElem.style.display = 'block'
        );
    }
};

export default burger;