<template>
  <!--<PageHeader :title="this.title" :subTitle="this.subTitle"></PageHeader>-->

   <div class="hello">
    <div class="card tableDiv">
      <div class="card-body cardBodyClass">
        <button type="button" class="btn btn-primary createpdfBtn" v-on:click="createPDF()">Create PDF</button>
        <button type="button" class="btn btn-primary pdfBtn" v-on:click="exportPDF()">Export PDF</button>
        <div class="input-group mb-3">
            <input type="text" class="form-control searchBarClass" v-on:keyup="searchConsumers($event)" placeholder="Search Bar" aria-label="SearchBar"/>
        </div>
        <br/>

        <p class="tabText" v-on:click="switchTables('first')">First Table</p> |  
        <p class="tabText" v-on:click="switchTables('second')">Second Table</p>
        <hr/>
        <table v-if="firstTableShowing" class="table table-striped table-bordered clientTableClass" id="pdfScreen">
            <thead>
              <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Surname</th>
                  <th scope="col">MobilePhone</th>
                  <th scope="col">IP</th>
                  <th scope="col">MAC</th>
                  <th scope="col" colSpan="2" data-html2canvas-ignore="true" class="iconColClass"><i class="fa fa-plus-circle fa-2x addIconClass" v-on:click="routeFunc('/addblog')"></i></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in consumerList" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.surname }}</td>
                <td>{{ item.mobilephone }}</td>
                <td>{{ item.ip }}</td>
                <td>{{ item.mac }}</td>
                <td class="iconColClass" data-html2canvas-ignore="true"><i class="fa fa-edit fa-lg editIconClass" v-on:click="routeFunc('/addblog/' + item.id)"></i></td>
                <td class="iconColClass" data-html2canvas-ignore="true"><i class="fa fa-minus-circle fa-lg deleteIconClass" v-on:click="deleteConsumer(item.id)"></i></td>
              </tr>
            </tbody>
        </table>
        <table v-if="secondTableShowing" class="table table-striped table-bordered clientTableClass">
            <thead>
              <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Surname</th>
                  <th scope="col" colSpan="2" data-html2canvas-ignore="true" class="iconColClass"><i class="fa fa-plus-circle fa-2x addIconClass"></i></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>22</td>
                <td>Metin</td>
                <td>Kahraman</td>
                <td class="iconColClass" data-html2canvas-ignore="true"><i class="fa fa-edit fa-lg editIconClass"></i></td>
                <td class="iconColClass" data-html2canvas-ignore="true"><i class="fa fa-minus-circle fa-lg deleteIconClass"></i></td>
              </tr>              
              <tr>
                <td>23</td>
                <td>Selim</td>
                <td>Güneş</td>
                <td class="iconColClass" data-html2canvas-ignore="true"><i class="fa fa-edit fa-lg editIconClass"></i></td>
                <td class="iconColClass" data-html2canvas-ignore="true"><i class="fa fa-minus-circle fa-lg deleteIconClass"></i></td>
              </tr>
            </tbody>
        </table>
      </div>
    </div>
    <br/>
    <div class="card" v-if="firstTableShowing">
      <div class="card-body" style="padding-bottom: 0;">
        <div v-if="pageCount < 7" class="pagingArea">
          <p class="pagingNumbers" v-on:click="goBeforePage()"><</p>
          <p class="pagingNumbers" v-on:click="goSelectedPage(index)" v-for="index in pageCount" :key="index">{{ index }}</p>
          <p class="pagingNumbers" v-on:click="goNextPage()">></p>
        </div>
        <div v-if="pageCount >= 7" class="pagingArea">
          <p class="pagingNumbers" v-on:click="goBeforePage()"><</p>
          <p class="pagingNumbers" v-on:click="goSelectedPage(1)">1</p>
          <p class="pagingNumbers" v-on:click="goSelectedPage(2)">2</p>
          <p class="pagingNumbers">...</p>
          <p class="pagingNumbers" v-on:click="goSelectedPage(pageCount - 1)">{{ pageCount - 1 }}</p>
          <p class="pagingNumbers" v-on:click="goSelectedPage(pageCount)">{{ pageCount }}</p>
          <p class="pagingNumbers" v-on:click="goNextPage()">></p>
        </div>
        <div class="form-group inputClass">
          <input type="text" v-model="selectedPage" v-on:keyup="goEnteredPage($event)" class="form-control " placeholder="Ex: 3">
        </div>
      </div>
    </div>
    <br/>
    <br/>
  </div>
  
</template>

<script>
import PageHeader from "@/components/main/PageHeader";
import jspdf from 'jspdf' 
import 'jspdf-autotable'
import html2canvas from "html2canvas"
import { GetAll } from '../../services/apicall';
import { Delete } from '../../services/apicall';

