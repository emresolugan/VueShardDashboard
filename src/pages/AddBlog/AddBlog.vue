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
import { Post } from '../../services/apicall';
import { GetWithID } from '../../services/apicall';
import { Put } from '../../services/apicall';

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

            Post("http://localhost:5000/api/User", consumer, headers)
                .then(response => {
                    debugger;
                    if(response == 200)
                        this.consumer = { id: 0 , name: "", surname: "", mobilephone: "", ip: "", mac: ""};
                }).catch((error) => console.error(error)) 
          }  
          else
          {
            let consumer = {  id: this.consumer.id , name: this.consumer.name, surname: this.consumer.surname, mobilephone: this.consumer.mobilephone, ip: this.consumer.ip, mac: this.consumer.mac };
            let headers = {'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("accesstoken")};

            Put("http://localhost:5000/api/User", consumer, headers)
                .then(response => {
                }).catch((error) => console.error(error)) 
          }      
      },
      getConsumerData(id) {
          let headers = {'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("accesstoken")};
          GetWithID("http://localhost:5000/api/User/GetSelectedConsumer/", id, headers).then(response => {
            debugger // eslint-disable-line
            this.consumer = { id: response[0].id, name: response[0].name, surname: response[0].surname, mobilephone: response[0].mobilephone, ip: response[0].ip, mac: response[0].mac };
          }).catch((error) => console.error(error));       
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
 @import "../../assets/styles/css/AddBlog.css";
</style>