import { USER_REQUEST, USER_ERROR, USER_SUCCESS } from "../actions/user";
import Vue from "vue";
import { AUTH_LOGOUT } from "../actions/auth";
import { GetWithUsername } from "../../services/apicall";

const state = { status: "", profile: {} };

const getters = {
  getProfile: state => state.profile,
  isProfileLoaded: state => !!state.profile.name
};

const actions = {
  [USER_REQUEST]: ({ commit, dispatch }, username) => {
    commit(USER_REQUEST);
debugger;
    let headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accesstoken")
    };
    GetWithUsername(
      "http://localhost:5000/api/User/",
      username,
      headers
    )
    .then(resp => {
      debugger;
      commit(USER_SUCCESS, resp);
    })
    .catch(() => {
      commit(USER_ERROR);
      // if resp is unauthorized, logout, to
      dispatch(AUTH_LOGOUT);
    });
  }
};

const mutations = {
  [USER_REQUEST]: state => {
    state.status = "loading";
  },
  [USER_SUCCESS]: (state, resp) => {
    state.status = "success";
    Vue.set(state, "profile", resp);
  },
  [USER_ERROR]: state => {
    state.status = "error";
  },
  [AUTH_LOGOUT]: state => {
    state.profile = {};
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
