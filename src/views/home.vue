<template>
  <div>
    <van-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch">
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>

<!--    <el-tag @click="biaoqian(0)">分类</el-tag>-->
    <el-tag type="success" @click="biaoqian(1)">文学类</el-tag>
    <el-tag type="info" @click="biaoqian(2)">学术类</el-tag>
    <el-tag type="warning" @click="biaoqian(3)">非小说类散文</el-tag>
    <el-tag type="danger" @click="biaoqian(4)">小说</el-tag>

    <el-row v-for=" (book) in books" :key="book.index" type="flex" justify="center" align="middle" >
      <el-col :span="15">
        <el-card :body-style="{ padding: '0px' }">
          <router-link :to="{name:'id',params:{id:book.id}}">
            <img :src="book.img" class="image">
          </router-link>
          <div style="padding: 14px;">
            <span class="font">{{book.name}}</span>
            <br>
            <span class="font1">{{book.actor}}</span>
            <br>
<!--            <span class="font1">推荐评分:{{book.rate}}</span>-->
            <div class="bottom clearfix">
<!--              <el-rate v-model="book.xingji" show-text></el-rate>-->
              <el-button type="text" class="button" @click="shoucang(book.id)">借阅</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      uid: localStorage.getItem('uid'),
      books: [
        {
          img: "",
          name: "",
          actor: "",
          rate: "",
          pingfen: ""
        }
      ]
    };
  },
  created: function() {
    this.$axios
      .get("home/load?uid=" + this.uid)
      .then(res => {
        this.books = res.data.data;
        console.log(res.data.data);
      })
      .catch();
  },
  methods: {
    onSearch() {
      this.$axios.get(
        'home/load?keyword='+this.value + '&uid=' + localStorage.getItem('uid')
      ).then(res=>{

      this.books=res.data.data
      }).catch();

    },

    biaoqian: function(res) {
      switch (res) {
        // case 0:
        //   this.$router.push("/fenlei");
        //   break;
        case 1:
          this.$router.push("/mianfei");
          break;
        case 2:
          this.$router.push("/man");
          break;
        case 3:
          this.$router.push("/woman");
          break;
        case 4:
          this.$router.push("/xinshu");
          break;
      }
    },
    shoucang(obj) {
      this.$axios
        .post("home/shoucang",{userid:localStorage.getItem('uid'),bookid:obj})
        .then(res => {
          if (res.data.code === 0) {
            this.$axios
              .get("home/load")
              .then(res => {
                this.books = res.data.data;
                console.log(res.data.data);
              })
              .catch();
            alert("借閲成功");
          }else{
            alert(res.data.msg);
          }
        })
        .catch(err => {
          alert("借阅失败");
        });
    }
  }
};
</script>
<style>
.el-row {
  margin-top: 20px;
}
.time {
  font-size: 13px;
  color: #999;
}
.el-card {
  width:90%;
  margin:0 auto;
  height: 400px;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 50%;
  height: 230px;
  margin: auto;
  margin-top: 40px;
  display: block;
}
.font {
  font-size: 20px;
  font-weight: bold;
}
.font1 {
  font-size: 14px;
  color: #999;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.el-row {
  margin: auto;
}
</style>
