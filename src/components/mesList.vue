<template>
  <div class="mesList">
    <div class="top">
      {{datas.mesList}}
    </div>
    <div class="main">
      <div class="main_top">
        <p class="main_talk"><img src="../img/mes_login1.jpg" alt=""><span>{{datas.talk}}</span><b>x</b></p>
        <div class="main_content">
          <dl>
            <dt>
              <img src="../img/mes_login2.jpg" alt="">
            </dt>
            <dd>{{datas.status}}</dd>
          </dl>
          <dl>
            <dt>
              <img src="../img/mes_login3.jpg" alt="">
            </dt>
            <dd>{{datas.offer}}</dd>
          </dl>
          <dl>
            <dt>
              <img src="../img/mes_login4.jpg" alt="">
            </dt>
            <dd>{{datas.tongzhi}}</dd>
          </dl>
        </div>
      </div>
      <div class="main_bot">
        <dl>
          <dt><img src="../img/mes_login5.jpg" alt=""></dt>
          <dd>
            <p class="main_see">{{datas.seeMe}}</p>
            <p class="main_hasMes">{{datas.noMes}}</p>
          </dd>
        </dl>
      </div>
    </div>
    
   
  </div>
</template>

<script>
export default {
  name: 'mesList',
  data () {
    return {
      datas:[]
    }
  },
  mounted () {
    console.log(this)
    var that=this;
    this.$http({
      url:"http://localhost:8080/api/data",
      method:"GET"
    }).then(function(res){
      that.datas=res.body.data.mesPage.mesList;
      //console.log(that.datas)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main_bot dl .main_hasMes{
  color: #666;
}
.main_bot dl .main_see{
  font-size: 16px;
  font-weight: 900;
}
.main_bot dl dd{
  float: left;
  padding-left: 20px;
}
.main_bot dl dt img{
  width: 40px;
  height: 40px; 
}
.main_bot dl dt{
  float: left;
}
.main_bot dl{
  padding-top: 15px;
}
.main_bot{
  width: 100%;
  height:65px; 
  background: #fff;
  margin-top: 15px;
  padding: 0 10px;
  box-sizing:border-box;
}
.main_content dl dd{
  color: #999;
}
.main_content dl dt img{
  width: 40px;
  height: 40px;
}
.main_content dl{
  float: left;
  text-align: center;
  flex:1;
  padding: 20px 0;
}
.main_content{
  width: 100%;
  display: flex;
  display: -webkit-flex;

}
.main_talk span{
  float: left;
  width: 87%;
}
.main_talk img{
  width: 15px;
  height: 15px;
  padding-right: 10px;
  float: left;
}
.main_talk{
  width: 100%;
  border-bottom: 1px solid #ccc;
  padding: 10px 10px;
  box-sizing:border-box;
}
.main_top{
  width: 100%;
  background: #fff;
}
.main{
  width: 100%;
  height: 100%;
  flex:1;
  background: #f9f9f9;
 
}
.top{
  width: 100%;
  height: 45px;
  text-align: center;
  line-height: 45px;
  border-bottom: 1px solid #999;
  background: #f9f9f9;
  font-size: 16px;
}
.mesList{
  width: 100%;
  height: 100%;
  display: flex;
  display: -webkit-flex;
  flex-direction:column;
}
*{
  font-size: 14px;
}
</style>
