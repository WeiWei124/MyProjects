<template>
  <div id="app" class="content">
    <router-view></router-view>
    
  </div>
</template>

<script>
import "./img/iconfont/iconfont.css"
import "./img/iconfont2/iconfont.css"
import store from "./vuex/store"
export default {
  name: 'app',
  store,
  data (){
    return {

    }
  },

  mounted () {
    var that=this;
    this.$http({
      url:"http://localhost:8080/api/data",
      method:"GET"
    }).then(function(res){
      that.bannerImg=res.body.data.homePage.bannerImg;
      that.home_body=res.body.data.homePage.home_body;
      that.data=res.body.data
    })
    
  }
}
</script>

<style>
 @font-face {
 font-family: 'iconfont';  project id 22633 3
 src: url('//at.alicdn.com/t/font_vserv7c6prolmcxr.ttf');
 src: url('//at.alicdn.com/t/font_vserv7c6prolmcxr.woff');

}
.content{
  width: 100%;
  height: 100%; 
}
</style>
