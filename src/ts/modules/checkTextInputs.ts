const checkTextInputs = (selector: string): void  => {

    const txtInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(selector);
    const regex: RegExp = /[^а-яё 0-9]/ig;

    txtInputs.forEach(input => {

        input.setAttribute( "autocomplete", "__away" ); //bans autofill
        input.addEventListener('keypress', function (e): void {

            if (e.key.match(regex)) {
                e.preventDefault();
            }
        })
    });
};

export default checkTextInputs;