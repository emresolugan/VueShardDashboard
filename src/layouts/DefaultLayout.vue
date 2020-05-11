<template>
  <div class="container-fluid">
    <div class="row">
      <MainSideBar />
      <main class="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
        <div class="main-navbar sticky-top bg-white">
          <MainNavyBar />
        </div>
        <div class="main-content-container container-fluid px-4">
        <slot/>
        </div>
        <PageFooter />
      </main>
    </div>
  </div>
</template>

<script>
import MainSideBar from "@/components/main/SideBar";
import MainNavyBar from "@/components/main/MainNavyBar";
import PageFooter from "@/components/main/PageFooter";


export default {
  name: "default-layout",
  components: {
    MainSideBar,
    MainNavyBar,
    PageFooter
  }
};
</script>