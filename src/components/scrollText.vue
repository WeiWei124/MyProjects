<template>
	<div class="scrollText">
		 <router-link to="/VuexText">进入项目页面</router-link> 
      <div id="app">
  <input v-model='search' />
  <ul v-for="item in searchData ">
    <li>{{item.name}},价格:￥{{item.price}}</li>
  </ul>
</div>


		
	</div>
</template>
<script>
import Vue from "Vue"
export default {
  name: 'scrollText',
  data(){
    return {
    search: '',
    products: [{
      name: '苹果',
      price: 25,
      category: "水果"
      }, {
        name: '香蕉',
        price: 15,
        category: "水果"
      }, {
        name: '雪梨',
        price: 65,
        category: "水果"
      }, {
        name: '宝马',
        price: 2500,
        category: "汽车"
      }, {
        name: '奔驰',
        price: 10025,
        category: "汽车"
      }, {
        name: '柑橘',
        price: 15,
        category: "水果"
      }, {
        name: '奥迪',
        price: 25,
        category: "汽车"
      }]
    }
  },
  computed: {
    searchData: function() {
      var search = this.search;

      if (search) {
        return this.products.filter(function(product) {
          return Object.keys(product).some(function(key) {
            return String(product[key]).toLowerCase().indexOf(search) > -1
          })
        })
      }

      return this.products;
    }
  }
}

	

</script>
<style>
.box1 {
  height: 100px;
  position: relative;
  width: 1490px;
}
.box2 {
  /* height:1440px; */
}
.box1-item {
  width: 200px;
  height: 100px;
  background-color: #ccc;
  display:inline-block;
  margin-left: 15px;
  float: left;
  text-align: center;
  line-height: 100px;
}
.box1-item:first-child {
  margin-left: 0;
}
.box2-wrap {
  height: 300px;
  overflow: hidden;
}
.scroll1{
	border: 1px solid blue;
}
.scroll2{
	border: 1px solid red;
}
</style>