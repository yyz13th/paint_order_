
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


const getResource = async (url: string,) => {
    // document.querySelector('.status').textContent = message.loading;
    let res = await fetch(url);

    if(!res.ok){
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    
    return await res.json();
    
};

export {postData, getResource};