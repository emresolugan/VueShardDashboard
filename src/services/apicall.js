
export function GetAll (url) {

    let _data = {
        method: 'GET',
        headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
        }
    } 

    return fetch(url, _data);
}

export function GetWithID (url, id) {

    let _data = {
        method: 'GET',
        headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
        }
    } 

    return fetch(url + id, _data);
}

export function Post (url, item) {

    debugger // eslint-disable-line

    let _data = {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
        }
    } 
    
    return fetch(url, _data);
}

export function Put () {
    //put services code will be here
}

export function Delete () {
    //delete services code will be here
}