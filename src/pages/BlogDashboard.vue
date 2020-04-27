<template>
  <PageHeader :title="this.title" :subTitle="this.subTitle"></PageHeader>
  
</template>

<script>
import PageHeader from "@/components/main/PageHeader";
export default {
  name: "blog-dahboard",
  data() {
      return {
          subTitle:'Mehmet',
          title:'Blog Dashboard'
      };
  },
  components: {
    PageHeader
  }
};
</script>

<style>
</style>