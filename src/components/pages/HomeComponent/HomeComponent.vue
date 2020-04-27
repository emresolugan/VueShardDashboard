<template>
  <div class="hello">
    <img alt="Vue logo" src="../../../assets/logo.png">
    <div class="links">
      <router-link to="/login">Login Link</router-link>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <b-button variant="outline-primary" v-on:click="routeFunc('/login')">Login Button</b-button>
    </div>
    <div class="tableDiv">
      <div class="input-group mb-3">
          <input type="text" class="form-control searchBarClass" placeholder="Search Bar" aria-label="SearchBar"/>
      </div>
      <table class="table table-striped table-bordered clientTableClass">
          <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">City</th>
                <th scope="col">Country</th>
                <th scope="col">IP</th>
                <th scope="col">MAC</th>
                <th scope="col" colSpan="2" class="iconColClass"><i class="fa fa-plus-circle fa-2x addIconClass"></i></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Michael Collins</td>
              <td>Sunnyvale Street 8A</td>
              <td>Philadelpia</td>
              <td>USA</td>
              <td>192.168.1.1</td>
              <td>6A8C:SSS6.....</td>
              <td class="iconColClass"><i class="fa fa-edit fa-lg editIconClass"></i></td>
              <td class="iconColClass"><i class="fa fa-minus-circle fa-lg deleteIconClass"></i></td>
            </tr>
            <tr>
              <td>Ahmet Akın</td>
              <td>Güneş Mahallesi, Tuzla</td>
              <td>İstanbul</td>
              <td>Türkiye</td>
              <td>192.122.2.7</td>
              <td>78HN:43FGF.....</td>
              <td class="iconColClass"><i class="fa fa-edit fa-lg editIconClass"></i></td>
              <td class="iconColClass"><i class="fa fa-minus-circle fa-lg deleteIconClass"></i></td>
            </tr>
            <tr>
              <td>Ali Altan</td>
              <td>Erzene Mah. Bornova</td>
              <td>İzmir</td>
              <td>Türkiye</td>
              <td>192.154.3.2</td>
              <td>24TG:FG33.....</td>
              <td class="iconColClass"><i class="fa fa-edit fa-lg editIconClass"></i></td>
              <td class="iconColClass"><i class="fa fa-minus-circle fa-lg deleteIconClass"></i></td>
            </tr>
            <tr>
              <td>Ebru Destan</td>
              <td>Kahramanlar Mahallesi Dinçer Sokak</td>
              <td>İzmir</td>
              <td>Türkiye</td>
              <td>192.244.9.6</td>
              <td>RERE:344D.....</td>
              <td class="iconColClass"><i class="fa fa-edit fa-lg editIconClass"></i></td>
              <td class="iconColClass"><i class="fa fa-minus-circle fa-lg deleteIconClass"></i></td>
            </tr>
          </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  props: {
    msg: String
  },

  methods: {
    routeFunc: function (path) {
      // catch unhandled promise hatası için
      this.$router.push(path).catch(e => {});
    }
  }
}
</script>

<style>
 @import "HomeComponent.css";
</style>
