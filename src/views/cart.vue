<template>
  <div>
    <div>
      <van-row type="flex">
       确认订单>
      </van-row>
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
    </div>
  <div>
    <van-row type="flex">
       地址详情：
      </van-row><br>
      <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="活动名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>

  <el-form-item label="活动形式">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">确认支付</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
  </div>
    
</van-panel>
    
  </div>
</template>
<script>
export default {
  created: function() {
    this.$axios
      .get("carts")
      .then(res => {
        if (res.data.statusCode == 200) {
          var num = 0;

          this.carts = res.data.data;

          // for (var i = 0; i < this.carts.length; i++) {
          //   num += this.carts[i].price * this.carts[i].shuliang;
          // }
          // this.totol = num * 100;
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  data() {
    return{
      form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
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
    }
  },
    methods: {
      onSubmit() {
        console.log('submit!');
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