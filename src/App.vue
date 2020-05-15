<template>
  <DefaultLayout>
    <router-view></router-view>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "./layouts/DefaultLayout";
import { USER_REQUEST } from "./store/actions/user";

export default {
  name: "App",
  components: {
    DefaultLayout
  },
  created: function() {
    if (this.$store.getters.isAuthenticated) {
      this.$store.dispatch(USER_REQUEST);
    }
  }
};
</script>

