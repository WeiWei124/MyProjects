<template>
  <div class="mine">
    <div class="top" @click="login">
      <dl class="top_content">
        <dt>
          <img src="../img/home_ba2.jpg" alt="">
        </dt>
        <dd>
          <p class="top_name">{{islogin}}</p>
          <p class="top_express">我还没有填写个人介绍</p>
        </dd>
      </dl>
    </div>
    <div class="main">
        <div class="main_top" @click="login">
          <ul>
            <li><router-link to="/cv" v-show="isshow"><i class="iconfont icon-jianli17"></i><span>简历</span>></router-link><p v-show="!isshow"><i class="iconfont icon-jianli17"></i><span>简历</span>></p></li>
            <li><router-link to="/chance"  v-show="isshow"><i class="iconfont icon-jihui"></i><span>机会</span>></router-link><p v-show="!isshow"><i class="iconfont icon-jihui"></i><span>机会</span>></p></li>
          </ul>
        </div>
        <div class="main_bot" @click="login">
          <ul>
            <li><router-link to="/collect" v-show="isshow"><i class="iconfont icon-unie611"></i><span>收藏</span>></router-link><p v-show="!isshow"><i class="iconfont icon-unie611"></i><span>收藏</span>></p></li>
            <li><router-link to='/opinion' v-show="isshow"><i class="iconfont icon-yijianfankui"></i><span>意见反馈</span>></router-link><p v-show="!isshow"><i class="iconfont icon-yijianfankui"></i><span>意见反馈</span>></p></li>
            <li><router-link to='/sets' v-show="isshow"><i class="iconfont icon-shezhi"></i><span>设置</span>></router-link><p v-show="!isshow"><i class="iconfont icon-shezhi"></i><span>设置</span>></p></li>
          </ul>
        </div> 
        <button class="quit" @click="quit">退出登录</button>
    </div>
   
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'mine',
  data () {
    return {
      islogin:"还未登录",
      isshow:false,
      titlsPic:"../img/home_ba2.jpg",
    }
  },
  mounted(){
    if(Vue.isLogin){
      this.islogin="欢迎您"
      this.isshow=true
    } 
  },
  methods:{
    login(){
      if(!Vue.isLogin){
        this.$router.push({path:'/login'})
        this.isshow=true
      }
    },
    quit(){
      Vue.isLogin=false
      this.islogin="还未登录"
      this.isshow=false
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.iconfont{
  display: block;
}
.main_bot ul li span{
  display: inline-block;
  width: 80%;
  color: #666;
}
.main_bot ul li i{
  display: inline-block;
  width: 15px;
  height: 15px;
  padding: 0 15px;
  color: #666;
}
.main_bot ul li{
  width: 100%;
  line-height:50px;
  height: 50px;
  border-bottom: 1px solid #ccc;
  color: #ccc;
}
.main_bot{
  width: 100%;
  background: #fff;
  margin-bottom: 10px;
}
.main_top ul li span{
  display: inline-block;
  width: 80%;
  color: #666;
}
.main_top ul li i{
  display: inline-block;
  width: 15px;
  height: 15px;
  padding: 0 15px;
  color: #666;
}
.main_top ul li{
  width: 100%;
  line-height:50px;
  height: 50px;
  border-bottom: 1px solid #ccc;
  color: #ccc;
}
.main_top{
  width: 100%;
  background: #fff;
  margin-bottom: 10px;
}
.main{
  width: 100%;
  height: 74%;
  background: #f0f1f5;
}
.top_content dd p{
  line-height: 20px;
}
.top_content{
  padding: 32px 100px;
  text-align: center;
}
.top_express{
  font-size: 14px;
  color: #b3dfd1;
}
.top_name{
  font-weight: 900;
  color: #fff;

}
.top dt img{
  width: 100%;
  height: 100%;
  border-radius: 50%; 
}
.top dt{
  width:60px;
  height: 60px;
  margin-left: 55px;
}
.top{
  width: 100%;
  height:160px;
  background: #00b38a; 
}
.mine{
  width: 100%;
  height: 100%;
}
*{
  font-size: 16px;
}
.quit{
  padding: 10px 30%;
  margin-left: 11%;
  border: none;
  background: #00b38a;
  color: #fff;
  outline: none;
}
</style>
