<template>
<div class="box">
  <div class="context">
    <van-row v-model="book">
      <van-col span="8" offset="8">{{book.name}}</van-col>
      <van-col span="24">{{book.context}}</van-col>
    </van-row>
  </div>
  <van-col span="10" offset="7" class="huanye">
    <el-button icon="el-icon-back" circle @click="houtui()"></el-button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <el-button icon="el-icon-right" circle @click="qianjin()"></el-button>
    </van-col>
</div>
</template>
<script>
var id = 0;
export default {
  created: function() {
    id = this.$route.params.id;
    this.$axios
      .get("home/contextload?bid=" + id)
      .then(res => {
        this.books = res.data.data;
        console.log(this.books);
        this.book = this.books[this.page];
      })
      .catch();
  },

  data() {
    return {
      page: 0,
      books: [],
      book: {
        name: "aaa",
        context: "cccccccccc",
        num: 0
      }
    };
  },
  methods: {
    qianjin() {
     
      if(localStorage.getItem('userifvip')==true){
          
          if(this.page>=this.books.length){
             
              alert("这是最后一章")
          }else{
              this.page+=1;
              
              this.book=this.books[this.page];
          }
      }else{
          
          if(localStorage.getItem('bookifvip')){
             
              if(this.page>=2){
                  alert("往后是vip章节，请开通vip")
              }else{
                  
                 this.page+=1;
              this.book=this.books[this.page];
              }
          }else{
             
               this.page+=1;
              this.book=this.books[this.page];
          }
      }
    },
    houtui() {
      if (this.page <= 0) {
        this.page = 0;
        this.book = this.books[0];
        alert("这是第一章");
      } else {
        this.page -= this.page;
        this.book = this.books[0];
      }
    }
  }
};
</script>
<style>
.box{
    width: 100%;
    height: 800px;
  background-image: url(
    https://img1.baidu.com/it/u=2840212519,1973465711&fm=26&fmt=auto);}
 
 
 
</style>

