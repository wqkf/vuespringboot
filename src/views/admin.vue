<template>
  <div>
    <van-row>
      <van-col span="3">
        <van-icon name="envelop-o" size="25" badge="99+" @click="mess=true"/>
      </van-col>
      <van-col span="17"></van-col>
      <van-col span="4">
        <van-icon name="setting-o" size="25" @click="setting = true"/>
      </van-col>
    </van-row>

    <br>
    <br>

    <van-cell-group inset>
      <van-row>
        <van-col span="4">
          <van-image round width="5rem" height="5rem" :src="user.pic"/>
        </van-col>
        <van-col span="20">
            <van-row type="flex" justify="space-between">
                <van-col span="8"><br><font size="5">{{user.nickname}}</font><br><br>
                <!-- <font size="1"> 编辑个人资料</font> -->
                </van-col>
                <van-col span="4"><br><font size="1" @click="login">{{denglu}}</font></van-col>
                    
            </van-row>
        </van-col>
      </van-row>
    </van-cell-group>
    <br>
    <br>
    <van-row gutter="20">
        <van-col span="12" @click="account = true">
            <van-cell>
                <van-icon name="gold-coin" size="25"/>&nbsp;
                <font size="3">账户</font><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                <font size="1">余额 {{user.zengb+user.czb}}</font>
            </van-cell>
        </van-col>
        <van-col span="12">
            <van-cell>
                <van-icon name="fire" size="25"/>&nbsp;
                <font size="3" @click="vip()">购买vip</font><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                <font size="1">16天</font>
            </van-cell>
        </van-col>
    </van-row>
    <br>
    <br>
    <van-row gutter="20">
      <van-col span="12">
        <van-cell>
          <van-icon name="shopping-cart" size="25"/>&nbsp;
          <router-link to="/order"><font size="3">购物车</font></router-link>
          <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <font size="1">1件待购买</font>
        </van-cell>
      </van-col>
      <van-col span="12">
        <van-cell>
          <van-icon name="bag" size="25"/>&nbsp;
          <router-link to="/cart"><font size="3">订单</font></router-link>
          <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
          <font size="1">管理订单</font>
        </van-cell>
      </van-col>
    </van-row>
    <br>
    <br>

    <van-cell-group inset>
      <van-cell>
        <van-row type="flex">
          <van-icon name="medal" size="25"/>&nbsp;&nbsp;
          <font size="3">读书排行榜</font>
        </van-row>
        <van-row type="flex" justify="end">
          <font size="1">本周尚未开始阅读</font>
        </van-row>
      </van-cell>
      <br>
      <br>
      <van-cell>
        <van-row type="flex">
          <van-icon name="eye" size="25"/>&nbsp;&nbsp;
          <font size="3">关注</font>
        </van-row>
        <van-row type="flex" justify="end">
          0
          <font size="1">人关注我</font>
        </van-row>
      </van-cell>
    </van-cell-group>
    <br>
    <br>

    <van-cell-group inset>
      <van-cell>
        <van-row type="flex">
          <van-icon name="label" size="25"/>&nbsp;&nbsp;
          <font size="3">笔记</font>
        </van-row>
      </van-cell>
      <br>
      <br>
      <van-cell>
        <van-row type="flex">
          <van-icon name="coupon" size="25"/>&nbsp;&nbsp;
          <font size="3">读过和阅读</font>
        </van-row>
        <van-row type="flex" justify="end">
          0
          <font size="1">个阅读记录</font>
        </van-row>
      </van-cell>
    </van-cell-group>
    <!-- ----------------------遮罩层↓--------------------------- -->
    <!-- 2、通知&私信 -->

    <van-overlay :show="mess" @click="mess = false">
      <div class="wrapper" @click.stop>
        <div class="block">
          <van-divider/>

          <van-row>
            <van-col span="2">
              <van-icon name="arrow-left" size="25" @click="mess = false"/>
            </van-col>
            <van-col span="20">通知|私信</van-col>
            <van-col span="2"></van-col>
          </van-row>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>QAQ !
          <br>
          <br>
          <font size="2">暂时没有收到通知或私信</font>
        </div>
      </div>
    </van-overlay>
    <!-- 3、设置 -->
    <van-overlay :show="setting" @click="setting = false">
      <div class="wrapper" @click.stop>
        <div class="block">
          <van-divider/>

          <van-row>
            <van-col span="2">
              <van-icon name="arrow-left" size="25" @click="setting = false"/>
            </van-col>
            <van-col span="20">通知|私信</van-col>
            <van-col span="2"></van-col>
          </van-row>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>QAQ !
          <br>
          <br>
          <font size="2">暂时没有收到通知或私信</font>
        </div>
      </div>
    </van-overlay>
    <!-- 4、账户 -->
    <van-overlay :show="account" @click="setting = account">
      <div class="wrapper" @click.stop>
        <div class="block">
          <van-divider/>

               <van-row>
                    <van-col span="2"><van-icon name="arrow-left" size="25" @click="account = false"/></van-col>
                    <van-col span="20">
                        账户
                    </van-col>
                    <van-col span="2"></van-col>
                </van-row>  
                <van-divider />
                <van-cell-group inset>
                    <h2>{{user.zengb+user.czb}}</h2>
                    <font size=1>充值币&nbsp;{{user.czb}} &nbsp;&nbsp;|&nbsp;&nbsp;赠币&nbsp;{{user.zengb}}</font><br><br>
                   <van-button round type="info" size="large" @click="showpopup">充值</van-button>
                   <!-- 充值窗口 -->
                    <van-popup v-model="popups" :style="{width :'50%',height :'42%'}" round>
                       <van-grid :border="false" :column-num="2" v-model="czb" clickable= true >
                            <van-grid-item @click="chongzhi3">
                                <font size=5>3.00</font><br>
                                <van-button round type="info" size="mini">2.91元</van-button>
                            </van-grid-item>
                            <van-grid-item @click="chongzhi6">
                                 <font size="5">6.00</font><br>
                                <van-button round type="info" size="mini">5.82元</van-button>
                            </van-grid-item>
                            <van-grid-item @click="chongzhi12">
                                <font size="5">12.00</font><br>
                                <van-button round type="info" size="mini">11.64元</van-button>
                            </van-grid-item>
                            <van-grid-item @click="chongzhi30">
                                 <font size="5">30.00</font><br>
                                <van-button round type="info" size="mini">29.1元</van-button>
                            </van-grid-item>
                            <van-grid-item @click="chongzhi50">
                                <font size="5">50.00</font><br>
                                <van-button round type="info" size="mini">48.5元</van-button>
                            </van-grid-item>
                            <van-grid-item @click="chongzhi98">
                                 <font size="5">98.00</font><br>
                                <van-button round type="info" size="mini">95.06元</van-button>
                            </van-grid-item>
                        </van-grid>
                        
                   </van-popup>
                        
                    <van-divider />

                    <van-cell title="已购内容" value=">" />
                    <van-cell title="交易记录" value=">" />    
                    <van-cell title="赠送记录" value=">" />
                    <van-cell title="自动购买" value=">" />    
                </van-cell-group><br><br><br>
                <van-cell-group inset>
                    <van-cell title="纸书券" >{{user.zsq}}</van-cell>
                    <van-cell title="纸书币">{{user.zsb}}</van-cell>
                </van-cell-group>
            </div>
            
            <van-sku
  v-model="show"
  :sku="sku"
  :goods="goods"
  :goods-id="goodsId"
  :quota="quota"
  :quota-used="quotaUsed"
  :hide-stock="sku.hide_stock"
  :message-config="messageConfig"
  @buy-clicked="onBuyClicked"
  @add-cart="onAddCartClicked"
