<template>
  <div>
    <van-row id="gaodu">
      <van-col span="3">
        <van-icon name="arrow-left" @click="fangfa"/>
      </van-col>
      <van-col span="10" offset="4">圈子&nbsp;&nbsp;&nbsp;帖子</van-col>
    </van-row>
    <p id="daxiao">推荐的圈子</p>
    <br>
    <van-row id="juli" v-for="(list,index) in arrlist" :key="index">
      <van-col span="4">
        <van-image round width="3rem" height="3rem" :src="list.price"/>
      </van-col>
      <van-col span="8"><p id="wan">{{list.name}}</p><p id="two">{{list.xiaozi}}</p></van-col>
      <van-col span="6"></van-col>
      <van-col span="6">
          <van-button round type="info">+&nbsp;加&nbsp;入</van-button>
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  data(){
    return{
      arrlist:[]
    }
  },
  created:function(){
    this.$http
    .get('http://localhost:8081/selectAll3')
    .then(response=>{
      this.arrlist=response.data
    })
    .catch();
  },
   methods: {
    fangfa() {
        this.$router.push("/circle")
    }
  },
};
</script>
<style>
#wan{
    text-align: left;
    font-size: 14px;
    font-weight: 800;
}
#two{
    font-size: 6px;
}
#juli {
  height: 60px;
  line-height: 6px;
}
#gaodu {
  height: 30px;
  font-weight: 800;
}
#daxiao {
  font-size: 10px;
  font-weight: 800;
  text-align: left;
  width: 400px;
  margin-left: 10px;
}
</style>

