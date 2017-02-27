<template>
  <div class="home">
    <div class="search">
      <input type="text" placeholder="输入要搜索的职位/公司" v-model="searchs">
    </div>
    <div class="banner" style="font-size:18px">
    <swiper :aspect-ratio="300/800" style="width:100%;" :show-dots="false">
        <swiper-item v-for="item in bannerImg"><img :src="item"></swiper-item>
    </swiper>
<!-- @on-pulldown-loading="downLoad"  -->
    </div>
     <div class="main">

      <!--pulldown slot  -->
      <!-- <div slot="pulldown" class="l-pulldown" v-show="isdownShow">
        <span v-show="scroller.pulldownStatus === 'down'">下拉刷新</span>
        <span v-show="scroller.pulldownStatus === 'up'">释放刷新</span>
        <span v-show="scroller.pulldownStatus === 'loading'"><spinner type="ios-small"></spinner></span>
      </div>
       -->
      <scroller lockX bounce scrollbarY
      ref="fresh"
      style="height:100%"
      use-pulldown use-pullup 

      @on-pulldown-loading="downLoad"
      
      :pulldown-config="{height:40}"
      :pulldown-status.sync="scroller.pulldownStatus"

      
      :pullup-config="{height:40 }"
      :pullup-status.sync="scroller.pullupStatus"
      >
         <div class="dl">
            <router-link to="/homeList"  v-for="item in searchData">
                <p class="dt"><img :src="item.img" alt=""></p>
                <p class="dd">
                  <span class="list list1"><span class="title"><b>{{item.title}}</b><img src="" alt=""></span><strong>{{item.score}}</strong> </span>
                  <span class="list list2"><span class="qiye">{{item.qiye}}</span></span>
                  <span class="list"><span class="items">
                    <i v-for="list in item.address">{{list}}</i>
                   
                  </span><strong>15:14</strong></span>
                  <span class="list"><span class="last">
                    <i v-for="leixing in item.leixing">{{leixing}}</i></span></span> 
                </p>
            </router-link>
          </div>

        
      <!--pullup slot-->
      <!-- <div slot="pullup" class="l-pullup">
        <span v-show="scroller.pullupStatus === 'down'">释放加载更多</span>
        <span v-show="scroller.pullupStatus === 'up' && scroller.list.length > 0">{{scroller.isNull ? '没有更多了' : '上拉加载更多'}}</span>
        <span v-show="scroller.pullupStatus === 'loading'"><spinner type="ios-small"></spinner>正在加载</span>
      </div> -->

      </scroller>
    </div>  
  </div>
</template>

<script>
import { Swiper, GroupTitle, SwiperItem, XButton, Divider,Scroller,Spinner } from 'vux';

import {names} from "./cv"

const pulldown={
  content: 'Pull Up To Refresh',
  pullUpHeight: 60,
  height: 40,
  autoRefresh: false,
  downContent: 'Release To Refresh',
  upContent: 'Pull Up To Refresh',
  loadingContent: 'Loading...',
  clsPrefix: 'xs-plugin-pullup-'
}

