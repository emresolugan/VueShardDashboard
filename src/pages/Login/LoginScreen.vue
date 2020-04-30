<template>
  <div class="card mainCardClass">
    <div class="card-body cardBodyClass">
      <p class="loginHeader">Login</p>
      <div class="inputGroup">
        <div class="form-group">
          <input type="email" v-model="username" class="form-control inputClass" placeholder="Enter your username" aria-describedby="emailHelp">
        </div>
        <div class="form-group">
          <input type="password"  v-model="password" class="form-control inputClass" placeholder="Enter your password">
        </div>
        <button type="submit" class="btn btn-primary btnClass" v-on:click="login()">Login</button>
      </div>
    </div>
  </div>
 
</template>

<script>
import { Post } from '../../services/apicall';

export default {
  name: 'LoginScreen',

  data() {
   return {
     username: "",
     password: ""
    }
  },

  methods: {
    login: function () {
      debugger // eslint-disable-line

      Post("http://localhost:5000/api/Login", { username: this.username, password: this.password })
      .then((response) => response.json())
      .then(response => {

        debugger // eslint-disable-line
        console.log(response);

        this.$store.dispatch('tokenModule/setToken', response.token);
        console.log(this.$store);

      }).catch((error) => console.error(error)) 

    }
  }
  
}
</script>

<style>
  @import "../../assets/styles/css/LoginScreen.css";
</style>

