<template>
  <div>
    <van-cell is-link @click="showPopup">添加收获地址</van-cell>
    <van-popup v-model="show" position="top" :style="{ height: '90%' }">
      <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
      />
    </van-popup>
    
      <van-swipe-cell>
          <van-checkbox v-model="checked"/>
        <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          class="goods-card"
          thumb="https://img01.yzcdn.cn/vant/cat.jpeg"
        />

        <template #right>
          <van-button square text="删除" type="danger" class="delete-button"/>
        </template>
      </van-swipe-cell>
 

    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
      <template #tip>
        <span @click="showPopup">修改地址</span>
      </template>
    </van-submit-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: true,
      searchResult: [],
      show: false
    };
  },

  methods: {
    showPopup() {
      this.show = true;
    }
  },
  onSave() {
    Toast("save");
  },
  onDelete() {
    Toast("delete");
  },
  onChangeDetail(val) {
    if (val) {
      this.searchResult = [
        {
          name: "黄龙万科中心",
          address: "杭州市西湖区"
        }
      ];
    } else {
      this.searchResult = [];
    }
  }
};
</script>
<style>
.goods-card {
  margin: 0;
  background-color: @white;
}

.delete-button {
  height: 100%;
}
</style>

