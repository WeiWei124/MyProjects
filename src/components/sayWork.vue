<template>
  <div class="sayWork">
    
    <div class="title">
      <i class="iconfont icon-maozi"></i>
      <span>言职</span>
      <router-link to="mine">
        <i class="iconfont icon-renwu"></i>
      </router-link>
    </div>
    <scroller lockX bounce
      ref="fresh">
      <div class="main">
        <div class="main_inner">
        <div class="banner">
          <swiper :aspect-ratio="400/800" :show-dots="false">
            <swiper-item><img src="../img/mes1.jpg" alt=""> </swiper-item>
            <swiper-item><img src="../img/home_ba2.jpg" alt=""> </swiper-item>
            <swiper-item><img src="../img/mes1.jpg" alt=""> </swiper-item>
          </swiper>
        </div>
        <div class="focus">
          <div class="focus_title">
            大家都在关注
          </div>
            <div class="focus_imgs">
              <swiper :aspect-ratio="220/1000" class="focus_swiper" :showDots="false">
                <swiper-item class="swiperItem"><img src="../img/mes2.jpg" alt=""><img src="../img/mes3.jpg" alt=""></swiper-item>
                <!-- <swiper-item class="swiperItem"><img src="../img/mes3.jpg" alt=""></swiper-item> -->
                <swiper-item class="swiperItem"><img src="../img/mes2.jpg" alt=""><img src="../img/mes3.jpg" alt=""></swiper-item>
              </swiper>
            <!-- <img src="../img/mes2.jpg" alt="">
            <img src="../img/mes3.jpg" alt=""> -->
          </div>
        </div>
        <div class="topick">
          <div class="topick_items" v-for="item in datas">
            <router-link :to="{name:'sayWorkList',params:{id:item.id}}" >
            <p class="item_top">{{item.title}}<b>{{item.titleCity}}</b></p>
            <p class="item_title"><b>{{item.topickTitle}}</b></p>
            <p class="item_athor">
              <img src="../img/mes3.jpg" alt="">
              <span><b>{{item.athorName}}</b>{{item.athorPosition}}</span>
              <i>{{item.time}}</i>
            </p>
            <p class="item_text">{{item.question}}</p>
            <p class="item_ping">
              <span><i :class="" @click="addprise">赞</i><b>{{item.praiseCount}}</b></span>
              <span><i>评论</i><b>{{item.discusCount}}</b></span>
            </p>
            </router-link>
          </div>

        </div>
      </div>
     </scroller>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperItem,Scroller } from 'vux';
export default {
  name: 'sayWork',
  data () {
    return {
      datas:[],
      ping:'输入评论内容'
    }
  },
  components:{
    Swiper, SwiperItem,Scroller
  },
  mounted () {
    var that=this;
    this.$http({
      url:"http://localhost:8080/api/data",
      method:"GET"
    }).then(function(res){
      that.datas=res.body.data.sayWorkPage;
      this.$nextTick(() => {
        this.$refs.fresh.reset()
      })
    })
  },
  methods:{
    addprise(){
      console.log(this.datas)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
  -webkit-tap-highlight-color:transparent;
}
.iconfont{
  display: block;
  font-size: 24px;
}
.item_ping span i{
  font-style: normal;
}
.item_ping span{
  padding-right: 10px;
  color: #666
}
.item_ping{
  line-height: 20px;
  padding-bottom: 5px;
}
.item_text{
  color: #666;
  line-height: 20px;
}
.item_athor i{
  font-style: normal;
}
.item_athor span b{
  font-weight: normal;
  color: #666;
  padding: 0 10px;
} 
.item_athor span{
  display: inline-block;
  width: 66%;
  padding-left: 10px;
  color: #999;
}
.item_athor img{
  width: 18px;
  height: 18px;
  border-radius: 50%;
  float: left;
}
.item_athor{
  padding: 16px 0px;
}
.item_title{
  line-height: 25px;
}
.item_top b{
  font-weight: normal;
  color: #000;
}
.item_top{
  color: #999;
  line-height: 55px;
}
.topick_items{
  background: #fff;
  margin-bottom: 10px;
  padding: 0 10px;
  box-sizing:border-box;
}
.topick_items a{
  display: block;
}
.focus_imgs img{
  width:175px;
  height: 80px; 
  margin-right: 5px;
}
.focus_swiper{
  height: 100%;
}
.focus_imgs{
  height: 80px;
  width: 100%;
}
.focus_title{
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding-left: 30px;
  font-weight: 600;
  box-sizing:border-box;
}
.focus{
  width: 100%;
  height: 132px;
  background: #fff;
  margin: 10px 0;
}

.banner img{
  width: 100%;
  height: 100%;
}
.banner{
  width: 100%;
  height: 180px;
}
.main{
  width: 100%;
  height: 100%;
  flex:1;
  overflow-y:auto;
}
.title span{
  width: 100%;
  height: 100%;
  flex:1;
  text-align: center;
  line-height: 40px;
  font-weight: 900;
  font-size: 18px;
}
.title i{
  font-style: normal;
  display: inline-block;
  width: 50px;
  height: 100%;
  text-align: center;
  line-height: 40px;
}
.title{
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #ccc;
  display: flex;
  display: -webkit-flex;
}
.sayWork{
  width: 100%;
  height: 100%;
  font-size: 16px;
  background: #f8f8f8;
  display: flex;
  display: -webkit-flex;
  flex-direction:column;
}
.swiperItem{
  width: 50%;
  height: 100%;
}
.item_pingText{
  height: 22px;
  padding-bottom: 10px;
}
.item_pingText input{
  border: 1px solid #ccc;
  height: 100%;
}
.item_pingText button{
  border: none;
  height: 100%;
  outline-color: #ccc;
  background: #ccc;
}
.itemresoult span{
  display: block;
  width: 100%;
  height: 26px;
  line-height: 26px;
}
</style>
