<template>
  <div>
    <h2>学术类</h2>
    <van-card
      v-for="book in books"
      :key="book"
      :desc="book.title"
      :title="book.name"
      :thumb="book.img"
      :price="book.price"
      @click="xiangqing(book.id)"
    >
      <template #tags>
        <van-cell title="作者" :value="book.actor" class="actor1"/>
        <van-cell :value="book.jianjie" class="jianjie"/>
      </template>
    </van-card>

<!--    <el-button type="primary" round @click="huan()">点击换一批</el-button>-->
  </div>
</template>
<script>
let pageNum = 1;
export default {
  created: function() {
    this.$axios
      .get("home/anload?id=" + 2)
      .then(res => {
        this.books = res.data.data;
      })
      .catch();
  },
  data() {
    return {
      books: []
    };
  },
  methods: {
    huan: function() {
      this.$axios
        .get("home/anload", { params: { pageNum: pageNum, id: 2 } })
        .then(res => {
          this.books = res.data.data;
        })
        .catch();
      pageNum += 5;
    },
    xiangqing(res) {
      this.$router.push({
        path: "/xiangqing",
        name: "id",
        params: {
          id: res
        }
      });
    }
  }
};
</script>
<style>
.van-card {
  width: 80%;
  margin-left: 10%;
  height: 130px;
}
.van-card__thumb {
  width: 100px;
  height: 100px;
}
.el-button {
  width: 60%;
  background-color: darkgray;
  color: #000;
  font-size: 15px;
  font-weight: bold;
}
.actor1 {
  width: 100px;
  margin: auto;
  height: 45px;
}
.jianjie {
  font-size: 8px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  height: 40px;
}
</style>
