export async function sendForm(url, data) {    
    // let object = {};
    // data.forEach((value, key) => object[key] = value);
    // let json = JSON.stringify(object); 
    // console.log(json);
    
    const response = await fetch(url, {
        method: 'POST', 
        // headers: {
        //     'Content-Type': 'application/json;charset=utf-8'
        // },           
        body: data
    });        

    if (response.ok) {                   
        return await response.text();            
    } else {         
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
    }             
}

export async function getResource(url) {     
    const response = await fetch(url);        

    if (response.ok) {                   
        return await response.json();            
    } else {         
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
    }             
}

