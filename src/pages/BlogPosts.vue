<template>
  <PageHeader :title="this.title" :subTitle="this.subTitle"></PageHeader>
</template>

<script>
import PageHeader from "@/components/main/PageHeader";
export default {
  name: "blog-posts",
  data() {
      return {
          subTitle:'Emre id:'+ this.id,
          title:'Blog Posts'
      };
  },
  props:{
      id:String
  },
  components: {
    PageHeader
  },
  created() { 
     debugger // eslint-disable-line
    console.log(this.$store.state.tokenModule.token);
  }
};
</script>