<template>
  <div>
    <van-nav-bar title="免费领书" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <p id="biaoti">你可能喜欢的书</p>
    <van-grid :border="false" :column-num="3">
      <van-grid-item v-for="(list,index) in arrlist" :key="index">
        <van-loading color="#1989fa" v-if="showJiazai"/>
        <van-image :src="list.price"/>
        <p class="jiji">{{list.name}}</p>
        <van-button type="info" size="mini" :round="true">
          <van-cell title="分享领取" @click="showShare = true"/>
          <van-share-sheet
            v-model="showShare"
            title="立即分享给好友"
            :options="options"
            @select="onSelect"
          />
        </van-button>
      </van-grid-item>
      <!-- <van-grid-item>
        <van-image src="https://img01.yzcdn.cn/vant/apple-2.jpg"/>
        <p class="jiji">古代人的日常生活</p>
        <van-button type="info" size="mini" round=true>分享领取</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img01.yzcdn.cn/vant/apple-3.jpg"/>
        <p class="jiji">古代人的日常生活</p>
        <van-button type="info" size="mini" round=true>分享领取</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg"/>
        <p class="jiji">古代人的日常生活</p>
        <van-button type="info" size="mini" round=true>分享领取</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img01.yzcdn.cn/vant/apple-2.jpg"/>
        <p class="jiji">古代人的日常生活</p>
        <van-button type="info" size="mini" round=true>分享领取</van-button>
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img01.yzcdn.cn/vant/apple-3.jpg"/>
        <p class="jiji">古代人的日常生活</p>
        <van-button type="info" size="mini" round=true>分享领取</van-button>
      </van-grid-item>-->
    </van-grid>
    <van-button type="default" :round="true" id="anniu" @click="huanye">换一批</van-button>
    <br>
    <br>
    <div>
      <p id="dazi">读就送</p>
      <p id="xiaozi">加入书架并阅读5分钟即可免费领取</p>
      <br>
      <van-row v-for="(lists,index) in arrlist1" :key="index">
        <van-loading color="#1989fa" v-if="showJiazais"/>
        <van-col span="5">
          <van-image width="70" height="100" :src="lists.price"/>
        </van-col>
        <van-col span="19" id="juzhong">
          <van-col span="16" id="zhuhuo">{{lists.name}}</van-col>
          <van-col span="2"></van-col>
          <van-col span="6">
            <van-button type="primary" size="mini" round id="xanniu">阅读领取</van-button>
          </van-col>
          <p id="tang">
            <span>{{lists.zuozhe}}</span>&nbsp;|&nbsp;
            <span id="shuzi">{{lists.jiage}}</span>
          </p>
          <p id="xiangqing">{{lists.xinxi}}</p>
        </van-col>
      </van-row>
      <br>
      <van-button type="default" :round="true" id="anniu" @click="huanye1">换一批</van-button>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arrlist: [],
      pageno: 1,
      pageno1: 1,
      showJiazai: false,
      showJiazais: false,
      showShare: false,
      options: [
        { name: "分享给朋友", icon: "wechat" },
        { name: "分享到朋友圈", icon: "weibo" }
      ],
      arrlist1: []
    };
  },
  created: function() {
    this.$axios
      .get("/selectAll4")
      .then(response => {
        this.arrlist = response.data;
      })
      .catch();
    this.$axios
      .post("/selectAll5")
      .then(response => {
        this.arrlist1 = response.data;
      })
      .catch();
  },

  methods: {
    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },
    onClickLeft() {
      this.$router.push("/found");
    },
    huanye() {
      this.showJiazai = true;
      this.pageno = parseInt(this.pageno) + 1;

      if (parseInt(this.pageno) === 4) {
        this.pageno = 1;
      }
      console.log(this.pageno);
      this.$axios
        .get("/selectAll4", { params: { pageNos: this.pageno } })
        .then(response => {
          this.showJiazai = false;
          this.arrlist = response.data;
        })
        .catch(err => {});
    },
    huanye1(){
      this.showJiazais = true;
      this.pageno1 = parseInt(this.pageno1) + 1;
      if(this.pageno1===7){
        this.pageno1=1
      }
      this.$axios
        .get("/selectAll5", { params: { pageNos: this.pageno1 } })
        .then(response => {
          this.showJiazais = false;
          this.arrlist1 = response.data;
        })
        .catch(err => {});
    }
  }
};
</script>
<style>
/* #zhuhuo{
  margin-left: 5px;
} */
#juzhong {
  text-align: left;
  margin-top: 7px;
}
#xiangqing {
  margin-left: 5px;
  margin-right: 30px;
  text-align: left;
  font-size: 12px;
}
#shuzi {
  text-decoration: line-through;
}
#tang {
  font-size: 13px;
  text-align: left;
  margin-left: 5px;
}
#xanniu {
  text-align: right;
}
#zhuhuo {
  font-size: 15px;
  font-weight: 600;
}
#xiaozi {
  font-size: 14px;
  text-align: left;
  margin: 0px;
  margin-left: 10px;
  margin-top: 10px;
}
#dazi {
  text-align: left;
  /* margin-right: 350px; */
  font-size: 18px;
  font-weight: bolder;
  margin: 0px;
  margin-left: 10px;
  margin-top: 10px;
}
#anniu {
  width: 400px;
  height: 44px;
}
.jiji {
  font-size: 12px;
  font-weight: bolder;
}
#biaoti {
  font-weight: bolder;
  text-align: left;
  margin-left: 15px;
}
</style>


