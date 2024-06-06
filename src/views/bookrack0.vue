<template>
  <div>
    <van-tabs v-model="active">
<!--      <van-tab title="默认">-->
<!--        <van-grid :border="false" :column-num="3">-->
<!--          <van-grid-item v-for="(bookRack,index) in bookRacks" :key="index">-->
<!--            <van-image :src="bookRack.img"/>-->
<!--            <span>{{bookRack.name}}</span>-->
<!--          </van-grid-item>-->
<!--        </van-grid>-->
<!--      </van-tab>-->

<!--      <van-tab title="更新">-->
<!--        <van-grid :border="false" :column-num="3">-->
<!--          <van-grid-item v-for="(bookRack,index) in bookRacks" :key="index">-->
<!--            <van-image :src="bookRack.img"/>-->
<!--            <span>{{bookRack.name}}</span>-->
<!--          </van-grid-item>-->
<!--        </van-grid>-->
<!--      </van-tab>-->

<!--      <van-tab title="进度">-->
<!--        <van-grid :border="false" :column-num="3">-->
<!--          <van-grid-item v-for="(bookRack,index) in bookRacks" :key="index">-->
<!--            <van-image :src="bookRack.img"/>-->
<!--            <span>{{bookRack.name}}</span>-->
<!--          </van-grid-item>-->
<!--        </van-grid>-->
<!--      </van-tab>-->

      <van-tab title="借阅">
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="(bookRack,index) in bookRacks" :key="index">
            <van-image :src="bookRack.img"/>
            <span>{{bookRack.name}}</span>
            <van-col span="24" v-if="bookRack.mature==0">
              <van-grid direction="horizontal" :column-num="1" :gutter="30">
                <van-grid-item>
                  <van-icon name="smile-o" size="30"/>已借阅
                </van-grid-item>
              </van-grid>
            </van-col>
            <van-col span="24" v-if="bookRack.mature==1">
              <van-grid direction="horizontal" :column-num="2" :gutter="30">
                <van-grid-item>
                  <van-icon name="exchange" size="30" @click="borrow(bookRack.id)"/>
                  续借
                </van-grid-item>
                <van-grid-item>
                  <van-icon name="closed-eye" size="30" @click="restitution(bookRack.id)"/>
                  归还
                </van-grid-item>
                <!--        <van-grid-item>-->
                <!--          <van-icon name="closed-eye" size="30" @click="openpl(2)"/>不行-->
                <!--        </van-grid-item>-->
              </van-grid>
            </van-col>
          </van-grid-item>
        </van-grid>
      </van-tab>

<!--      <van-tab title="分类">-->
<!--        <van-grid :border="false" :column-num="3">-->
<!--          <van-grid-item v-for="(bookRack,index) in bookRacks" :key="index">-->
<!--            <van-image :src="bookRack.img"/>-->
<!--            <span>{{bookRack.name}}</span>-->
<!--          </van-grid-item>-->
<!--        </van-grid>-->
<!--      </van-tab>-->
    </van-tabs>
  </div>
</template>

<script>
export default {
  created: function() {
    this.$axios
      .get("home/bookRacks?uid=" + localStorage.getItem('uid'))
      .then(res => {
        this.bookRacks = res.data.data;
        console.log(this.bookRacks);
      })
      .catch(error => {
        console.log(error);
      });
  },
  data() {
    return {
      uid: localStorage.getItem('uid'),
      active: 2,
      bookRacks: [
        {
          id: "1",
          brid: "2",
          img: "https://img-bss.csdn.net/1630907214511.jpg",
          name: "中国历代政治得失",
          newIs: "ture",
          readIs: "ture",
          shopIs: "ture",
          mature: 1
        },
        {
          id: "1",
          brid: "2",
          img:
            "https://img2.baidu.com/it/u=2380315113,800839835&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=612",
          name: "人类简史：从动物到上帝",
          newIs: "ture",
          readIs: "ture",
          shopIs: "ture",
          mature: 0
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
  },
  methods: {
    borrow(obj){
      this.$axios
        .post("home/shoucang",{userid:localStorage.getItem('uid'),bookid:obj})
        .then(res => {
          if (res.data.code === 0) {
            this.$axios
              .get("home/bookRacks?uid=" + localStorage.getItem('uid'))
              .then(res => {
                this.bookRacks = res.data.data;
                console.log(this.bookRacks);
              })
              .catch(error => {
                console.log(error);
              });
            alert("借閲成功");
          }else{
            alert(res.data.msg);
          }
        })
        .catch(err => {
          alert("借阅失败");
        });
    },
    restitution(obj){
      this.$axios
        .get("home/delete?uid=" + this.uid + "&bid=" + obj)
        .then(res => {
          if (res.data.code === 0) {
            this.$axios
              .get("home/bookRacks?uid=" + localStorage.getItem('uid'))
              .then(res => {
                this.bookRacks = res.data.data;
                console.log(this.bookRacks);
              })
              .catch(error => {
                console.log(error);
              });
            alert("归还成功");
          }
        })
        .catch();
    }
  }
};
</script>

<style>
</style>


