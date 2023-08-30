
const forms = (): void => {
    const forms: NodeListOf<HTMLFormElement> = document.querySelectorAll('form'),
        inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input'),
        uploads: NodeListOf<HTMLFormElement> = document.querySelectorAll('[name="upload"]');

    const message = {
        loading: 'Loading...',
        success: 'Success, thanks! we will contact you soon!',
        failure: 'Something went wrong...',
        spinner: 'assets/img/spinner.gif',
        ok: './ok.png',
        fail: 'assets/img/fail.png'
    };

    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php'
    };

    const postData = async (url: string, data: FormData) => {
        // document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: data
        });
        
        return await res.text();
        
    };

    const clearInput = (): void => {
        inputs.forEach((input: HTMLInputElement) => {
            input.value = '';
        });
    }

    uploads.forEach(upload => {
        upload.addEventListener('input', () => {
            console.log(upload.files[0]);
        })
    });
    forms.forEach((form: HTMLFormElement) => {
        form.addEventListener('submit', (e) => {
            e.preventDefault()


            let statusMessage: HTMLElement = document.createElement('div');
            statusMessage.classList.add('status');

            if (form.parentNode !== null) {
                form.parentNode.appendChild(statusMessage);
            }

            form.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                form.style.display = 'none';
            }, 4000);

            let statusImg: HTMLElement = document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.appendChild(statusImg);

            let textMessage: HTMLElement = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);

            const formData = new FormData(form);
            let api: string;
            form.closest('.popup-design' || form.classList.contains('calc_form')) ? api = path.designer : api = path.question;
            console.log(api);

            postData(api, formData)
                .then(res => {
                    console.log(res);
                    statusImg.setAttribute('src', message.ok);
                    statusMessage.textContent = message.success;
                })
                .catch(() => {
                    statusImg.setAttribute('src', message.fail);
                    statusMessage.textContent = message.failure;

                })
                .finally(() => {
                    form.reset();
                    clearInput();
                    setTimeout(() => {
                        statusMessage.remove();
                        form.style.display ='block';
                        form.classList.remove('fadeOutUp');
                        form.classList.add('fadeInUp'); 
                    }, 5000);

                })
        });
    });
};

export default forms;