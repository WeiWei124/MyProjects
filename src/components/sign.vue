<template>
  <div class="sign">
    <div class="back">
      <router-link to="/mes">返回</router-link>
    </div>
    <div class="main">
      <div class="main_inner" ref="sign">
        <p class="main_title">注册拉钩</p>
        <p class="main_input">
          <input type="tel" placeholder="手机号" v-model="tel">
          </p>
          <p class="main_input">
          <input type="text" placeholder="用户名" v-model="user">
          </p>
          <p class="main_input">
            <input type="password" placeholder="输入密码" v-model="pas">
          </p>
          <p class="main_input">
          <input type="password" placeholder="请再次输入密码" v-model="dubpas">
          <!-- <span>获取验证码</span> -->
        </p>
        <p class="main_input main_pass">
           <span v-show="issame">两次密码输入不一致</span>
           <span v-show="istrue">不能有空项</span>
        </p>
        <p class="main_sgin" @click="sign">注册</p>
        <p class="main_tips"> 注册代表你已同意<span>拉钩用户协议</span></p>
      </div>
    </div>
    
   
  </div>
</template>

<script>
import Vue from 'vue'
import  { AlertPlugin } from 'vux'
Vue.use(AlertPlugin)

export default {
  name: 'sign',
  data () {
    return {
      tel:'',
      user:'',
      pas:'',
      dubpas:'',
      issame:false,
      istrue:false
    }
  },
  mounted(){
    

  },
  methods:{
    sign(){
      if(this.tel && this.user && this.pas && this.dubpas){
          this.istrue=false
        if(this.pas===this.dubpas){
          this.issame=false

          const userlist=this.user;
          const passlist=this.pas;
          Vue.item.push({'user':userlist,'pass':passlist});
          const loginUser=JSON.stringify(Vue.item)
          localStorage.setItem("loginUser",loginUser);
          //alertStart
          const that=this
          this.$vux.alert.show({
            title: '注册成功',
            content: '将直接前往目标页面',
            onShow () {
              console.log('Plugin: I\'m showing')
          },
          onHide () {
              console.log('Plugin: I\'m hiding')
              that.$router.push({path:"/mesList"})
              Vue.isLogin=true
          }
        })
        //alertEnd
      }else{
          this.issame=true
      }

      }else{
        this.istrue=true
      }
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main_inner .main_tips span{
  color: #00b38a;
}
.main_inner .main_tips{
  font-size: 16px;
  padding: 10px 0;
}
/* .main_inner .main_sgin {
  width: 100%;
  height: 100%;
  display: inline-block;
  color: #fff;
} */
.main_inner .main_sgin{
  width: 100%;
  height: 45px;
  background: #00b38a;
  text-align: center;
  line-height: 30px;
  color: #fff;
}

.main_inner .main_input span{
  font-size: 16px;
  color: #00b38a;
}
.main_inner .main_input input{
  border: none;
  height: 100%;
  width:70%;
  font-size: 16px;
  outline: none;

}
.main_inner .main_input{
  border-bottom: 1px solid #ccc;
}
.main_inner .main_title{
  text-align: center;
  line-height: 33px;
  color: #000;
}
.main_inner p{
  width: 100%;
  padding: 10px 20px;
  box-sizing:border-box;
  height: 50px;
  font-size: 18px;
  color: #999;
}
.main{
  width: 100%;
  height: 100%;
  flex:1;
  overflow-y:auto;
  padding: 0 15px;
  box-sizing:border-box; 
}
.back a{
   color: #00b38a;
}
.back{
  width: 100%;
  height: 45px;
  line-height: 45px;
  font-size: 16px;
  padding-left: 15px;
  box-sizing:border-box
}
.sign{
  width: 100%;
  height: 100%;
  display: flex;
  display: -webkit-flex;
  flex-direction:column;

}
h1, h2 {
  font-weight: normal;
}

ul,li {
  list-style-type: none;
  padding: 0;
}
.main_inner .main_pass{
  margin-bottom: 13px;
  border-bottom: none;
}
.main_inner .main_pass span{
  color: #f00;
}

</style>
