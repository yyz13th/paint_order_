const sliders = (slides: string, dir: string, prev: string, next: string): void => {
    let slideIndex: number = 1,
    paused:number = 0;

    const items: NodeListOf<HTMLElement> = document.querySelectorAll(slides);


    const showSlides = (n: number): void => {
        if (n > items.length) {
            slideIndex = 1
        }

        if (n < 1) {
            slideIndex = items.length;
        }

        items.forEach(item => {
            item.classList.add('animated');
            item.style.display = 'none';

        });

        items[slideIndex - 1].style.display = 'block';

    }

    showSlides(slideIndex);

    const plusSlides = (n: number): void => {
        showSlides(slideIndex += n);

    }

    try {
        const prevBtn: HTMLElement | null = document.querySelector(prev),
            nextBtn: HTMLElement | null = document.querySelector(next);


        if(prevBtn !== null && nextBtn !== null){
            prevBtn.addEventListener('click', () => {
                plusSlides(-1);
                items[slideIndex - 1].classList.remove('slideInRight');
                items[slideIndex - 1].classList.add('slideInLeft');
            });

            nextBtn.addEventListener('click', () => {
                plusSlides(1);
                items[slideIndex - 1].classList.remove('slideInLeft');
                items[slideIndex - 1].classList.add('slideInRight');
            });
        }    
    } catch (error) {}


    const activateAnimation = (): void => {
        if (dir === 'vertical') {
            paused = setInterval(() => {
                plusSlides(1);
                items[slideIndex - 1].classList.add('fadeIn');
            }, 3000);
        } else {
            paused = setInterval(() => {
                plusSlides(1);
                items[slideIndex - 1].classList.remove('fadeOut');
                items[slideIndex - 1].classList.add('fadeIn');
            }, 3000);
        }
    }
    activateAnimation();

    items[0].parentNode?.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });
    items[0].parentNode?.addEventListener('mouseleave', () => {
        activateAnimation();
    });

};

export default sliders;