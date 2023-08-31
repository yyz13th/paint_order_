const showMoreStyles = (trigger: string, styles: string): void => {
    
    const cards: NodeListOf<HTMLElement> = document.querySelectorAll(styles),
        btn: HTMLElement | null = document.querySelector(trigger);

    cards.forEach(card => {
        card.classList.add('animated', 'fadeInUp');
    });

    btn ? btn.addEventListener('click', () => {
        cards.forEach(card => {
            card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
            card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        });
        btn.style.display = 'none';
    }): null;
};

export default showMoreStyles;