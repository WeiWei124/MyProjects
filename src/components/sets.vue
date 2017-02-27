<template>
  <div class="sets">
    <div class="title">
      <router-link to="/mine">返回</router-link>
      <span>设置</span>
    </div>
  	<div class="main">
      <p class="offer">声音</p>
      <p class="offer">亮度</p>
    </div>
   
   
  </div>
</template>

<script>
export default {
  name: 'sets',
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
.sets{
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
}
.offer{
  background: #fff;
  border-bottom: 1px solid #ccc;
  line-height: 36px;
  line-height: 36px;
  padding-left: 20px;
  color: #666;
}
</style>
