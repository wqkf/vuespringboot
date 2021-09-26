<template>
  <div>
    <van-nav-bar
      title="订阅的公众号"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <br>
    <van-row id="daxiao">
      <van-col span="12" @click="shuju">更新</van-col>
      <van-col span="12">收藏</van-col>
    </van-row>
    <br>
    <!-- <div> -->
    <van-row v-for="(lists,index) in list" :key="index">
      <van-col span="18">
        <p id="gujian">{{lists.name}}</p>
        <p id="wenzi">{{lists.xiangqing}}</p>
        <p id="shijian">{{lists.shijian}}</p>
        <br>
      </van-col>
      <van-col span="6">
        <van-image id="tp" width="70" height="70" :src="lists.price"/>
      </van-col>
    </van-row>
    <!-- </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: []
    };
  },
  created: function() {
    this.$http
      .get("http://localhost:8081/selectAll1")
      .then(response => {
        this.list = response.data;
      })
      .catch();
  },
  methods: {
    onClickLeft() {
      this.$router.push("/found");
    },
    onClickRight() {
      Toast("按钮");
    },
    shuju:function(){
      this.$http
      .get("http://localhost:8081/selectAll1")
      .then(response => {
        this.list = response.data;
      })
      .catch();
    }
  }
};
</script>
<style>
#shijian {
  font-size: 12px;
  text-align: left;
  margin: 0px;
  margin-left: 20px;
  margin-top: 10px;
}
#wenzi {
  font-size: 14px;
  text-align: left;
  margin: 0px;
  margin-left: 20px;
  font-weight: bolder;
  margin-top: 10px;
}
#gujian {
  font-size: 10px;
  margin: 0px;
  text-align: left;
  margin-left: 20px;
}
#tp {
  margin-top: 20px;
  margin-left: 20px;
}
#daxiao {
  font-size: 13px;
  font-weight: 800;
}
</style>


