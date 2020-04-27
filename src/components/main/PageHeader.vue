<template>
  <div class="page-header row no-gutters py-4">
    <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
      <span v-if="this.subTitle" class="text-uppercase page-subtitle">{{this.subTitle}}</span>
      <h3 v-if="this.title" class="page-title">{{this.title}}</h3>
    </div>
  </div>
</template>



<script>
export default {
  name:"page-header",
  props:{
    subTitle:String,
    title:String
  }
}
</script>