/>
        </div>
      
    </van-overlay>
   
    <!-- ------------------------遮罩层↑---------------------------- -->
    <!-- <hr>
    <hr>
    <hr> -->
  </div>
  
</template>


<script>

    export default {
  
         created:function (){
        this.$axios.get('adminload?usertel='+localStorage.getItem('usertel')).then(res=>{
            this.user=res.data.data;
            console.log(this.user)
            this.denglu="主页>"
        }).catch();
    },
    data() {
        return {
            show: false,
            mess: false,
            setting: false,
            account: false,
            popups: false,
            usertel: localStorage.getItem('usertel'),
            czb: 0
            ,user:{}
            ,show: false,
            denglu:'点击登录>',
      sku: {
        // 数据结构见下方文档
      },
      goods: {
        // 数据结构见下方文档
      },
      messageConfig: {
        // 数据结构见下方文档
      },

        };
    },
    methods: {
        login(){
            if(this.denglu=="主页>"){
                this.$router.push("/cart")
            }else{
                this.$router.push("/login");
        
        }},
        showpopup(){
            this.popups=true;
        },
        chongzhi3(){
            this.czb=3;
            this.$axios
            .get('topup',{
                params:{
                    'czb':this.czb,
                    'usertel':this.usertel
                }
                
            })
            .then(res=>{
                this.popups=false;
                 
                if(res.data.status==200){
                    localStorage.setItem("czb",this.czb);
                    localStorage.setItem("usertel",this.usertel);
                    this.user.czb+=res.data.data
                   
                    // this.user.czb=res.data.data.f
                }
            })
            .catch()
        },
         chongzhi6(){
            this.czb=6;
            this.$axios
            .get('topup',{
                params:{
                    'czb':this.czb,
                    'usertel':this.usertel
                }
                
            })
            .then(res=>{
                this.popups=false;
                 
                if(res.data.status==200){
                    localStorage.setItem("czb",this.czb);
                    localStorage.setItem("usertel",this.usertel);
                    this.user.czb+=res.data.data
                   
                    // this.user.czb=res.data.data.f
                }
            })
            .catch()
        },
         chongzhi12(){
            this.czb=12;
            this.$axios
            .get('topup',{
                params:{
                    'czb':this.czb,
                    'usertel':this.usertel
                }
                
            })
            .then(res=>{
                this.popups=false;
                 
                if(res.data.status==200){
                    localStorage.setItem("czb",this.czb);
                    localStorage.setItem("usertel",this.usertel);
                    this.user.czb+=res.data.data
                   
                    // this.user.czb=res.data.data.f
                }
            })
            .catch()
        },
         chongzhi30(){
            this.czb=30;
            this.$axios
            .get('topup',{
                params:{
                    'czb':this.czb,
                    'usertel':this.usertel
                }
                
            })
            .then(res=>{
                this.popups=false;
                 
                if(res.data.status==200){
                    localStorage.setItem("czb",this.czb);
                    localStorage.setItem("usertel",this.usertel);
                    this.user.czb+=res.data.data
                   
                    // this.user.czb=res.data.data.f
                }
            })
            .catch()
        },
         chongzhi50(){
            this.czb=50;
            this.$axios
            .get('topup',{
                params:{
                    'czb':this.czb,
                    'usertel':this.usertel
                }
                
            })
            .then(res=>{
                this.popups=false;
                 
                if(res.data.status==200){
                    localStorage.setItem("czb",this.czb);
                    localStorage.setItem("usertel",this.usertel);
                    this.user.czb+=res.data.data
                   
                    // this.user.czb=res.data.data.f
                }
            })
            .catch()
        },
         chongzhi98(){
            this.czb=98;
            this.$axios
            .get('topup',{
                params:{
                    'czb':this.czb,
                    'usertel':this.usertel
                }
                
            })
            .then(res=>{
                this.popups=false;
                 
                if(res.data.status==200){
                    localStorage.setItem("czb",this.czb);
                    localStorage.setItem("usertel",this.usertel);
                    this.user.czb+=res.data.data
                   
                    // this.user.czb=res.data.data.f
                }
            })
            .catch()
        }
        ,vip(){
       this.$confirm('这将让你损失30元', '你确定吗', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            if(this.user.czb>=30){
           this.$axios.get('maivip?utel='+localStorage.getItem('utel')
           .then(res=>{
               this.user=res.data.data
               this.$message({
            type: 'success',
            message: '购买成功!'
            
          });
           }).catch())
           }else{
               alert("你连30都没有")
           }
          
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消购买'
          });          
        });
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
  height: 100%;
  background-color: #fff;
}
</style>


