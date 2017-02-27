<template>
  <div class="login">
    <div class="back">
      <p @click="goback">{{datas.back}}</p>
      <!-- <router-link to="/mes">{{datas.back}}</router-link> -->
    </div>
    <div class="main">
      <div class="main_inner" ref="loginMes">
        <p class="main_title">{{datas.login}}</p>
        <p class="main_input">
          <input type="text" placeholder="用户名" v-model="names">
          </p>
          <p class="main_input main_pass">
          <input type="password" placeholder="输入登录密码" v-model="password">
        </p>
        <div class="warn">
          <p>{{istrue}}<router-link to="/sign" v-show="isSign">点击此处去注册</router-link></p>
        </div>
        <p class="main_sgin" v-on:click="subs">{{datas.loginBtn}}</p>
        <p class="main_tips">{{datas.forget}}</p>
      </div>
    </div>
    
   
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'login',
  created(){
    
  },
  data () {
    return {
      datas:[],
      names:'',
      password:"",
      alertMes:"用户名或密码有错误,请重新输入",
      show: false,
      show1: false,
      istrue:'',
      isSign:false
    }
  },
  mounted () {
    //数据请求
    var that=this;
    this.$http({
      url:"http://localhost:8080/api/data",
      method:"GET"
    }).then(function(res){
      that.datas=res.body.data.mesPage.login;
    })
  },
  methods:{
    subs:function () {
      if(this.names && this.password){
        Vue.item=JSON.parse( localStorage.getItem('loginUser'))
        if(Vue.item.length>0){
          Vue.user=[];
          Vue.pass=[]
          /*Vue.item=JSON.parse( localStorage.getItem('loginUser'))*/
          Vue.item.forEach(function(v){
            Vue.user.push(v.user)
            Vue.pass.push(v.pass)
        })
        for(var i=0;i<Vue.user.length;i++){
          if(Vue.user[i]==this.names && Vue.pass[i]==this.password){
            this.istrue=''
            Vue.isLogin=true
            this.$router.go(-1)
            //this.$router.push({path:'/mesList'})
          }else{
            this.istrue="账号或密码不正确"
          }
        }
      }else{
        this.istrue="还没有账号,"
        this.isSign=true
      }

      }else{
        this.istrue='账号或密码不能为空'
      }
    },
    goback:function(){
      this.$router.go(-1)
    },
    gosign:function(){
      this.$router.push({path:"/sign"})
    }

  }
      

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.warn{
  width: 100%;
  height: 30px;
  margin-bottom: 25px;
}

.main_inner .main_tips span{
  color: #00b38a;
}
.main_inner .main_tips{
  font-size: 16px;
  padding: 10px 0;
}
.main_inner .main_sgin a{
  width: 100%;
  height: 100%;
  display: inline-block;
  color: #fff;
}
.main_inner .main_sgin{
  width: 100%;
  height: 45px;
  background: #00b38a;
  text-align: center;
  line-height: 30px;
  color: #fff;
  overflow: hidden;
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
.warn p{
  width: 100%;
  height:30px;
  line-height: 30px;
  color: red;
}
.warn p a{
  color: #00b38a;
}

</style>
