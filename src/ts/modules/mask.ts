const mask = (selector: string): void => {
    
    let setCursorPosition = (pos: number, elem: any) => {
        elem.focus();
        
        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            let range = elem.createTextRange();

            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    }
    const createMask = (event: Event) => {
        const input = event.target as HTMLInputElement;
        let matrix: string = '+7 (___) ___-__-__',
        i: number = 0,
        def: string = matrix.replace(/\D/g, ''),
        val: string = input.value.replace(/\D/g, '');

    if(def.length >= val.length) {
        val = def;
        }

 //take every symbol from matrix and check whether is it a digit and symbol index is lower than value.length. 
 // if true = skip to the next symbol, 
 // if false - another check whether iteration index is higher or eq to value.lengts, is true - delete symbol, if false - stay as it is 
        input.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
          });
     
        if (event.type === 'blur') {
            if (input.value.length === 2) {
                input.value = '';
            }
        } else {
            setCursorPosition(input.value.length, input);
        }
    }

    let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(selector)

    inputs.forEach(input => {
        input.addEventListener('input', createMask);
        input.addEventListener('focus', createMask);
        input.addEventListener('blur', createMask);
    });
};

export default mask;