<template>
  <div class="homeList">
    <div class="header">
      <router-link to="/home"><i class="iconfont icon-fanhui"></i></router-link>
      <b>职位详情</b>
      <span>
        <i>上传</i><i>收藏</i>
      </span>
    </div>
    <div class="main">
      <div class="innerMain">
         <div class="top">
          <p class="zhiwei">
            <b>web前端开发工程师</b>
            <span>[15K-25K]</span>
          </p>
          <p class="tiaojian">
            <span>北京</span>
            <span>3-5年</span>
            <span>本科</span>
            <span>全职</span>
          </p>
          <p class="youhuo">职位诱惑:七险一金,定期体检,年度旅游</p>
        </div>
         <dl class="qiyejieshao">
          <dt> <img src="../img/home_b1.jpg" alt=""></dt>
          <dd>
            <p class="dlF">
              <span><b>随身云</b><img src="../img/homeList1_03.jpg" alt=""></span>
            </p>
            <p>B轮|50-150人|移动互联网,数据服务</p>
            <p>已有<span>7</span>条面试评价</p>
          </dd>
        </dl> 
         <div class="discript">
          <div class="work_discript">
            职位描述
          </div>
          <div class="discriptMain">
            <p class="discriptTitle">
              <span>web前端</span>
              <span>前端</span>
              <span>web</span>
            </p>
            <p class="discript_mast">
              职位描述：
              <br>
              1.熟悉HTML/CSS/Javascript等前端技术，掌握至少一种JS(如AngulatJS/ReactJs/VUE等)框架。
              <br>
              2.掌握至少一门非前端开发语言(如Python/Java/Ruby等)，并有一定的实战经验。
              <br>
              3.在BI分析、数据仓库建设、数据可视化相关领域至少1年从业经验
              <br>
              工作职责：
              <br>
              1.参与公司平台产品开发
              <br>
              2.数据可视化解决方案，提升数据价值。
              <br>
              3.前端性能调优，组件化，设计可维护可扩展的前端架构。
        
            </p>
          </div>
        </div>
      </div>
      <div class="address">
        <p>
          <span class="address_text">望京</span>
          <span class="address_title">
            <b>工作地址</b>
          </span>
        </p>
        <p>广顺大街33号福马大厦B座7层701-2</p>
      </div>
      <div class="athor">
        <p class="athor_title">
          职位发布者
        </p>
        <dl class="athor_text">
          <dt>
            D
          </dt>
          <dd>
            <p class="athor_footer">
              <span class="athor_active">最近活跃：1周前</span>
              <span>Danielle</span>
            </p>
            <p>HR</p>
          </dd>
        </dl>
        <p class="athor_last">
          <span>简历处理不紧不慢</span>
          <span>偶尔回复聊天消息</span>
          <span>下午活跃</span>
        </p>
      </div>
    </div>
      <div class="footer">
        <span class="footer_send">发送简历</span>
        <span class="footer_talk">和TA聊聊</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'homeList',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.iconfont{
  display:block;
  font-size: 32px;
}
.footer .footer_talk{
  width: 65%;
  height: 100%;
  background:#0db790; 
  float: right;
  text-align: center;
  line-height: 36px;
  color: #fff;
}
.footer .footer_send{
  width: 25%;
  height: 100%;
  float: left;
  border: 1px solid #0db790;
  text-align: center;
  line-height: 36px;
  color: #0db790;

}
.footer{
  width: 100%;
  height:38px;
  padding: 0 10px;
  box-sizing:border-box;
}
.athor_last span{
  font-size: .16rem;
  padding: 10px;
  background: #ecf9f5;
  color: #00b289
}
.athor_active{
  float: right;
}
.athor_text dd p{
  line-height: 40px;
}
.athor_text dd{
   color: #999;
}
.athor dl dd{
  float: left;
  width: 80%;
}
.athor dl dt{
  width: 44px;
  height: 44px;
  border: 2px solid #00b38a;
  border-radius: 50%;
  text-align: center;
  line-height: 44px;
  background:#f2fbf9;
  font-weight: 900;
  color: #00b38a; 
  float: left;
  margin: 15px 10px 0 0;

}
.athor dl{
  width: 100%;
  height: 100px;

}
.athor .athor_title{
  width: 100%;
  height:50px;
  border-bottom: 1px solid #ccc;
  line-height: 50px;
  font-weight: 900; 
}
.athor{
  width: 100%;
  height: 210px;
  background: #fff;
  padding: 10px;
  box-sizing:border-box;
}
.address_text{
  float: right;
  background: #ffba0d;
  padding:5px 10px;
  margin-top: 10px;
  color: #fff;
  border-radius: 12px;
  font-size: .16rem;
}
.address .address_title{
  width: 100%;
  height: 50px;
  line-height: 50px;

}
.address p:nth-of-type(2){
   padding: 6px;
   color: #999;
}
.address p:nth-of-type(1) {
    border-bottom: 1px solid #ccc; 
}
.address{
  width: 100%;
  height: 106px;
  margin: 10px 0;
  background: #fff;
  padding: 10px;
  box-sizing:border-box;
 
}
.discript_mast{
  color: #666;
}
.discriptTitle span{
  padding: 7px 15px;
  border: 1px solid #37c3a3;
  border-radius: 15px;
  color: #37c3a3;
  box-sizing:border-box;
}
.discriptTitle{
  width: 100%;
  height: 75px;
  line-height: 75px;
}
.discript .work_discript{
  width: 100%;
  height:40px;
  line-height: 40px;
  font-weight: 900;
  border-bottom: 1px solid #ccc; 
}
.discript{
  width: 100%;
  height:390px;
  background: #fff;
  margin-top: 20px;
  padding: 10px 10px;
  box-sizing:border-box;
}
.dlF img{
  padding: 5px 0 0 5px;
}
.qiyejieshao .dlF{
  font-weight: 600;
  font-size: .16rem;
}
.qiyejieshao dd p b{
  float: left;
}
.qiyejieshao dd p img{
  width: 58px;
  height: 21px;
  float: left;

}
.qiyejieshao dd p:nth-of-type(3) span{
  font-size: .16rem;
  color: #0db790;
}
.qiyejieshao dd p{
  line-height: 33px;
  font-size: .16rem;
  clear: both;
}
.qiyejieshao dd{
  width: 79%;
  height: 100%;
  float: left;
}
.qiyejieshao dt img{
  display: inline-block;
  width:55px;
  height: 55px;
  border: 1px solid #ccc;
  margin-top: 23px;
}
.qiyejieshao dt{
  float: left;
  width:72px;
  height: 100px;
  text-align: center;
}

