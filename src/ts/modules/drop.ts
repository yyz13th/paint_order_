const drop = (): void => {
    const fileInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('[name="upload"]');

    
    const preventDefaults = (e: Event): void => {
        e.preventDefault();
        e.stopPropagation();
    };

    ["dragenter", "dragleave", "dragover", "drop"].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);    
        });    
    });


    const highlight = (item: HTMLElement) => {
        (item.closest('.file_upload') as HTMLElement).style.border = "5px solid yellow";
        (item.closest('.file_upload') as HTMLElement).style.backgroundColor = "rgba(0,0,0, .7)";
    };

    const unhighlight = (item: HTMLElement) => {
        (item.closest('.file_upload') as HTMLElement).style.border = "none";
        if(item.closest('.calc_form')) {
            (item.closest('.file_upload') as HTMLElement).style.backgroundColor = "#fffff";
        } else {
            (item.closest('.file_upload') as HTMLElement).style.backgroundColor = "#ededed";
        }
    };

    ["dragenter", "dragover"].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => highlight(input), false);    
        });    
    });
    ["dragleave", "drop"].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unhighlight(input), false);    
        });    
    });

    fileInputs.forEach((input: any) => {
        input.addEventListener('drop', (e: any) => {
            input.files = e.dataTransfer.files;

            let dots;
            const arr = input.files[0].name.split(".");
            arr[0].length > 6 ? dots = "..." : dots = ".";
            const name = arr[0].substring(0, 6) + dots + arr[1];
            if (input.previousElementSibling) {
                input.previousElementSibling.textContent = name;
            }
        })
    })
};

export default drop;