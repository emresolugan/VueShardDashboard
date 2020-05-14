import { refreshToken } from '../services/refreshtoken';

export async function GetAll (url, headers) {

    let _data = {
        method: 'GET',
        headers: headers
    } 

    let response = await fetch(url, _data);

    if(response.status == 401)
    {
        if(localStorage.getItem("accesstoken") === null)
        {
            return response.status;
        }
        else
        {
            return refreshToken().then(response => {
                //debugger;
                headers = {'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("accesstoken")};
                return GetAll(url, headers);
             });
        }
    }
    else if(response.status == 403)
    {
        return response.status;
    }
    else if(response.status == 200)
    {
        return response.json();
    }
}

export async function GetWithID (url, id, headers) {

    let _data = {
        method: 'GET',
        headers: headers
    } 

    let response = await fetch(url + id, _data);
    debugger;
    if(response.status == 401)
    {
        if(localStorage.getItem("accesstoken") === null)
        {
            return response.status;
        }
        else
        {
            // return olmadan gene pas geçiyo
            return new Promise((resolve, reject) => {
                resolve(refreshToken().then(rresp => {
                    headers = {'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("accesstoken")};
                    return GetWithID(url, id, headers);       
                }))
            })
        }
    }
    else if(response.status == 403)
    {
        return response.status
    }
    else if(response.status == 200)
    {
        return response.json();
    }

  /*  debugger;
    let response = await fetch(url + id, _data);
    debugger;

    if(response.status == 401)
    {
        if(localStorage.getItem("accesstoken") === null)
        {
            return response.status;
        }
        else
        {
            // return koymassak direk componente gider hepsindede
            return refreshToken().then(response => {
               //debugger;
               headers = {'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("accesstoken")};
               return GetWithID(url, id, headers)
            });
        }
    }
    else if(response.status == 403)
    {
        return response.status
    }
    else if(response.status == 200)
    {
        return response.json();
    }
 */
}

export async function Post (url, item, headers) {

    let _data = {
        method: 'POST',
        body: JSON.stringify(item),
        headers: headers
    } 
 
    let response = await fetch(url, _data);

    if(response.status == 401)
    {
        if(localStorage.getItem("accesstoken") === null)
        {
            return response.status;
        }
        else
        {
            return refreshToken().then(response => {
                //debugger;
                headers = {'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("accesstoken")};
                return Post(url, item, headers);
             });
        }
    }
    else
    {
        return response.status;
    }
}

export async function Put (url, item, headers) {
    let _data = {
        method: 'PUT',
        body: JSON.stringify(item),
        headers: headers
    } 
    
    let response = await fetch(url, _data);

    if(response.status == 401)
    {
        if(localStorage.getItem("accesstoken") === null)
        {
            return response.status;
        }
        else
        {
            return refreshToken().then(response => {
                //debugger;
                headers = {'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("accesstoken")};
                return Put(url, item, headers);
            });
        }
    }
    else
    {
        return response.status;
    }
}

export async function Delete (url, id, headers) {
    debugger;
    let _data = {
        method: 'DELETE',
        headers: headers
    } 
    
    let response = await fetch(url + id, _data);

    if(response.status == 401)
    {
        if(localStorage.getItem("accesstoken") === null)
        {
            return response.status;
        }
        else
        {
            return refreshToken().then(response => {
                //debugger;
                headers = {'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("accesstoken")};
                return Delete(url, id, headers);
             });
        }
    }
    else
    {
        return response.status;
    }
}