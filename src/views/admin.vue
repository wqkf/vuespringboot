<template>
<div>
    <van-row>
        <van-col span="3"><van-icon name="envelop-o" size="25" badge="99+" @click="mess=true"/></van-col>
        <van-col span="17"></van-col>
        <van-col span="4"><van-icon name="setting-o" size="25" @click="setting = true"/></van-col>
    </van-row>

    <br><br>

    <van-cell-group inset>
        <van-row>
        <van-col span="4"><van-image round width="5rem" height="5rem" :src="user.pic"/>
        
        </van-col>
        <van-col span="20">
            <van-row type="flex" justify="space-between">
                <van-col span="8"><br><font size="5">{{user.nickname}}</font><br><br>
                <!-- <font size="1"> 编辑个人资料</font> -->
                </van-col>
                <van-col span="4"><br><font size="1" @click="login">点击登录></font></van-col>
                    
            </van-row>
        </van-col>
    </van-row>
    </van-cell-group>
    <br><br>
    <van-row gutter="20">
        <van-col span="12" @click="account = true">
            <van-cell>
                <van-icon name="gold-coin" size="25"/>&nbsp;
                <font size="3">账户</font><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                <font size="1">余额 {{user.yue}}</font>
            </van-cell>
        </van-col>
        <van-col span="12">
            <van-cell>
                <van-icon name="fire" size="25"/>&nbsp;
                <font size="3">免费无限卡</font><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                <font size="1">16天</font>
            </van-cell>
        </van-col>
    </van-row>
    <br><br>
    <van-row gutter="20">
        <van-col span="12">
            <van-cell>
                <van-icon name="shopping-cart" size="25"/>&nbsp;
                <font size="3">购物车</font><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                <font size="1">1件待购买</font>
            </van-cell>
        </van-col>
        <van-col span="12">
            <van-cell>
                <van-icon name="bag" size="25"/>&nbsp;
                <font size="3">订单</font><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                <font size="1">管理订单</font>
            </van-cell>
        </van-col>
    </van-row><br><br>

    <van-cell-group inset>
        <van-cell>
            <van-row type="flex">
                <van-icon name="medal" size="25" />&nbsp;&nbsp;
                <font size="3">读书排行榜</font>
            </van-row>
           <van-row type="flex" justify="end">
                <font size="1">本周尚未开始阅读</font>
            </van-row>
            </van-cell><br><br>
        <van-cell>
             <van-row type="flex">
                <van-icon name="eye" size="25"/>&nbsp;&nbsp;
                <font size="3">关注</font>
            </van-row>
           <van-row type="flex" justify="end">
                0<font size="1">人关注我</font>
            </van-row>
           
        </van-cell>
    </van-cell-group><br><br>


     <van-cell-group inset>
        <van-cell>
            <van-row type="flex">
                <van-icon name="label" size="25" />&nbsp;&nbsp;
                <font size="3">笔记</font>
            </van-row>
            </van-cell><br><br>
        <van-cell>
             <van-row type="flex">
                <van-icon name="coupon" size="25"/>&nbsp;&nbsp;
                <font size="3">读过和阅读</font>
            </van-row>
           <van-row type="flex" justify="end">
               
                0<font size="1">个阅读记录</font>
            </van-row>
           
        </van-cell>
    </van-cell-group>
    <!-- ----------------------遮罩层↓--------------------------- -->
    <!-- 2、通知&私信 -->
    
    <van-overlay :show="mess" @click="mess = false">
        <div class="wrapper" @click.stop>
            <div class="block">
                <van-divider />
                
                <van-row>
                    <van-col span="2"><van-icon name="arrow-left" size="25" @click="mess = false"/></van-col>
                    <van-col span="20">
                        通知|私信
                    </van-col>
                    <van-col span="2"></van-col>
                </van-row>  
                <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                QAQ ! <br><br><font size=2> 暂时没有收到通知或私信</font>   
            </div>
            
           
        </div>
    </van-overlay>
      <!-- 3、设置 -->
    <van-overlay :show="setting" @click="setting = false">
        <div class="wrapper" @click.stop>
            <div class="block">
                <van-divider />
                
                <van-row>
                    <van-col span="2"><van-icon name="arrow-left" size="25" @click="setting = false"/></van-col>
                    <van-col span="20">
                        通知|私信
                    </van-col>
                    <van-col span="2"></van-col>
                </van-row>  
                <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                QAQ ! <br><br><font size=2> 暂时没有收到通知或私信</font>   
            </div>
            
           
        </div>
    </van-overlay>
    <!-- 4、账户 -->
     <van-overlay :show="account" @click="setting = account">
        <div class="wrapper" @click.stop>
            <div class="block">
               <van-divider />

               <van-row>
                    <van-col span="2"><van-icon name="arrow-left" size="25" @click="account = false"/></van-col>
                    <van-col span="20">
                        账户
                    </van-col>
                    <van-col span="2"></van-col>
                </van-row>  
                <van-divider />
                <van-cell-group inset>
                    <h2>{{user.yue}}</h2>
                    <font size=1>充值币&nbsp;0.00 &nbsp;&nbsp;|&nbsp;&nbsp;赠币&nbsp;1.00</font><br><br>
                   <van-button round type="info" size="large">充值</van-button>
                    <van-divider />
                    <van-cell title="已购内容" value=">" />
                    <van-cell title="交易记录" value=">" />    
                    <van-cell title="赠送记录" value=">" />
                    <van-cell title="自动购买" value=">" />    
                </van-cell-group><br><br><br>
                <van-cell-group inset>
                    <van-cell title="纸书券" value="0.00      >" />
                    <van-cell title="纸书币" value=">" />    
                </van-cell-group>
            </div>
            
           
        </div>
    </van-overlay>

    <!-- ------------------------遮罩层↑---------------------------- -->
<hr>
<hr><hr>

</div>

</template>


<script>

    export default {
         created:function (){
            
        this.$axios.get('adminload?usertel='+localStorage.getItem('usertel')).then(res=>{
            this.user=res.data.data;
            console.log(this.user)
        }).catch();
    },
    data() {
        return {
            show: false,
            mess: false,
            setting: false,
            account: false
            ,user:{}
        };
    },
    methods: {
        login(){
            this.$router.push("/login");
        }
        }
    };

</script>
<style>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .block {
    width: 100%;
    height:100%;
    background-color: #fff;
  }
</style>


