<template>
  <div class="mainDivClass">
    <p class="loginHeader">Login</p>
    <div class="inputGroup">
      <b-form-input v-model="username" class="inputClass" placeholder="Enter your mail"></b-form-input>
      <b-form-input v-model="password" class="inputClass" type="password" placeholder="Enter your password"></b-form-input>
      <b-button variant="primary" v-on:click="login()" class="btnClass">Login</b-button>
    </div>
  </div>  
</template>

<script>
import { Post } from '../../../services/apicall';

export default {
  name: 'LoginComponent',

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
        
        localStorage.setItem("UserToken", response.token);

      }).catch((error) => console.error(error))      

      debugger // eslint-disable-line

    }
  }
}
</script>

<style>
 @import "LoginComponent.css";
</style>
