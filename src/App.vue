<template>
    <DefaultLayout>
       <router-view></router-view>
    </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/Default'

export default {
  name: 'App',
  components: {
    DefaultLayout
  },
  data:function(){
return {
  todos:['O','Bu','Şu']
}
  }
}
</script>

