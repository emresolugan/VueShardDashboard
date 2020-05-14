<template>
    
    <div class="card mainDivClass">
        <div class="inputGroupp">
            <div class="input-group mb-3">
                <input type="text" class="form-control" v-model="consumer.name" placeholder="Name"/>
            </div>
            <div class="input-group mb-3">
                <input type="text" class="form-control" v-model="consumer.surname" placeholder="Surname"/>
            </div>
            <div class="input-group mb-3">
                <input type="text" class="form-control" v-model="consumer.mobilephone" placeholder="MobilePhone"/>
            </div>
            <div class="input-group mb-3">
                <input type="text" class="form-control" v-model="consumer.ip" placeholder="IP Address"/>
            </div>
            <div class="input-group mb-3">
                <input type="text" class="form-control" v-model="consumer.mac" placeholder="MAC Address"/>
            </div>
            <br/>
            <br/>
            <button type="button" class="btn btn-primary btnClass" v-on:click="saveConsumers()">Save</button>
            <br/>
            <br/>
        </div>
    </div>

</template>

<script>
import { AxiosPost } from '../../services/axios';
import { AxiosGetWithId } from '../../services/axios';
import { AxiosPut } from '../../services/axios';

export default {
  name: "add-blog",
  data() {
      return {
          consumer: { id: 0 , name: "", surname: "", mobilephone: "", ip: "", mac: ""}
      };
  },
  methods: {
      saveConsumers() {
          if(this.consumer.id == 0)
          {
            let consumer = {  id: 0 , name: this.consumer.name, surname: this.consumer.surname, mobilephone: this.consumer.mobilephone, ip: this.consumer.ip, mac: this.consumer.mac };
            let headers = {'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("accesstoken")};

            AxiosPost("http://localhost:5000/api/User", consumer, headers)
            .then(response => {
                // buraya giriyorsa her türlü 200 dönmüştür
                this.consumer = { id: 0 , name: "", surname: "", mobilephone: "", ip: "", mac: ""};
            })
            .catch(error => {
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
            })
          }  
          else
          {
            let consumer = {  id: this.consumer.id , name: this.consumer.name, surname: this.consumer.surname, mobilephone: this.consumer.mobilephone, ip: this.consumer.ip, mac: this.consumer.mac };
            let headers = {'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("accesstoken")};

            AxiosPut("http://localhost:5000/api/User", consumer, headers)
            .then(response => {
            })
            .catch(error => {
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
            })
          }      
      },
      getConsumerData(id) {
          let headers = {'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("accesstoken")};
          AxiosGetWithId("http://localhost:5000/api/User/GetSelectedConsumer/", id, headers)
          .then(response => {
            this.consumer = { id: response.data[0].id, name: response.data[0].name, surname: response.data[0].surname, mobilephone: response.data[0].mobilephone, ip: response.data[0].ip, mac: response.data[0].mac };
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
          })          
      }
  },
  created: function (){
    if(this.$route.params.id)
    {
        this.getConsumerData(this.$route.params.id);
    }
  },
};
</script>

<style>
 @import "AddBlog.css";
</style>