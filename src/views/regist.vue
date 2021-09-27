<template>
    <div>
        <van-row>
            <van-col span="2"><van-icon name="arrow-left" size="25" @click="back"/></van-col>
            <van-col span="20"> <h2>用户注册</h2></van-col>
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
            <van-field
                v-model="password"
                type="password"
                name="密码"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />
            <van-field
                v-model="password"
                type="password"
                name="确认密码"
                label="确认密码"
                placeholder="确认密码"
                :rules="[{ required: true, message: '请再次填写密码' }]"
            />
             <van-field
                v-model="tel"
                name="手机号"
                label="手机号"
                placeholder="手机号"
                :rules="[{ required: true, message: '请填写手机号用作登录名' }]"
            />
             <van-field
                v-model="email"
                name="电子邮箱"
                label="电子邮箱"
                placeholder="电子邮箱"
                :rules="[{ required: true, message: '请填写电子邮箱' }]"
            />
            <!-- <van-datetime-picker
                v-model="birth"
                type="date"
                title="生日"
                :min-date="minDate"
                :max-date="maxDate"
                /> -->
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">提交</van-button>
            </div>
        </van-form>
         <br><br><br>
    </div>
  
</template>
<script>
export default {
    data(){
        return{
            nickname: '',
            password: '',
            tel: '',
            email: '',
            birth: '',
            // minDate: new Date(1989,0,1),
            // maxDate: new Date(),
            // currentDate: new Date(2021, 0, 1)
        }
    },
    methods: {
         back(){
            this.$router.push("/admin");
        },
        
        onSubmit(values) {
            
            this.$axios
            .post('regist',{
                nickname:this.nickname,
                tel:this.tel,
                password:this.password,
                email:this.email,
            })
            .then(res=>{
                if(res.data.statusCode===200){
                    localStorage.setItem("nickname",this.nickname);
                    localStorage.setItem("password",this.password);
                    localStorage.setItem("email",this.email);
                    localStorage.setItem("tel",this.tel);
                    localStorage.setItem("birth",this.birth);
                    // 跳转至登录
                    this.$router.push("/login"); 
                }
                if(res.data.statusCode===400){
                    alert(res.data.msg);
                }
            })
            .catch(error=>{
                console.log(error);
            })
        }
  },
}

</script>

