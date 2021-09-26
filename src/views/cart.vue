<template>
  <div>
    <div>
      <van-row type="flex">确认订单></van-row>
    </div>
    <van-panel title="商品信息" desc="描述信息" status="状态">
      <div v-for="cart in carts">
        <van-card
          :num="cart.shuliang"
          :price="cart.price"
          :desc="cart.jianjie"
          :title="cart.name"
          :thumb="cart.img"
        />
        <van-dialog v-model="show" title="标题" show-cancel-button>
          <van-card
            :num="cart.shuliang"
            :price="cart.price"
            :desc="cart.jianjie"
            :title="cart.name"
            :thumb="cart.img"
          />
        </van-dialog>
        <div>
          <van-row type="flex">地址详情：</van-row>
          <br>
          <van-address-list
            v-model="chosenAddressId"
            :list="list"
            default-tag-text="默认"
            add-button-text="确认支付"
            @add="onAdd"
            @edit="onEdit"
          />
        </div>
      </div>
    </van-panel>
  </div>
</template>
<script>
export default {
  created: function() {
    this.$axios
      .get("carts?tel=" + localStorage.getItem("usertel"))
      .then(res => {
        if (res.data.statusCode == 200) {
          this.carts = res.data.data;
        }
      })
      .catch(error => {
        console.log(error);
      });
    this.$axios
      .post("orders")
      .then(res => {
        if (res.data.statusCode == 200) {
          this.list = res.data.data;
          console.log(this.list);
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  data() {
    return {
      show: false,
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "五五",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
          isDefault: true
        }
      ],
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
      ]
    };
  },
  methods: {
    onAdd() {
      // alert("xxx")
      this.show = true;
      Toast("新增地址");
    },
    onEdit(item, index) {
      Toast("编辑地址:" + index);
    },
    onSelect(contact) {
      Toast("选择" + contact.id);
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