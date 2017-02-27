// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'
import Vuex from 'Vuex'
import apiConfig from './config-api'

import tool from './libs/tool'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuex)
tool(Vue)
//数据请求变量
Vue.apiConfig   = apiConfig;
Vue.__basePath   = "http://localhost:8080/";
Vue.__HttpMethod = "JSONP";
Vue.__Developing = true;//是否开发中，如果否，则发布时则强制卸载mock
Vue.http.options.emulateJSON = true;//请求方式为post时，后台可以获取body传递的参数



//主页
import index from './components/index'
//分页
import home from './components/home'
import mes from './components/mes'
import sayWork from './components/sayWork'
import mine from './components/mine'
//详情页
import homeList from './components/homeList'
import login from './components/login'
import sign from './components/sign'
import mesList from './components/mesList'
//个人中心分页
import cv from './components/cv'
import chance from './components/chance'
import collect from './components/collect'
import opinion from './components/opinion'
import sets from './components/sets'
import sayWorkList from './components/sayWorkList'
//VueX测试页面
import VuexText from "./components/VuexText"
//Iscroll测试页面
import scrollText from './components/scrollText'
var routes=[
    {name:'index',path:"/index",component:index,children:[
  	{name:'home',path:"/home",component:home},
  	{name:'mes',path:"/mes",component:mes},
  	{name:'sayWork',path:"/sayWork",component:sayWork},
  	{name:'mine',path:"/mine",component:mine},
  	{name:'mesList',path:"/mesList",component:mesList}

  ]},
  {path:"/",redirect:"/home"},
  //vuex测试页面路由
  {name:'VuexText',path:"/VuexText",component:VuexText},
  //Iscroll测试页面
  {name:'scrollText',path:"/scrollText",component:scrollText},

  {name:'homeList',path:"/homeList",component:homeList},
  {name:'login',path:"/login",component:login},
  {name:'sign',path:"/sign",component:sign},
  {name:'cv',path:"/cv",component:cv},
  {name:'chance',path:"/chance",component:chance},
  {name:'collect',path:"/collect",component:collect},
  {name:'opinion',path:"/opinion",component:opinion},
  {name:'sets',path:"/sets",component:sets},
  {name:'sayWorkList',path:"/sayWorkList/:id",component:sayWorkList}


]
var router=new VueRouter({
  routes:routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router:router

})
//设置全局变量
const items=localStorage.getItem('loginUser')
if(items){
  Vue.loginUser=JSON.parse( localStorage.getItem('loginUser'))
  Vue.item=JSON.parse( localStorage.getItem('loginUser'))
}else{
  const array=[]
  const newArray=JSON.stringify(array)
  localStorage.setItem("loginUser",newArray)
}
Vue.isLogin=false
//console.log(items)