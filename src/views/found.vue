<template>

  <div>
    <h4>发现</h4>
    <van-cell-group inset id="biaoti">
      <van-cell value to="/friend">
        <van-icon name="smile"/>朋友的想法
      </van-cell>
      <p/>
      <van-cell value to="/circle">
        <van-icon name="cluster"/>小圈子
      </van-cell>
      <p/>
      <van-cell value to="/public">
        <van-icon name="like"/>订阅的公众号
      </van-cell>
      <p/>
      <van-cell value="<<窗外>>" to="/free">
        <van-icon name="card"/>免费领书
      </van-cell>
      <p/>
      <van-cell value="好书好礼等你翻" to="/welfare">
        <van-icon name="diamond"/>福利场
      </van-cell>
      <van-grid :border="false" :column-num="2">
        <van-grid-item>
          <p id="duiqi">
            <van-icon name="shopping-cart"/><span>纸书特价</span>
          </p>
          <div v-for="(list,index) in arrlist" :key="index">
            <van-image :src="list.price" id="tupian"/>
            <p class="shuming">{{list.name}}</p>
            <p class="jiage">
              ￥{{list.jiage}}&nbsp;
              <van-tag plain type="primary">{{list.zhekou}}</van-tag>
            </p>
          </div>
        </van-grid-item>
        <van-grid-item>
          <p id="duiqi">
            <van-icon name="service"/>微信听书
          </p>
          <van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg" class/>
          <p class="shuming">穿越远古大陆</p>
          <p class="jiage">
            <van-tag plain type="primary">免费收听</van-tag>
          </p>
        </van-grid-item>
      </van-grid>
    </van-cell-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arrlist: [],
      uid: 1
    };
  },
  created: function() {
    this.$http
      .get("/selectAll6", { params: { uid: this.uid } })
      .then(response => {
        this.arrlist = response.data;
        console.log(this.arrlist);
      })
      .catch();
  },
};
</script>
<style>
#tupian {
  width: 175px;
  height: 139px;
}
#biaoti {
  font-weight: 800;
}
#duiqi {
  text-align: left;
  /* vertical-align: top; */
  /* font-size: 15px; */

  width: 175px;
}
.shuming {
  height: 10px;
  width: 175px;
  font-size: 13px;
}
.jiage {
  height: 20px;
  width: 175px;
  font-size: 10px;
}
</style>


