/* eslint-disable promise/param-names */
import {
  AUTH_REQUEST,
  AUTH_ERROR,
  AUTH_SUCCESS,
  AUTH_LOGOUT
} from "../actions/auth";
import { USER_REQUEST } from "../actions/user";
import apiCall from "../../utils/api";

const state = {
  token: localStorage.getItem("user-token") || "",
  refreshToken: localStorage.getItem("user-token") || "",
  status: "",
  hasLoadedOnce: false
};

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status
};

const actions = {
  [AUTH_REQUEST]: ({ commit, dispatch }, user) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_REQUEST);

      let headers = {
        Accept: "application/json",
        "Content-Type": "application/json"
      };
      let _data = {
        method: "POST",
        body: JSON.stringify({
          Username: user.username,
          Password: user.password
        }),
        headers: headers
      };
      fetch("http://localhost:5000/api/Login", _data)
        .then(response => response.json())
        .then(response => {
          debugger; // eslint-disable-line
          console.log(response);

          localStorage.setItem("username", response.username);
          localStorage.setItem("accesstoken", response.accessToken);
          localStorage.setItem("refreshtoken", response.refreshToken);

          commit(AUTH_SUCCESS, response);
          dispatch(USER_REQUEST, response.username);
          resolve(response);
        })
        .catch(err => {
          commit(AUTH_ERROR, err);
          console.log(err);
          localStorage.removeItem("user-token");
          reject(err);
        });
    });
  },
  [AUTH_LOGOUT]: ({ commit }) => {
    return new Promise(resolve => {
      commit(AUTH_LOGOUT);
      localStorage.removeItem("user-token");
      resolve();
    });
  }
};

const mutations = {
  [AUTH_REQUEST]: state => {
    state.status = "loading";
  },
  [AUTH_SUCCESS]: (state, resp) => {
    debugger;
    state.status = "success";
    state.username = resp.username
    state.accessToken = resp.accessToken;
    state.refreshToken = resp.refreshToken;
    state.hasLoadedOnce = true;
  },
  [AUTH_ERROR]: state => {
    state.status = "error";
    state.hasLoadedOnce = true;
  },
  [AUTH_LOGOUT]: state => {
    state.accessToken = "";
    state.refreshToken = "";
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
