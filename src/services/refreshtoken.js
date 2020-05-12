export async function refreshToken()
{
    let headers = {'Accept': 'application/json', 'Content-Type': 'application/json', 'Ref_Tok': localStorage.getItem("refreshtoken"), 'Acc_Tok': localStorage.getItem("accesstoken")};
    //debugger;
    let _data = {
        method: 'POST',
        headers: headers
        }

    await fetch("http://localhost:5000/api/Token/RefreshTokens/", _data)
    .then(_response => _response.json())
    .then(_response => {
        console.log(_response);
        //debugger;
        localStorage.setItem("accesstoken", _response.accessToken);
        localStorage.setItem("refreshtoken", _response.refreshToken);

        return;
    })
}