<template>
  <div class="opinion">
    <div class="title">
      <router-link to="/mine">返回</router-link>
      <span>意见或建议</span>
    </div>
    <div class="main">
      <div class="pic">
        <p class="text">意见或建议</p>
        <i class="iconfont icon-yijianfankui"></i>
      </div>
      
    </div>
   
  </div>
</template>

<script>
export default {
  name: 'opinion',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  font-size: 16px;
}
.opinion{
  width: 100%;
  height: 100%;
  display: flex;
  display: -webkit-flex;
  flex-direction:column;
}
.title{
  width: 100%;
  height: 40px;
  background: #00b38a;
  border-bottom: 1px solid #ccc;
  line-height: 40px;
}
.title a{
  display: inline-block;
  width: 50px;
  text-align: center;
  color: #fff;
}
.title span{
  display: inline-block;
  width: 84%;
  text-align: center;
  color: #fff;
}
.main{
  width: 100%;
  height: 100%;
  background: #eee;
  position: relative;
}
.pic{
  width: 80px;
  height: 70px;
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  margin-left: -40px;
  margin-top: -150px; 
  color: #666;
}
.iconfont{
  display: inline-block;
  font-size: 50px;
  

}
</style>
