export async function GetAll(url, headers) {
  let _data = {
    method: "GET",
    headers: headers
  };

  let response = await fetch(url, _data);

  if (response.status == 401) {
    if (localStorage.getItem("accesstoken") === null) {
      return response.status;
    } else {
      return 402;
    }
  } else if (response.status == 403) {
    return response.status;
  } else if (response.status == 200) {
    return response.json();
  }
}

export async function GetWithID(url, id, headers) {
  let _data = {
    method: "GET",
    headers: headers
  };

  debugger;
  let response = await fetch(url + id, _data);
  debugger;

  if (response.status == 401) {
    if (localStorage.getItem("accesstoken") === null) {
      return response.status;
    } else {
      return 402; // yine bir authorization kodu componentte ayırt edileilsin diye
    }
  } else if (response.status == 403) {
    return response.status;
  } else if (response.status == 200) {
    return response.json();
  }
}

export async function Post(url, item, headers) {
  let _data = {
    method: "POST",
    body: JSON.stringify(item),
    headers: headers
  };

  let response = await fetch(url, _data);

  if (response.status == 401) {
    if (localStorage.getItem("accesstoken") === null) {
      return response.status;
    } else {
      return 402;
    }
  } else {
    return response.status;
  }
}

export async function Put(url, item, headers) {
  let _data = {
    method: "PUT",
    body: JSON.stringify(item),
    headers: headers
  };

  let response = await fetch(url, _data);

  if (response.status == 401) {
    if (localStorage.getItem("accesstoken") === null) {
      return response.status;
    } else {
      return 402;
    }
  } else {
    return response.status;
  }
}

export async function Delete(url, id, headers) {
  debugger;
  let _data = {
    method: "DELETE",
    headers: headers
  };

  let response = await fetch(url + id, _data);

  if (response.status == 401) {
    if (localStorage.getItem("accesstoken") === null) {
      return response.status;
    } else {
      return 402;
    }
  } else {
    return response.status;
  }
}

export async function refreshToken() {
  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Ref_Tok: localStorage.getItem("refreshtoken"),
    Acc_Tok: localStorage.getItem("accesstoken")
  };
  debugger;
  let _data = {
    method: "POST",
    headers: headers
  };

  let response = await fetch(
    "http://localhost:5000/api/Token/RefreshTokens/",
    _data
  );
  debugger;

  if (response.status == 200) {
    return response.json();
  }
}

/*export function PostWithModel (url, item, headers) {
    // response de model döönen servisler mesela login access token ve refersh token dönüyor
    debugger // eslint-disable-line

    let _data = {
        method: 'POST',
        body: JSON.stringify(item),
        headers: headers
    } 
    
    return fetch(url, _data);
}*/
