<template>
  <div>
    <van-nav-bar
      title="我的圈子"
      left-text="返回"
      right-text="+"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div id="juzhong">
      <p id="cuti">这里是你加入的圈子动态</p>
      <p id="daxiao">先加入一些感兴趣的圈子吧</p>
      <br>
      <van-row>
        <van-col span="6">
          <van-image round width="4rem" height="4rem" src="https://img01.yzcdn.cn/vant/cat.jpeg"/>
        </van-col>
        <van-col span="6">
          <van-image round width="4rem" height="4rem" src="https://img01.yzcdn.cn/vant/cat.jpeg"/>
        </van-col>
        <van-col span="6">
          <van-image round width="4rem" height="4rem" src="https://img01.yzcdn.cn/vant/cat.jpeg"/>
        </van-col>
        <van-col span="6">
          <van-image round width="4rem" height="4rem" src="https://img01.yzcdn.cn/vant/cat.jpeg"/>
        </van-col>
      </van-row>
      <br>
      <br>
      <van-button type="info" to="/circles">查看更多圈子</van-button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.push("/found")
    },
    onClickRight() {
      Toast("按钮");
    }
  }
};
</script>
<style>
#daxiao {
  font-size: 12px;
}
#cuti {
  font-size: 15px;
  font-weight:800;
}
#juzhong {
  background-color: #c9d6ff;
  text-align: center;
  margin-top: 200px;
}
</style>


