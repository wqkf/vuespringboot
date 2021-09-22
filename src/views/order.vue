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
    <div  v-for="cart in carts">
      <van-swipe-cell >
          <van-checkbox v-model="checked"/>
        <van-card
          :num="cart.shuliang"
          :price="cart.price"
          :desc="cart.jianjie"
          :title="cart.name"
          :thumb="cart.img"
        />
        <template #right>
          <van-button square text="删除" type="danger" class="delete-button"/>
        </template>
      </van-swipe-cell>
    </div>
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
      show: false,
      carts:[
          {
           shuliang:"21",
          price:"2.00",
          jianjie:"描述信息",
          name:"商品标题",
          img:"https://img01.yzcdn.cn/vant/cat.jpeg"
      },
       {
           shuliang:"31",
          price:"21.00",
          jianjie:"描述信息",
          name:"商品标题",
          img:"https://img01.yzcdn.cn/vant/cat.jpeg"
      },
      {
           shuliang:"41",
          price:"22.00",
          jianjie:"描述信息",
          name:"商品标题",
          img:"https://img01.yzcdn.cn/vant/cat.jpeg"
      },
      ]
    };
  },

  methods: {
    showPopup() {
      this.show = true;
    }
  },
  created: function(){
      this.$axios
      .get('carts')
      .then(res=>{
          if(res.data.statusCode==200){
              alert(res);
              this.carts=res.data.data;
          }
      })
      .catch(error=>{
          console.log(error);
      })
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

