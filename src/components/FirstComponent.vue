<template>
    <div>
        <p v-html="name"></p>
        <p>{{adSoyad}}</p>
        <p v-on:click.right="rightClickMethod">{{baseValues}}</p>
        <div v-for="item in todos" :key="item">
            <span v-html="item"></span>
        </div>
        <input type="button" value="sdfsd" v-on:click="denemeMethod" />
    </div>
</template>

<script>
import FirstLibrary from '../library/firstlibrary.js'
export default {
    name:"first-component",
   
    data:function() {
        return {
            message:"Merhaba",
            baseValues:FirstLibrary.scope2[0].val1

        }
    },
    props:{
        name:String,
        surname:String,
        todos:Array

    },
    computed:{
        adSoyad:function()
        {
            return this.name+' '+this.surname
        }
    },
    methods:{

        denemeMethod:function()
        {
            FirstLibrary.showAlert;
            alert('abooo');
            return false;
        },
        rightClickMethod:()=>{
            alert('right click');
        }
    }
}
</script>