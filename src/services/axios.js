import Axios from "axios";
import { refreshToken } from '../services/refreshtoken';


export async function AxiosGetAll (url, headers) {

  return new Promise((resolve, reject) => {
    Axios({
        method: 'get',
        url: url,
        headers: headers
      })
      .catch(error => {
          // refresh token hatası hariç hepsini reject te gönderip componentte hallediyorum
          if(error.response.status == 401 && localStorage.getItem("accesstoken") !== null)
          {
            return new Promise((_resolve) => {
              refreshToken().then(response => {
                debugger; 
                  headers = {'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("accesstoken")};
                  _resolve(AxiosGetAll(url, headers));
              })
              .catch(error => {
                // ilk promise'nin reject ini kullandım çünkü ilkinden dönüyor error aslında
                reject(error);
              })
            })
          }
          else
          {
            reject(error);
          }
      })
      .then(resp => {
        resolve(resp);
      });

    })
}

export async function AxiosGetWithId (url, id, headers) {

  return new Promise((resolve, reject) => {
    Axios({
        method: 'get',
        url: url + id,
        headers: headers
      })
      .catch(error => {
          // refresh token hatası hariç hepsini reject te gönderip componentte hallediyorum
          if(error.response.status == 401 && localStorage.getItem("accesstoken") !== null)
          {
            return new Promise((_resolve) => {
              refreshToken().then(response => {
                debugger; 
                  headers = {'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("accesstoken")};
                  _resolve(AxiosGetWithId(url, id, headers));
              })
              .catch(error => {
                // ilk promise'nin reject ini kullandım çünkü ilkinden dönüyor error aslında
                reject(error);
              })
            })
          }
          else
          {
            reject(error);
          }
      })
      .then(resp => {
        resolve(resp);
      });

    })
}

export async function AxiosPost(url, item, headers) {

  return new Promise((resolve, reject) => {
    Axios({
        method: 'post',
        url: url,
        data: item,
        headers: headers
      })
      .catch(error => {
          // refresh token hatası hariç hepsini reject te gönderip componentte hallediyorum
          if(error.response.status == 401 && localStorage.getItem("accesstoken") !== null)
          {
            return new Promise((_resolve) => {
              refreshToken().then(response => {
                debugger; 
                  headers = {'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("accesstoken")};
                  _resolve(AxiosPost(url, item, headers));
              })
              .catch(error => {
                // ilk promise'nin reject ini kullandım çünkü ilkinden dönüyor error aslında
                reject(error);
              })
            })
          }
          else
          {
            reject(error);
          }
      })
      .then(resp => {
        resolve(resp);
      });

    })
}

export async function AxiosPut(url, item, headers) {

  return new Promise((resolve, reject) => {
    Axios({
        method: 'put',
        url: url,
        data: item,
        headers: headers
      })
      .catch(error => {
          // refresh token hatası hariç hepsini reject te gönderip componentte hallediyorum
          if(error.response.status == 401 && localStorage.getItem("accesstoken") !== null)
          {
            return new Promise((_resolve) => {
              refreshToken().then(response => {
                debugger; 
                  headers = {'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("accesstoken")};
                  _resolve(AxiosPut(url, item, headers));
              })
              .catch(error => {
                // ilk promise'nin reject ini kullandım çünkü ilkinden dönüyor error aslında
                reject(error);
              })
            })
          }
          else
          {
            reject(error);
          }
      })
      .then(resp => {
        resolve(resp);
      });

    })
}

export async function AxiosDelete(url, id, headers) {

  return new Promise((resolve, reject) => {
    Axios({
        method: 'put',
        url: url + id,
        headers: headers
      })
      .catch(error => {
          // refresh token hatası hariç hepsini reject te gönderip componentte hallediyorum
          if(error.response.status == 401 && localStorage.getItem("accesstoken") !== null)
          {
            return new Promise((_resolve) => {
              refreshToken().then(response => {
                debugger; 
                  headers = {'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("accesstoken")};
                  _resolve(AxiosDelete(url, id, headers));
              })
              .catch(error => {
                // ilk promise'nin reject ini kullandım çünkü ilkinden dönüyor error aslında
                reject(error);
              })
            })
          }
          else
          {
            reject(error);
          }
      })
      .then(resp => {
        resolve(resp);
      });

    })
}