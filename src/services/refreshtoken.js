export async function refreshToken()
{
  return new Promise((resolve, reject) => {
    let headers = {'Accept': 'application/json', 'Content-Type': 'application/json', 'Ref_Tok': localStorage.getItem("refreshtoken"), 'Acc_Tok': localStorage.getItem("accesstoken")};
    debugger;

    Axios({
        method: 'post',
        url: 'http://localhost:5000/api/Token/RefreshTokens/',
        headers: headers
      }).then(function(response) {

        localStorage.setItem("accesstoken", response.data.accessToken);
        localStorage.setItem("refreshtoken", response.data.refreshToken);

        resolve(response);

      })
      .catch(error => {
        //burda ki error ikinci promise nin reject'inde yakalanıyor
         reject(error); 
      });
    })
}


//fetch için kullanılan refresh token servisi yorumda

/*export async function refreshToken()
{
    return new Promise((resolve, reject) => {
        let headers = {'Accept': 'application/json', 'Content-Type': 'application/json', 'Ref_Tok': localStorage.getItem("refreshtoken"), 'Acc_Tok': localStorage.getItem("accesstoken")};
        //debugger;
        let _data = {
            method: 'POST',
            headers: headers
            }

        fetch("http://localhost:5000/api/Token/RefreshTokens/", _data)
        .then(_response => _response.json())
        .then(_response => {
            console.log(_response);
            //debugger;
            localStorage.setItem("accesstoken", _response.accessToken);
            localStorage.setItem("refreshtoken", _response.refreshToken);

            resolve(_response);
        })
    })
}*/