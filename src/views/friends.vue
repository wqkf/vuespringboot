<template>
  <div>
    <van-nav-bar
      title="微信朋友"
      left-text="返回"
      right-text="管理"
      left-arrow
      @click-left="onClickLeft"
    />
    <form action="/">
  <van-search
    v-model="value"
    show-action
    placeholder="请输入搜索关键词"
    @search="onSearch"
    @cancel="onCancel"
  />
</form>
    <van-row  v-for="(alls,index) in alllist" :key="index">
      <van-col span="3" id="tp">
        <van-image round width="2rem" height="2rem" :src="alls.price"/>
      </van-col>
      <van-col span="4">
        <span class="custom-title">{{alls.name}}</span>
      </van-col>
      <van-col span="12"></van-col>
      <van-col span="5">
        <van-button id="anniu" round type="info">+ 关注</van-button>
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      alllist:[],
    };
  },
  created:function(){
    this.$axios
    .get('/selectAll')
    .then(response=>{
      console.log(response)
     this.alllist= response.data
     console.log(this.alllist)
    })
    .catch();
  },
  methods: {
    onClickLeft() {
      this.$router.push("/friend")
    },onSearch(val) {
      this.$axios
      .get("/selectAll7/"+this.value)
      .then(response=>{
        this.alllist=response.data;
      })
      .catch();
    },
    onCancel() {
      Toast('取消');
    },
  },
};
</script>
<style>
#anniu {
  text-align: right;
  width: 75px;
  height: 25px;
}
#tp {
  /* text-align: left; */
}
.custom-title {
  margin-right: 4px;
  /* vertical-align: baseline; */
  text-align: center;
}
</style>

