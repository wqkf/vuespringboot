<template>
  <div>
    <div>
      <router-link to="/mybook">我的书单</router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to="/storebook">收藏的书单</router-link>
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 2
    };
  }
};
</script>

<style>
</style>