.qiyejieshao{
  width: 100%;
  height: 125px;
  background: #fff;
  padding: 10px 10px;
   box-sizing:border-box
}
.main .youhuo{
  color: #a1a1a1;
}
.main .youhuo{
  line-height: 35px;
}
.main .tiaojian{
  line-height: 30px;
  font-weight: 600;
}
.main .zhiwei span{
  color: #fd5f39;
  padding-left: 10px;
  font-weight: 900;
}
.main .zhiwei{
  font-size: .14rem;
  line-height: 40px;
}
.main .top{
  background: #fff;
  box-sizing:border-box;
  padding: 10px 10px;
  border-bottom: 1px solid #ccc;
}
.main{
  width: 100%;
  height: 100%;
  background: red;
  flex:1;
  overflow: auto;
  background: #f0f1f5;

}
.header a{
  display: inline-block;
  width:45px;
  text-align: center;
  line-height: 45px; 
}
.header b{
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 45px;
  flex:1;
  font-weight: 400;
}
.header span{
  display: inline-block;
  width:60px;
  line-height: 45px;
  
}
.header span i{
  font-style: normal;
}
.header{
  width: 100%;
  height:45px;
  background:#f6f6f8;
  border-bottom: 1px solid #bebebe;
  display: flex;

}
*{
  font-size: 16px;
}
.homeList{
  width: 100%;
  height: 100%;
  display: flex;
  display: -webkit-flex;
  flex-direction:column;


}
h1, h2 {
  font-weight: normal;
}

ul,li {
  list-style-type: none;
  padding: 0;
}
</style>
