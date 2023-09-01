const filter = (): void => {
    const menu: HTMLElement | null = document.querySelector('.portfolio-menu'),
        items: NodeListOf<HTMLElement> | undefined = menu?.querySelectorAll('li'),
        btnAll: HTMLElement | null = menu?.querySelector('.all') ?? null,
        btnLovers: HTMLElement | null = menu?.querySelector('.lovers') ?? null,
        btnChef: HTMLElement | null = menu?.querySelector('.chef') ?? null,
        btnGirl: HTMLElement | null = menu?.querySelector('.girl') ?? null,
        btnGuy: HTMLElement | null = menu?.querySelector('.guy') ?? null,
        btnGrandmother: HTMLElement | null = menu?.querySelector('.grandmother') ?? null,
        btnGranddad: HTMLElement | null = menu?.querySelector('.granddad') ?? null,
        wrapper: HTMLElement | null = document.querySelector('.portfolio-wrapper'),
        markAll: NodeListOf<HTMLElement>| undefined  = wrapper?.querySelectorAll('.all'),
        markGirl: NodeListOf<HTMLElement>| undefined = wrapper?.querySelectorAll('.girl'),
        markLovers: NodeListOf<HTMLElement>| undefined = wrapper?.querySelectorAll('.lovers'),
        markChef: NodeListOf<HTMLElement>| undefined = wrapper?.querySelectorAll('.chef'),
        markGuy: NodeListOf<HTMLElement>| undefined = wrapper?.querySelectorAll('.guy'),
        no: HTMLElement | null = document.querySelector('.portfolio-no');

    const typeFilter = (markType: NodeListOf<HTMLElement>): void => {
        markAll ? markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        }): undefined;

        no ? no.style.display = 'none' : null;
        no ? no.classList.remove('animated', 'fadeIn') : null;

        if (markType) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        } else if (no) {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }

    };

    const addClickListener = (btn: HTMLElement | null, mark: NodeListOf<HTMLElement>) => {
        if (btn) {
            btn.addEventListener('click', () => {
                typeFilter(mark);
            });
        }
    }

    addClickListener(btnAll, markAll as NodeListOf<HTMLElement>);
    addClickListener(btnLovers, markLovers as NodeListOf<HTMLElement>);
    addClickListener(btnGuy, markGuy as NodeListOf<HTMLElement>);
    addClickListener(btnChef, markChef as NodeListOf<HTMLElement>);
    addClickListener(btnGirl, markGirl as NodeListOf<HTMLElement>);
    addClickListener(btnGrandmother, null as unknown as NodeListOf<HTMLElement>);
    addClickListener(btnGranddad, null as unknown as NodeListOf<HTMLElement>);

    menu?.addEventListener('click', (e: Event) => {
        let target = e.target as HTMLElement;
        if (target && target.tagName == "LI") {

            //items = menu buttons
            items?.forEach(item => item.classList.remove('active'));
            target.classList.add('active');
            
        }
    })

};
export default filter;