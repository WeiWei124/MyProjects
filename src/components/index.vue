<template>
  <div class="index">
    <!-- indexPage -->
    <div class="wrap">
      <router-view></router-view>
    </div>
    <div class="nav">
      <router-link to="/home"><p><i class="iconfont icon-shouye"></i><span>首页</span></p></router-link>
      <router-link to="/mes"><p><i class="iconfont icon-xinxi"></i><span>消息</span></p></router-link>
      <router-link to="/sayWork"><p><i  class='iconfont icon-duizhangdan'></i><span>言职</span></p></router-link>
      <router-link to="/mine"><p><i class="iconfont icon-kaixin"></i><span>我</span></p></router-link>
    </div>

  </div>
</template>

<script>
import { Icon, Box } from 'vux';

export default {
  name: 'indexPage',
  components:{

  },
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.iconfont {
 display:block;
 width: 100%;
 line-height: 24px;
 font-size: 26px;
 margin-top: 5px;
}
/* .nav .on i,.nav .on span{
  color: #00b38a
} */
/*----*/
a{
  
}
input{

}
/*-------*/
.nav span{
  display: block;
  font-size: 14px;
  height: 20px;
  line-height: 20px;
}
.index{
  width: 100%;
  height: 100%;
  font-size: 0rem;
  display: flex;
  display: -webkit-flex;
  flex-direction:column;
}
.wrap{
  width: 100%;
  height: 100%;
  flex:1;
  overflow: hidden;
}
.nav{
  width: 100%;
  height: 50px;
  display: flex;
  display: -webkit-flex;
}
.nav a{
  color: #939393;
  background: #fff;
  font-size: 18px;
  flex:1;
  text-align: center;
  line-height: 50px;
  border-top: 1px solid #939393;
}
.nav .router-link-active,.nav .router-link-active span{
  color: #00b38a
}
</style>
