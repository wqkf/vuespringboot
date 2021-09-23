<template>
<div>
    <h2>女生小说</h2>
   <van-card v-for="book in books" :key="book"
    :desc="book.title"
    :title="book.name"
    :thumb="book.img"
     :price="book.price"
>
  <template #tags>
   <van-cell title="作者" :value="book.actor"  class="actor"/>
   <van-cell  :value="book.jianjie" class="jianjie"/>
  </template>
  
</van-card>
 
<el-button type="primary" round @click="huan()">点击换一批</el-button>
</div>
</template>
<script>
let pageNum=0;
export default {
    
    created:function(){
        
         this.$axios.post('home/anload?id='+3).then(res=>{
             this.books=res.data.data
         }).catch()
     
    },
    data(){
        return{
          books:[]
          
        }
    }
    ,methods:{
         
     huan:function(){
         
         this.$axios.post('home/anload',{pageNum:pageNum,id:3}).then(res=>{
             this.books=res.data.data;
             
         }).catch()
         pageNum+=5;
     }
    }
}
</script>
<style>
.van-card{
    width: 80%;
    margin-left: 10%;
    height: 130px;
}
.van-card__thumb{
    width: 100px;
    height: 100px;
}
.el-button {
    width: 60%;
    background-color: darkgray;
    color: #000;
    font-size: 15px;
    font-weight: bold;
}
.actor{
    width: 100px;
    margin: auto;
    height: 45px;
    
}
.jianjie{
    font-size: 8px;
    text-overflow: ellipsis;
    white-space:nowrap;
    overflow: hidden;
    height: 40px;
}
</style>
