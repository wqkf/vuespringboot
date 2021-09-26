<template>
  <div>
    <van-nav-bar
      title="朋友的想法"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-empty image="search" description/>
    <h4>你有30个微信朋友正在读书</h4>
    <van-button type="info" id="anniu" to="/friends">关注微信朋友</van-button>
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
#anniu {
  width: 250px;
}
</style>


