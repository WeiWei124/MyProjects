import Vuex from 'Vuex'
import Vue from 'vue'
//需要触发的事件
import * as actions from "./actions"
import * as getters from "./getters"

Vue.use(Vuex)
//console.log(actions)
//需要用到的变量
const state={
	count:0
}

//事件所要触发的函数
const mutations={
	adds(state,num){
		state.count=state.count+num
	},
	reduce(state,num){
		if(state.count<=0)return;
		state.count=state.count-num
	}
}
		//此处必须为固定的Store，且S大写。
export default new Vuex.Store({
	state,//如果用es6语法写，变量名必须为这几个
	actions,
	mutations,
	getters
})