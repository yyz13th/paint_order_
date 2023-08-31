import { getResource } from "../services/requests";

const showMoreStyles = (trigger: string, styles: string): void => {

    const btn: HTMLElement | null = document.querySelector(trigger),
        stylesElement: HTMLElement | null = document.querySelector(styles);
    // const cards: NodeListOf<HTMLElement> = document.querySelectorAll(styles);

    // cards.forEach(card => {
    //     card.classList.add('animated', 'fadeInUp');
    // });

    // btn ? btn.addEventListener('click', () => {
    //     cards.forEach(card => {
    //         card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
    //         card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    //     });
    //     btn.style.display = 'none';
    // }): null;

    btn ? btn.addEventListener('click', function (): void {
        getResource('http://localhost:3000/styles').then(data => createCards(data))
            .catch(err => console.log(err));

        this.remove();
    }) : null;

    const createCards = (responses: any): void => {
        responses.forEach(({ src, title, link }) => {
            let card: HTMLElement = document.createElement('div');
            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

            card.innerHTML = `
            <div class="styles-block">
                <img src=${src} alt="style">
                 <h4>${title}</h4>
                <a href="${link}">Подробнее</a>
            </div>
            `;


            stylesElement ? stylesElement.appendChild(card) : null;
        })
    }
};

export default showMoreStyles;