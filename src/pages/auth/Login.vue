<template>
  <div class="card mainCardClass">
    <div class="card-body cardBodyClass">
      <p class="loginHeader">Login</p>
      <div class="inputGroup">
        <div class="form-group">
          <input
            type="email"
            v-model="username"
            class="form-control"
            placeholder="Enter your username"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            v-model="password"
            class="form-control"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" class="btn btn-primary btnClass" v-on:click="login()">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
import { AUTH_REQUEST } from "../../store/actions/auth";

export default {
  name: "LoginScreen",

  data() {
    return {
      username: "",
      password: ""
    };
  },

  methods: {
    login: function() {
      debugger;

      const { username, password } = this;
      this.$store.dispatch(AUTH_REQUEST, { username, password }).then(() => {
        this.$router.push("/")
      });
    }
  }
};
</script>

<style>
@import "../../assets/styles/css/LoginScreen.css";
</style>

