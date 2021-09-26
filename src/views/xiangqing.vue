<template>
  <van-row>
    <van-col span="24">
      <img class="bookimg" :src="book.img" @click="contxt(book.id)">
    </van-col>
    <van-col span="20" offset="2">
      <span class="shuming">{{book.name}}</span>
      <br>
      <span class="actor">{{book.actor}}</span>
    </van-col>
    <van-col span="24">
      <span class="tuijian">{{book.title}}</span>
    </van-col>
    <van-col span="10">
      <span>
        整体星级
        <el-rate v-model="book.xingji" show-text></el-rate>
      </span>
    </van-col>
    <van-col span="4">
      <span>
        推荐
        <br>一般
        <br>不行
      </span>
    </van-col>
    <van-col span="8">
      <van-progress inactive :percentage="70" pivot-text/>
      <br>
      <van-progress inactive :percentage="20" pivot-text/>
      <br>
      <van-progress inactive :percentage="10" pivot-text/>
    </van-col>
    <van-col span="24">
      <van-grid direction="horizontal" :column-num="3" :gutter="30">
        <van-grid-item>
          <van-icon name="smile-o" size="30" @click="openpl(4)"/>推荐
        </van-grid-item>
        <van-grid-item>
          <van-icon name="exchange" size="30" @click="openpl(3)"/>一般
        </van-grid-item>
        <van-grid-item>
          <van-icon name="closed-eye" size="30" @click="openpl(2)"/>不行
        </van-grid-item>
      </van-grid>
    </van-col>
    <van-col span="20" offset="2">
      <el-divider></el-divider>
    </van-col>
    <van-col span="10">
      <span class="putong">阅读</span>
      <br>
      <span class="fangda">共{{book.readers}}万人</span>
      <br>
      <span class="putong">阅读此书</span>
    </van-col>
    <van-col span="14">
      <span class="putong">字数</span>
      <br>
      <span class="fangda">共{{book.words}}万字</span>
      <br>
      <span class="putong">完结于{{book.sjdate}}</span>
    </van-col>
    <van-col span="20" offset="2">
      <el-divider></el-divider>
    </van-col>
    <van-col span="20" offset="2">
      <h3>评论区</h3>
    </van-col>

    <van-col span="20" offset="2" v-for="(pl,pinglun) in pls" :key="pinglun">
      <van-card :desc="pl.context" :title="pl.nickname" :thumb="pl.pic"/>
    </van-col>

    <van-action-sheet v-model="show" title="短评">
      <div class="content">
        <van-field
          v-model="message"
          rows="2"
          autosize
          label="评论"
          type="textarea"
          maxlength="50"
          placeholder="请输入评论"
          show-word-limit
        >
          <template #button>
            <van-button size="small" type="primary" @click="pinglun()">发表评论</van-button>
          </template>
        </van-field>
      </div>
    </van-action-sheet>
  </van-row>
</template>


<script>
var pingjia = 0;
var id = 0;
import moment from "moment";
export default {
  created: function() {
    id = this.$route.params.id;
    this.$axios
      .get("home/bookload?id=" + id)
      .then(res => {
        this.book = res.data.data;
        localStorage.setItem("bookifvip", this.book.sfvip);
        var words = this.book.words;
        var a = words / 10000;
        //四舍五入取小数点后两位
        a = a.toFixed(2);
        this.book.words = a;
        words = this.book.readers;
        a = words / 10000;
        a = a.toFixed(2);
        this.book.readers = a;
        words = this.book.sjdate;
        words = moment().format("YYYY年MM月DD日");
        this.book.sjdate = words;
      })
      .catch();

    this.$axios
      .get("home/plload?id=" + id)
      .then(res => {
        this.pls = res.data.data;
        console.log(this.pls);
      })
      .catch();
  },
  data() {
    return {
      message: "",
      show: false,
      book: {},
      iconClasses: ["icon-rate-face-1", "icon-rate-face-2", "icon-rate-face-3"], // 等同于 { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }
      pls: []
    };
  },
  methods: {
    openpl(res) {
      this.show = true;
      pingjia = res;
    },
    pinglun() {
      this.$axios
        .get("home/pinglun", {
          params: {
            bid: id,
            pinglun: this.message,
            token: localStorage.getItem("token")
          }
        })
        .then(res => {
          this.pls = res.data.data;
        })
        .catch();
      this.show = false;
    },
    contxt(id) {
      console.log(id);
      this.$router.push({
        path: "/context",
        name: "context",
        params: {
          id: id
        }
      });
    }
  }
};
</script>
<style>
.bookimg {
  width: 45%;
  height: 300px;
}

.shuming {
  font-size: 50px;
  font-weight: bold;
}

.actor {
  font-size: 20px;
  color: deepskyblue;
}
.tuijian {
  font-size: 25px;
  height: 60px;
  line-height: 60px;
  color: dimgray;
  float: left;
  margin-left: 40px;
}
.van-col--10 {
  margin-right: 0px;
}
.van-grid {
  margin-top: 20px;
}
.putong {
  font-size: 16px;
  color: dimgray;
}
.fangda {
  font-size: 25px;
  color: dimgray;
}
.content {
  padding: 16px 16px 160px;
}
</style>