export default {
  name: 'home',
  created(){
    //console.log(names)
  },
  data () {
    return {
      scrollTop: 0,
      isdownShow:false,
      //数据渲染
      home_body:[],
      bannerImg:[],
      scroller: {
        isNull: false,
        list: [],
        pulldownStatus: 'default',
        pullupStatus: 'loading'
      },
      pullsdown:{
        content: 'Pull Up To Refresh',
        pullUpHeight: 60,
        height: 40,
        autoRefresh: false,
        downContent: 'Release To Refresh',
        upContent: 'Pull Up To Refresh',
        loadingContent: 'Loading...',
        clsPrefix: 'xs-plugin-pullup-'
      },
      searchs:''
    }
   
  },
   created () {
    var that = this;
    this.$http({
      url:"http://localhost:8080/api/data",
      method:"GET"
    }).then(function(res){
      that.bannerImg=res.body.data.homePage.bannerImg;
      that.home_body=res.body.data.homePage.home_body;
      this.$nextTick(() => {
        this.$refs.fresh.reset()
      })
    })
  },
  components: {
    Swiper,
    SwiperItem,
    GroupTitle,
    XButton,
    Divider,
    Scroller,
    Spinner
  },
  methods:{
    downLoad(){
      var that=this;
      this.$http({
      url:"http://localhost:8080/api/data",
      method:"GET"
    }).then(function(res){
        that.bannerImg=res.body.data.homePage.bannerImg;
        that.home_body=that.home_body.concat(res.body.data.homePage.home_body)
          //重新更新数据
        this.$nextTick(() => {
          this.$refs.fresh.reset()
        })
        console.log(1)
      })
    }
  },
  computed:{
    searchData:function(){
      let search = this.searchs;
      let lists = []
      let array = [
        {name:1,age:10},
        {name:2,age:20},
        {name:3,age:30}
      ]

      if(search != ''){
        lists = this.home_body.filter(function(product){
           return Object.keys(product).some(function(key){
            console.log(String(product[key].indexOf(search)>-1))
               return String(product[key].indexOf(search)>-1)
               
            })
        }) 
        console.log(lists)
      }
        
      return this.home_body
    }
   
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  padding: 0;
  margin: 0;
  line-height: none;
  text-decoration: none;
  list-style: none;
}
.home{
  width: 100%;
  height: 100%;
  display: flex;
  display: -webkit-flex;
  flex-direction:column;
  position: relative;
}
.banner{
  width: 100%;
  height: 137px;
}
.banner a,.banner img,.banner .swiper-demo-img{
  display: inline-block;
  width: 100%;
  height: 100%;
}
.main{
  width: 100%;
  height: 100%;
  overflow:hidden;
  flex:1;
}
.main .dl{
  width: 100%;
  overflow:hidden; 
　zoom:1; 
  
}
.main .dl .dt{
  width:85px;
  height:123px; 
  border-bottom: 1px solid #fff;
  float: left;
  text-align: center;
  line-height: 100px;

}
.main .dl .dt img{
  margin-top: 20px;
  width: 95%;
  height: 72px;
}
.main .dl .dd{
  height:123px;
  width: 73%;
  float: right;
  border-bottom: 1px solid #ccc; 
}
.main .dl .list{
  display: block;
  height: 33px;
  width: 100%;
  line-height: 33px;
  font-size: 14px;
}
 .main .dl .dd .list2{
  height: 20px;
  line-height: 20px;
}

.main .dl .dd .list span{
  float: left;
  width: 80%;
  height: 100%;
}
.main .dl .dd .list strong{
  width: 20%;
  text-align:left;
  float: left;
}
.main .dl .dd .list b{
  font-size: .16rem;
}

.main .dl .dd .list2{
  font-weight: 600;
  font-size: .16rem;
}
.main .dl .dd .list span i{
  font-style: normal;
  font-size:.16rem;
  padding: 0 2px; 
}
.main .dl .dd .list strong{
  font-size: .16rem;
}
.main .dl .dd .list1 strong{
  font-weight: 900;
  color:#f17863; 
}
.main .dl .dd .list span b{
  color:#000;
}
.wrap{
  width: 100%;
}
.box2{
  font-size: 16px;
}


.l-pulldown,.l-pullup{
  height:40px;
}
.l-pulldown span,.l-pullup span{
  font-size: 14px;
}
.search{
  width: 100%;
  height: 32px;
  background:#ccc;
  position: absolute;
  top:10px;
  opacity: .5;
}
.searchText{
  width: 75%;
  position:fixed;
  top:10px;
  left: 10%;
  background-color: #fff;
  outline: none;
  height: 30px;
  border-radius:30px;
  text-align: center;
  border: none;
}
.search{
  position: fixed;
  top: 1%;
  z-index: 1;
  background: transparent;
  width: 100%;
  height: 30px;
}
.search input{
  width: 80%;
  height: 100%;
  opacity: 1;
  border: none;
  background: #fff;
  border-radius: 20px;
  margin-left: 10%;
  outline: none;
  padding: 0 20px;
  box-sizing:border-box;
}


</style>
