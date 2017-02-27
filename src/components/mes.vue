<template>
  <div class="mes">
    <div class="top">
      消息列表
    </div>
    <div class="main">
      <div class="main_inner">
        <p class="imgs">
          <img src="../img/ms.jpg" alt="">
        </p>
        <p class="main_title main_login_text">{{datas.login}}</p>
        <p class="main_text">
          <span v-for="item in datas.login_text">
            {{item}}
          </span>
        </p>
        <p class="main_sign">
          <router-link to="/sign">
          {{datas.login_list_top}}
          </router-link>
        </p>
        <p class="main_login">
          <router-link to="/login">
          {{datas.login_list_bot}}
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'mes',
  data () {
    return {
      datas:{}
    }
  },
  mounted () {
    //如果登录了，自动跳转到详情页
    if(Vue.isLogin){
      this.$router.push({path:'/mesList'})
    }
    var that=this;
    this.$http({
      url:"http://localhost:8080/api/data",
      method:"GET"
    }).then(function(res){
      that.datas=res.body.data.mesPage.mes;
      //console.log(that.datas)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main .main_login_text{
  height: 63px;
  line-height: 63px;
}
.main_login a{
  display: inline-block;
  width: 100%;
  height: 100%;
  color:#00b38a;
}
.main_login{
  text-align: center;
  line-height: 40px;
  font-size: 18px;
  border: 1px solid #ccc;
}
.main_sign a{
  display: inline-block;
  width: 100%;
  height: 100%;
  color: #fff;
}
.main_sign{
  background: #00b38a;
  color: #fff;
  text-align: center;
  line-height: 40px;
  font-size: 18px;
  margin-bottom: 10px;
}
.main_text span{
  display: block;
}
.main .main_text{
  height: 60px;
  line-height: 30px;
  font-size: .16rem;
  color: #999;
  margin-bottom: 68px;
}
.main_title{
  font-weight: 900;
  font-size: 18px;
}
.main_inner .imgs{
  text-align: center;
  height: 90px;
}
.main_inner p{
  width: 100%;
  height:45px;
  line-height: 45px;
  text-align: center; 
}
.main_inner{
  width: 100%;
  height: 100%;
  padding: 85px 14.2% 0 14.2%;
  box-sizing:border-box;
}
.main{
  width: 100%;
  height: 100%;

}
.top{
  width: 100%;
  height:50px;
  border-bottom: 1px solid #ccc;
  background:#f9f9f9;  
  line-height: 50px;
  text-align: center;
  font-size: 18px;
  font-weight: 900;
}
.mes img{
  width: 80px;
  height: 80px;
}
.mes{
  width: 100%;
  height: 100%;
}
h1, h2 {
  font-weight: normal;
}

ul,li {
  list-style-type: none;
  padding: 0;
}
</style>
