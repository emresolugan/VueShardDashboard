<template>
  <PageHeader :title="this.title" :subTitle="this.subTitle"></PageHeader>
</template>

<script>
import PageHeader from "../../components/main/PageHeader";
import { GetWithID } from '../../services/apicall';
import { AxiosGetWithId } from '../../services/axios';
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
    //console.log(this.$store.state.tokenModule.token);

    let headers = {'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("accesstoken")};
    /*GetWithID("http://localhost:5000/api/User/", "emre", headers)
    .then(response => {
      debugger;
      if(typeof response == "number")
      {
        if(response == 401)
        {
          // route to login
        }
        else if(response == 403)
        {
          // do something
        }
      }
      else
      {
        debugger // eslint-disable-line
        console.log(response);
      }

    }).catch((error) => console.error(error)) */

    AxiosGetWithId("http://localhost:5000/api/User/", "emre", headers).
    then(response => {
      debugger;
      // do something with resposne.data
    }).catch(error => 
    {
      if(error.response.status == 401)
      {
        // route to login
      }
      else if(error.response.status == 403)
      {
        // yetki yok birşeyler yap
      }
      else
      {
        // genel errorlar için birşeyler yapılabilir
      }
      debugger;
    })
  }
};
</script>