<template>
<div>
    <h2>小说分类</h2>
   
 <van-grid direction="horizontal" :column-num="1" v-for="book in books" :key="book"> 
  <van-grid-item :text="book.name" />
  

 
   <van-grid :gutter="40" icon-size="100px">
  <van-grid-item v-for="value in book.books" :key="value" :icon="value.bimg" :text="value.bname" />
</van-grid>
</van-grid>
  


</div>
</template>
<script>
let pageNum=0;
export default {
    
    created:function(){
        
         this.$axios.post('home/fenlei').then(res=>{
             this.books=res.data.data
         }).catch()
     
    },
    data(){
        return{
          books:[{
              name:''
              ,bookn:[]
               }
              
          ]
           
         
          
        }
    }
    ,methods:{
         
     huan:function(){
         
         this.$axios.post('home/anload',{pageNum:pageNum,id:1}).then(res=>{
             this.books=res.data.data;
             console.log(this.books)
             
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
.van-grid-item{
   flex-basis: 30%
}
</style>
