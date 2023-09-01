const filter = (): void => {
    const menu: HTMLElement | null = document.querySelector('.portfolio-menu');
    const items: NodeListOf<HTMLElement> | undefined = menu?.querySelectorAll('li');
    const btnAll: HTMLElement | null = menu?.querySelector('.all') ?? null;
    const btnLovers: HTMLElement | null = menu?.querySelector('.lovers') ?? null;
    const btnChef: HTMLElement | null = menu?.querySelector('.chef') ?? null;
    const btnGirl: HTMLElement | null = menu?.querySelector('.girl') ?? null;
    const btnGuy: HTMLElement | null = menu?.querySelector('.guy') ?? null;
    const btnGrandmother: HTMLElement | null = menu?.querySelector('.grandmother') ?? null;
    const btnGranddad: HTMLElement | null = menu?.querySelector('.granddad') ?? null;
    const wrapper: HTMLElement | null = document.querySelector('.portfolio-wrapper');
    const markAll: NodeListOf<HTMLElement> | undefined = wrapper?.querySelectorAll('.all');
    const markGirl: NodeListOf<HTMLElement> | undefined = wrapper?.querySelectorAll('.girl');
    const markLovers: NodeListOf<HTMLElement> | undefined = wrapper?.querySelectorAll('.lovers');
    const markChef: NodeListOf<HTMLElement> | undefined = wrapper?.querySelectorAll('.chef');
    const markGuy: NodeListOf<HTMLElement> | undefined = wrapper?.querySelectorAll('.guy');
    const no: HTMLElement | null = document.querySelector('.portfolio-no');

// non-null assertion could be used here as well instead of chaining. in such case coalescing is not needed 
    
    const typeFilter = (markType: NodeListOf<HTMLElement>): void => {
        markAll ? markAll.forEach((mark: HTMLElement) => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        }) : undefined;

        no ? no.style.display = 'none' : null;
        no ? no.classList.remove('animated', 'fadeIn') : null;

        if (markType) {
            markType.forEach((mark: HTMLElement) => {
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

    // you can simply use marks without assigning them as node list elemetns when non-assertion is used
    
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