<template>
  <div id="app">
    
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000">
  <van-tabbar-item icon="home-o" to="/">主页</van-tabbar-item>
  <van-tabbar-item icon="coupon-o" to="/bookrack">书架</van-tabbar-item>
  <van-tabbar-item icon="friends-o" to="/userInfo">好友</van-tabbar-item>
  <van-tabbar-item icon="shop-collect" to="/order">购物车</van-tabbar-item>
  <van-tabbar-item icon="setting-o" to="/order">设置</van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  
}
</style>
