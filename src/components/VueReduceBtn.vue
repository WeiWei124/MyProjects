<template>
  <div class="VuexReduceBtn">
    <button @click='reduce'>点击-1</button>
  </div>
</template>

<script>
//import {mapActions} from "Vuex"
export default {
  name: 'VuexReduceBtn',
  data () {
    return {
      
    }
  },
  methods:{
    ...mapActions([
        'reduce'
      ])
  },
  created(){
    
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  font-size: 16px;
}
.cv{
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
