<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="默认">
        <van-grid :border="false" :column-num="3">
          <van-grid-item>
            <van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg"/>
            <p>woshishabi</p>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.yzcdn.cn/vant/apple-2.jpg"/>
            <p>woshishabi</p>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.yzcdn.cn/vant/apple-3.jpg"/>
            <p>woshishabi</p>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.yzcdn.cn/vant/apple-3.jpg"/>
            <p>woshishabi</p>
          </van-grid-item>
        </van-grid>
      </van-tab>
      <van-tab title="更新">
        <van-grid :border="false" :column-num="3">
          <van-grid-item>
            <van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg"/>
            <p>woshishabi</p>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.yzcdn.cn/vant/apple-2.jpg"/>
            <p>woshishabi</p>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.yzcdn.cn/vant/apple-3.jpg"/>
            <p>woshishabi</p>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.yzcdn.cn/vant/apple-3.jpg"/>
            <p>woshishabi</p>
          </van-grid-item>
        </van-grid>
      </van-tab>
      <van-tab title="进度">
        <van-grid :border="false" :column-num="3">
          <van-grid-item>
            <van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg"/>
            <p>woshishabi</p>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.yzcdn.cn/vant/apple-2.jpg"/>
            <p>woshishabi</p>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.yzcdn.cn/vant/apple-3.jpg"/>
            <p>woshishabi</p>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.yzcdn.cn/vant/apple-3.jpg"/>
            <p>woshishabi</p>
          </van-grid-item>
        </van-grid>
      </van-tab>
      <van-tab title="购买">
        <van-grid :border="false" :column-num="3">
          <van-grid-item>
            <van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg"/>
            <p>woshishabi</p>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.yzcdn.cn/vant/apple-2.jpg"/>
            <p>woshishabi</p>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.yzcdn.cn/vant/apple-3.jpg"/>
            <p>woshishabi</p>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.yzcdn.cn/vant/apple-3.jpg"/>
            <p>woshishabi</p>
          </van-grid-item>
        </van-grid>
      </van-tab>
      <van-tab title="分类">
        <van-grid :border="false" :column-num="3">
          <van-grid-item>
            <van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg"/>
            <p>woshishabi</p>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.yzcdn.cn/vant/apple-2.jpg"/>
            <p>woshishabi</p>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.yzcdn.cn/vant/apple-3.jpg"/>
            <p>woshishabi</p>
          </van-grid-item>
          <van-grid-item>
            <van-image src="https://img01.yzcdn.cn/vant/apple-3.jpg"/>
            <p>woshishabi</p>
          </van-grid-item>
        </van-grid>
      </van-tab>
    </van-tabs>
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


