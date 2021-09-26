<template>
         <div class="context">
    <van-row v-model="book">
  <van-col span="8" offset="8">{{book.name}}</van-col>
  <van-col span="24">{{book.context}}</van-col>
  
</van-row>
<el-button icon="el-icon-back" circle @click="houtui()"></el-button>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<el-button icon="el-icon-right" circle @click="qianjin()"></el-button>
</div>
</template>
<script>
export default {
    data(){
        return{
            book:{
                name:'aaa'
                ,context:'cccccccccc'
                ,num:0
            }
        }
    }
    ,methods:{
        qinjin(){
        
        }
        ,houtui(){

        }
    }
}
</script>
<style>
.context{
  background-image: url(https://img0.baidu.com/it/u=1620494623,424751767&fm=26&fmt=auto);
}
</style>

