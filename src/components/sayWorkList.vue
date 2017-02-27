<template>
	<div class="sayWorkList">
		<div class="topick">
			<router-link to="/sayWork">返回</router-link><b>问题</b>	
		</div>
		<div class="title">
			<p class="item_top">{{datas.title}}<b>{{datas.titleCity}}</b></p>
			            <p class="item_title"><b>{{datas.topickTitle}}</b></p>
			            <p class="item_athor">
			              <img src="../img/mes3.jpg" alt="">
			              <span><b>{{datas.athorName}}</b>{{datas.athorPosition}}</span>
			              <i>{{datas.time}}</i>
			            </p>
			            <p class="item_text">{{datas.question}}</p>
			            <p class="item_ping">
			              <span><i :class="" @click="addprise">赞</i><b>{{datas.praiseCount}}</b></span>
			              <span><i>评论</i><b>{{datas.discusCount}}</b></span>
			            </p>
			            <div class="priseBox">
			            	<div class="input">
			            		<input type="text" ref="input"><button @click="subs">发表评论</button>
			            		<p v-if="isWarn">输入的内容不能为空</p>
			            	</div>
			            	<p v-for="list in inputs">{{list}}</p>
			            </div>
		</div>
		
	</div>

</template>
<script>
	export default {
		name:"sayWorkList",
		mounted(){
			this.id = this.$route.params.id
			let that = this
			this.$http({
				url:"http://localhost:8080/api/data",
				method:"GET"
			}).then(function(res){
				that.datas = res.body.data.sayWorkPage[that.id]
				
			},function(err){
				console.log(err)
			})	
		},
		data(){
			return {
				id:null,
				datas:{},
				inputs:[],
				isWarn:false
			}
		},
	  methods:{
	    addprise(){
	      this.datas.praiseCount++;
	    },
	    subs(){
	    	let val = this.$refs.input.value
	    	if(val){
	    		this.inputs.push(val)
	    		this.datas.discusCount = this.inputs.length
	    		this.isWarn = false
	    	}else{
	    		this.isWarn = true
	    	}
	    	this.$refs.input.value = ''	
	    }
	  }

	}
</script>
<style scoped>
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
a{
  -webkit-tap-highlight-color:transparent;
}
.iconfont{
  display: block;
  font-size: 24px;
}
.title{
	width: 100%;
	height: 100%;
	padding: 0 5%;
	box-sizing:border-box;
}
.topick{
	width: 100%;
	height: 44px;
	border-bottom: 1px solid #999;
}
.topick a{
	display: inline-block;
	width: 20%;
	height: 100%;
	text-align: center;
	line-height: 44px;
}
.topick b{
	display: inline-block;
	width: 60%;
	height: 100%;
	text-align: center;
	line-height: 44px;
}
.input input{
	outline: none;
	border:1px solid #999;
	display: inline-block;
	width: 40%;
	height: 20px;
}
.input button{
	background: green;
	border: none;
	color:#fff;
	outline: none;
	display: inline-block;
	height: 20px;
}
.input p{
	font-size: 14px;
	display: inline-block;
	color:red;
}
</style>