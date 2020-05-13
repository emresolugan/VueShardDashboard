<template>
  <DefaultLayout>
    <router-view></router-view>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout";

export default {
  name: "App",
  components: {
    DefaultLayout
  },
  data: {
    
  }
};
</script>

