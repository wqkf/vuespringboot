
<template>
  <div>
    <van-cell is-link @click="showPopup">添加联系人</van-cell>
    <van-popup v-model="show" position="top" :style="{ height: '70%' }">
      <van-address-edit
        :area-list="areaList"
        show-postal
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
        @change-default="onChangeDefault"
      />
    </van-popup>

    <div v-for="cart in carts">
      <van-swipe-cell>
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
      <div>
        <van-submit-bar :price="totol" button-text="提交订单" @submit="onSubmit">
          <van-checkbox v-model="checked">全选</van-checkbox>
          <template #tip>
            <span @click="showPopup">修改联系人</span>
          </template>
        </van-submit-bar>
      </div>
    </div>
  </div>
</template>
<script>
export default {
 
  created: function() {
    this.$axios
      .get("carts?tel="+localStorage.getItem('usertel'))
      .then(res => {
        if (res.data.statusCode == 200) {  
            
          var num = 0;

          this.carts = res.data.data;

          for (var i = 0; i < this.carts.length; i++) {
            num += this.carts[i].price * this.carts[i].shuliang;
          }
          this.totol = num * 100;
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  data() {
    return {
      totol: 0,
      show: false,
      searchResult: [],
      areaList: {
        province_list: {
          110000: "北京市",
          120000: "天津市"
        },
        city_list: {
          110100: "北京市",
          120100: "天津市"
        },
        county_list: {
          110101: "东城区",
          110102: "西城区"
          // ....
        }
      }, // 数据格式见 Area 组件文档
      carts: [
        {
          shuliang: "21",
          price: "2.00",
          jianjie: "描述信息",
          name: "商品标题",
          img: "https://img01.yzcdn.cn/vant/cat.jpeg"
        },
        {
          shuliang: "31",
          price: "21.00",
          jianjie: "描述信息",
          name: "商品标题",
          img: "https://img01.yzcdn.cn/vant/cat.jpeg"
        },
        {
          shuliang: "41",
          price: "22.00",
          jianjie: "描述信息",
          name: "商品标题",
          img: "https://img01.yzcdn.cn/vant/cat.jpeg"
        }
      ],
    };
  },
  
  methods: {
    onSubmit() {
    this.$router.push("/cart");
    },  
    showPopup() {
      this.show = true;
    },
    onSave(val) {
      this.$axios
        .post("order", {
          name: val.name,
          tel: val.tel,
          diqu: val.province,
          addr: val.addressDetail,
          youbian: val.postalCode,
          moren: val.isDefault
        })

        .then(res => {
          if (res) {
            this.show = false;
          }
        })
        .catch(error => {
          console.log(error);
        });

      console.log(val);
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
    },
    onChangeDefault(val) {
      if (val) {
        // this.val=1
        alert(val);
      } else {
        // this.val=0;
        alert(val);
      }
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

