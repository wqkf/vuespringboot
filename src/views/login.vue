<template>
  <div>
    <van-row>
      <van-col span="2">
        <van-icon name="arrow-left" size="25" @click="back"/>
      </van-col>
      <van-col span="20">
        <h2>用户登录</h2>
      </van-col>
      <van-col span="2"></van-col>
    </van-row>
    <van-form @submit="onSubmit">
      <van-field
        v-model="nickname"
        name="昵称"
        label="昵称"
        placeholder="昵称"
        :rules="[{ required: true, message: '请填写昵称' }]"
      />
      <van-divider/>
      <van-divider/>
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <br>
        <br>
        <van-button round block type="info" native-type="submit">提交</van-button>
        <br>
        <br>
        <van-button
          round
          block
          type="info"
          color="linear-gradient(to right, #ff6034, #ee0a24)"
          @click="back"
        >取消</van-button>
      </div>
      <br>
      <br>
      <br>
      <br>
      <van-cell title="还没有账号？点击注册" to="/regist"/>
    </van-form>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      nickname: "",
      password: ""
    };
  },
  methods: {
    onSubmit(values) {
      // 发送登录请求

      this.$axios
        .post("users/login", {
          password: this.password,
          nickname: this.nickname
        })
        .then(res => {
          if (res.data.code == 0) {
            localStorage.setItem("nickname", this.nickname);

            localStorage.setItem("uid", res.data.data.id);
            this.$router.push("/admin");
          }
          if(res.data.statusCode==400){
            alert(res.data.msg);
          }
          if(res.data.statusCode==401){
            alert(res.data.msg)
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    back() {
      this.$router.push("/admin");
    }
  }
};
</script>

