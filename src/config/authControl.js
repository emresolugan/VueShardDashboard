export function AuthorizationControl ( page, user_level) {

    debugger // eslint-disable-line

    /*if(sessionStorage.getItem("authList") === null)
    {
        let _authList =  [{ page: "login", level: 1}, { page: "home", level: 2 }];
        sessionStorage.setItem("authList", JSON.stringify(_authList));
    }

    let page_index = JSON.parse(sessionStorage.getItem("authList")).findIndex(x => x.page == page); */

    let _authList =  [{ page: "login", level: 4}, { page: "home", level: 2 }];
    let page_index = JSON.parse(JSON.stringify(_authList)).findIndex(x => x.page == page);

    if(user_level <= JSON.parse(JSON.stringify(_authList))[page_index].level)
    {
        return 1;
    }
    else
    {
        return 0;
    }

}