export default {
  name: "blog-dahboard",
  data() {
      return {
        consumerList: [],
        copyConsumerList: [],
        pageNum: 1,
        pageDataCount: 2,
        pageCount: 0,
        selectedPage: "",
        firstTableShowing: true,
        secondTableShowing: false

      };
  },
  components: {
    PageHeader
  },
  methods: {
    exportPDF: function () {
      var data = document.getElementById('pdfScreen');  
      html2canvas(data).then(canvas => { 
    
        const contentDataURL = canvas.toDataURL('image/png')  
        const pdf = new jspdf('p','pt', 'a4'); 
        const imgProps= pdf.getImageProperties(contentDataURL);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.text("Hello World", 260, 20)
        var position = 50;  
        pdf.addImage(contentDataURL, 'PNG', 0, position, pdfWidth, pdfHeight)
        pdf.text("Hello World", 260, 290)
        pdf.save('table.pdf'); // Generated PDF   
      }); 
    },

    createPDF: function () {
      var doc = new jspdf('p','pt', 'a4');

      doc.text("Hello World", 260, 20)
      doc.autoTable({ html: '#pdfScreen' })

      doc.save('sample-file.pdf');
    
    },

    getConsumers: function (){
      let headers = {'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("accesstoken")};
      GetAll("http://localhost:5000/api/User/GetAll", headers).then(response => {
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
          debugger;
          this.copyConsumerList = response.slice();
          this.consumerList = response.slice(0, 2);
          this.pageCount = Math.ceil(this.copyConsumerList.length / 2); // ceil yukarıya yuvarlar
        }
      });

    },

    searchConsumers(event)
    {
      debugger // eslint-disable-line
      if(event.target.value == "")
      {
        this.consumerList = [];
        this.consumerList = this.copyConsumerList.slice();
      }
      else
      {
        this.consumerList = [];

        for(let i in this.copyConsumerList)
        {
          if(this.copyConsumerList[i].id.toString().toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()))
          {
            this.consumerList.push(this.copyConsumerList[i]);
          }
          else if(this.copyConsumerList[i].name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()))
          {
            this.consumerList.push(this.copyConsumerList[i]);
          }
          else if(this.copyConsumerList[i].surname.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()))
          {
            this.consumerList.push(this.copyConsumerList[i]);
          }
          else if(this.copyConsumerList[i].mobilephone.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()))
          {
            this.consumerList.push(this.copyConsumerList[i]);
          }
          else if(this.copyConsumerList[i].ip.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()))
          {
            this.consumerList.push(this.copyConsumerList[i]);
          }
          else if(this.copyConsumerList[i].mac.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()))
          {
            this.consumerList.push(this.copyConsumerList[i]);
          }
        }
      }
    },

    routeFunc: function (path) {
      // catch unhandled promise hatası için
      this.$router.push(path).catch(e => {});
    },

    goNextPage: function () {
      if(this.pageNum < this.pageCount)
      {
        this.consumerList = [];
        this.consumerList = this.copyConsumerList.slice(this.pageNum * this.pageDataCount, (this.pageNum + 1) * this.pageDataCount);
        this.pageNum++;
      }
      else
      {
        alert("Oops!! Last Page..");
      }
    },

    goBeforePage: function () {
      if(this.pageNum >= 1)
      {
        this.consumerList = [];
        this.consumerList = this.copyConsumerList.slice((this.pageNum - 1) * this.pageDataCount, this.pageNum * this.pageDataCount);
        this.pageNum--;
      }
      else
      {
        alert("Oops!! Last Page..");
      }
    },

    goSelectedPage(val)
    {
      this.consumerList = [];
      this.consumerList = this.copyConsumerList.slice((val - 1) * this.pageDataCount, (val) * this.pageDataCount);
      this.pageNum = val;
    },

    goEnteredPage(event)
    {
      debugger;
      if(Number(event.target.value) < 1 || Number(event.target.value) > this.pageCount)
      {
        alert("Index is out of range!!");
      }
      else
      {
        this.consumerList = [];
        this.consumerList = this.copyConsumerList.slice((Number(event.target.value) - 1) * this.pageDataCount, (Number(event.target.value)) * this.pageDataCount);
        this.pageNum = Number(event.target.value);
      }
    },

    switchTables(val)
    {
      if(val == "first")
      {
        this.firstTableShowing = true;
        this.secondTableShowing = false;
      }
      else if(val == "second")
      {
        this.firstTableShowing = false;
        this.secondTableShowing = true;
      }
    },

    deleteConsumer(id){
      debugger;
      let headers = {'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("accesstoken")};
      Delete("http://localhost:5000/api/User/", id, headers)
      .then(response => {
        if(response == 200)
         this.consumerList.splice(this.consumerList.findIndex(x => x.id == id), 1);
      }).catch((error) => console.error(error))        
    }

  },
  created: function (){
    this.getConsumers();
  },
};
</script>

<style>
 @import "BlogDashboard.css";
</style>