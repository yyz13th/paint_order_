const calc = (size: string, material: string, options: string, procmocode: string, result: string): void => {

    const sizeBlock: HTMLSelectElement | null = document.querySelector(size),
        materialBlock: HTMLSelectElement | null = document.querySelector(material),
        optionsBlock: HTMLSelectElement | null = document.querySelector(options),
        procmocodeBlock: HTMLInputElement | null = document.querySelector(procmocode),
        resultBlock: HTMLElement | null = document.querySelector(result);

    let sum: number = 0;

    const calcFunc = (): void => {
        if (sizeBlock && materialBlock && optionsBlock && procmocodeBlock && resultBlock) {

            sum = Math.round(+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value);

            if (sizeBlock.value === '' || materialBlock.value === '') {
                resultBlock.textContent = "Please select size and material";

            } else if (procmocodeBlock.value === 'IWANTPOPART') {
                resultBlock.textContent = (`${Math.round(sum * 0.7)}`);
            } else {
                resultBlock.textContent = (`${sum}`);
            }
        }
    };

    sizeBlock?.addEventListener('change', calcFunc);
    materialBlock?.addEventListener('change', calcFunc);
    optionsBlock?.addEventListener('change', calcFunc);
    procmocodeBlock?.addEventListener('input', calcFunc);
};

export default calc;