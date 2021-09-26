<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="默认">
        <van-grid :border="false" :column-num="3" >

          <van-grid-item v-for="(bookRack,index) in bookRacks" :key="index">
            <van-image :src="bookRack.img"/>
            <span>{{bookRack.name}}</span>
            
          </van-grid-item>

        </van-grid>
      </van-tab>

      <van-tab title="更新">
        <van-grid :border="false" :column-num="3" >

          <van-grid-item v-for="(bookRack,index) in bookRacks" :key="index">
            <van-image :src="bookRack.img"/>
            <span>{{bookRack.name}}</span>
            
          </van-grid-item>

        </van-grid>
      </van-tab>

      <van-tab title="进度">
        <van-grid :border="false" :column-num="3" >

          <van-grid-item v-for="(bookRack,index) in bookRacks" :key="index">
            <van-image :src="bookRack.img"/>
            <span>{{bookRack.name}}</span>
            
          </van-grid-item>

        </van-grid>
      </van-tab>

      <van-tab title="购买">
        <van-grid :border="false" :column-num="3" >

          <van-grid-item v-for="(bookRack,index) in bookRacks" :key="index">
            <van-image :src="bookRack.img"/>
            <span>{{bookRack.name}}</span>
            
          </van-grid-item>

        </van-grid>
      </van-tab>

      <van-tab title="分类">
        <van-grid :border="false" :column-num="3" >

          <van-grid-item v-for="(bookRack,index) in bookRacks" :key="index">
            <van-image :src="bookRack.img"/>
            <span>{{bookRack.name}}</span>
            
          </van-grid-item>

        </van-grid>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  created: function() {
    this.$axios
      .get("bookRacks")
      .then(res => {
        this.bookRacks = res.data;
      console.log(this.bookRacks)

      })
      .catch(error => {
        console.log(error);
      });
  },
  data() {
    return {
      active: 2,
      bookRacks: [
        {
          id: "1",
          brid: "2",
          img: "https://img-bss.csdn.net/1630907214511.jpg",
          name: "中国历代政治得失",
          newIs: "ture",
          readIs: "ture",
          shopIs: "ture"
        },
        {
          id: "1",
          brid: "2",
          img:
            "https://img2.baidu.com/it/u=2380315113,800839835&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=612",
          name: "人类简史：从动物到上帝",
          newIs: "ture",
          readIs: "ture",
          shopIs: "ture"
        },
        {
          id: "1",
          brid: "2",
          img:
            "https://img0.baidu.com/it/u=2510891666,2454567058&fm=26&fmt=auto",
          name: "天朝的崩溃",
          newIs: "ture",
          readIs: "ture",
          shopIs: "ture"
        }
      ]
    };
  }
};
</script>

<style>

</style>


