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

      let headers = {
        Accept: "application/json",
        "Content-Type": "application/json"
      };
      let _data = {
        method: "POST",
        body: JSON.stringify({
          Username: this.username,
          Password: this.password
        }),
        headers: headers
      };
      fetch("http://localhost:5000/api/Login", _data)
        .then(response => response.json())
        .then(response => {
          debugger; // eslint-disable-line
          console.log(response);

          const { username, password } = this;
          this.$store
            .dispatch(AUTH_REQUEST, { username, password })
            .then(() => {
              this.$router.push("/");
            });

          localStorage.setItem("accesstoken", response.accessToken);
          localStorage.setItem("refreshtoken", response.refreshToken);
          this.$store.dispatch("tokenModule/setToken", response.accessToken);
          console.log(this.$store);
        })
        .catch(error => console.error(error));
    }
  }
};
</script>

<style>
@import "../../assets/styles/css/LoginScreen.css";
</style>

