const pictureSize = (imgSelector: string): void => {
    const blocks: NodeListOf<HTMLElement> = document.querySelectorAll(imgSelector);

    const showImg = (block: HTMLElement): void => {
        const img: HTMLImageElement | null = block.querySelector('img');
        img ? img.src = img.src.slice(0, -4) + '-1.png' : null;

        block.querySelectorAll('p:not(.sizes-hit)').forEach((p: Element) => {

            (p as HTMLElement).style.display = 'none';
            p.classList.remove('animated', 'fadeIn');
        });
    }

    const hideImg = (block: HTMLElement): void => {
        const img: HTMLImageElement | null = block.querySelector('img');
        img ? img.src = img.src.slice(0, -6) + '.png' : null;

        block.querySelectorAll('p:not(.sizes-hit)').forEach((p: Element) => {

            (p as HTMLElement).style.display = 'block';
            p.classList.add('animated', 'fadeIn');
        });

    }

    blocks.forEach((block: HTMLElement) => block.addEventListener('mouseover', () => showImg(block)));
    blocks.forEach((block: HTMLElement) => block.addEventListener('mouseout', () => hideImg(block)));
}

export default pictureSize;