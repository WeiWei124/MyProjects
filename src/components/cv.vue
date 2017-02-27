<template>
  <div class="cv">
    <div class="title">
      <router-link to="/mine">返回</router-link>
      <span>填写简历</span>
    </div>
    <div class="main">
      <div class="pic">
        <p class="text">填写简历</p>
        <i class="iconfont icon-yijianfankui"></i>
      </div>
      
    </div>
  </div>
</template>

<script>
//********导入导出练习*******
//命名导入，名字和后边变量名保持一致，用花括号
/*import {name1} from "./test.js"*/
//默认导入，名字可以和后边不一致
/*import thedefault from "./test.js"*/
//重命名
/*import {myname1,name2} from "./test.js"*/
//导入模块为对象
/*import * as obj from "./test.js"*/
//只导入文件
/*import "./test.js"*/
//引用抛出同时使用（即一个文件可以去引用另外一个文件引用过来的文件）
/*import {name1} from "./test"*/
//同时引用默认模块和
/*import thedefault,{name1} from "./test"*/
//***************************
import a from "./test.js"
import Vue from 'vue'
export default {
  name: 'cv',
  //names:name1,
  data () {
    return {
      
    }
  },
  methods:{
  
  },
  created(){
    //console.log(a)
   // console.log(thedefault)
    
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
