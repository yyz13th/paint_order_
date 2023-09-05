const scrolling = (upSelector: string): void => {
    const upElem: HTMLElement | HTMLAreaElement | null = document.querySelector(upSelector);

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650) {
            upElem?.classList.add('animate', 'fadeIn');
            upElem!.style.opacity = '1';
            upElem?.classList.remove('fadeOut');
        } else {
            upElem?.classList.add('fadeOut');
            upElem!.style.opacity = '0';
            upElem?.classList.remove('fadeIn');
        }
    });

    //scrolling with raf
    const links: NodeListOf<HTMLElement> = document.querySelectorAll('[href^="#"]');
    const speed: number = 0.3;

    links.forEach(link => {
        link.addEventListener("click", function (event: Event) {
            event?.preventDefault();

            const widthTop = document.documentElement.scrollTop;
            const link = event!.target as HTMLAnchorElement;
            const hash: string = link.hash;
            let toBlock: number;
            if (hash) {
                toBlock = document.querySelector(hash)!.getBoundingClientRect().top;
            }
            let start: number | null = null;

            requestAnimationFrame(step);

            function step(time: number) {
                if (start === null) {
                    start = time;
                }

                const progress = time - start;
                const r =
                    toBlock < 0
                        ? Math.max(widthTop - progress / speed, widthTop + toBlock)
                        : Math.min(widthTop + progress / speed, widthTop + toBlock);

                document.documentElement.scrollTo(0, r);

                (toBlock < 0 && r > widthTop + toBlock) || (toBlock >= 0 && r < widthTop + toBlock)
                    ? requestAnimationFrame(step)
                    : location.hash = hash;
            }
        });
    });


    // const elements: HTMLElement = document.documentElement;
    // const body: HTMLElement = document.body;

    // const calcScroll = () => {
    //     upElem?.addEventListener('click', function (event: Event): void {
    //         let scrollTop: number = Math.round(body.scrollTop || elements.scrollTop);

    //         if (this.hash !== '') {
    //             event.preventDefault();
    //             // let hashElement: HTMLElement | HTMLAreaElement | null = document.getElementById(this.hash.substring(1));
    //             let hashElement: HTMLElement | HTMLAreaElement | null = document.querySelector(this.hash);
    //             let hashElementTop: number = 0;

    //             while (hashElement?.offsetParent) {
    //                 hashElementTop += hashElement.offsetTop;
    //                 hashElement = hashElement.offsetParent as HTMLElement;
    //             }

    //             hashElementTop = Math.round(hashElementTop);
    //             smoothScroll(scrollTop, hashElementTop, this.hash)
    //         }
    //     });
    // };

    // const smoothScroll: any = (from: number, to: number, hash: string) => {
    //     let timeInterval: number = 1;
    //     let prevScrollTop: number;
    //     let speed: number;

    //     to > from ? speed = 30 : speed = -30;

    //     let move: number = setInterval(function () {
    //         let scrollTop: number = Math.round(body.scrollTop || elements.scrollTop);

    //         if (
    //             prevScrollTop === scrollTop || (to > from && scrollTop >= to) || (to < from && scrollTop <= to)
    //         ) {
    //             clearInterval(move);
    //             history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash)
    //         } else {
    //             body.scrollTop += speed;
    //             elements.scrollTop += speed;
    //             prevScrollTop = scrollTop;
    //         }
    //     }, timeInterval);
    // };

    // calcScroll();
};

export default scrolling;