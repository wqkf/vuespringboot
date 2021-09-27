<template>
  <div>
    <van-nav-bar title="福利场" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <br>
    <van-cell-group inset v-for="(list,index) in lists" :key="index">
      <van-image width="414" height="100" :src="list.price"/>
      <van-row>
        <van-col span="8">
          <p id="meiri">{{list.name}}</p>
          <p id="tiaozhan">{{list.xiaozi}}</p>
        </van-col>
        <van-col span="8"></van-col>
        <van-col span="8" id="wan">
            <van-button round type="info">{{list.anniu}}</van-button>
        </van-col>
      </van-row>
      <br>
    </van-cell-group>
  </div>
</template>
<script>
export default {
  data(){
    return{
      lists:[]
    }
  },
  created:function(){
    this.$axios
    .get('/selectAll2')
    .then(response=>{
      this.lists=response.data
    })
    .catch();
  },
  methods: {
    onClickLeft() {
      this.$router.push("/found");
    }
  }
};
</script>
<style>
#wan{
    width: 80px;
    height: 10px;
    margin-top: 10px;
    margin-left: 40px;
    font-size: 12px;
}
#meiri {
  font-weight: 800;
  font-size: 15px;
  margin: 0px;
  text-align: left;
  margin-left: 10px;
  margin-top: 10px;
}
#tiaozhan {
  /* font-weight: 800; */
  font-size: 12px;
  margin: 0px;
  text-align: left;
  margin-left: 10px;
  margin-top: 5px;
}
</style>


