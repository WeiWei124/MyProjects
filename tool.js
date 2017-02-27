import Vue from "vue"
import mock from '../config-mock'//发布时，务必卸载mock
const mockData = Vue._Developing ? mock : {};//判断是否开启全局mocks数据

if(Vue._Developing){
	console.warn("请卸载mock数据")
}
//ajax
function ajax(arg){
	let urls = arg.url.split(".");
	//console.log(urls)

	//获取api中的地址
	let realUrl = Vue.apiConfig;
	for(let i=0,len=urls.length;i<len;i++){
		realUrl = realUrl[urls[i]]
	}
	realUrl = Vue._BasePath + realUrl;

	var options = {
		url:realUrl,
		data:arg.data,
		method:arg.method || Vue._HttpMethod,
		success:arg.success || function(){},
		error:arg.err || function(){}
	}

	//test mock
	if(!!urls[1] && mock[urls[1]] && mock[urls[1]].inservice){
		function mockTest(props){
			let mockdata = mock;
			for(let i=1;i<urls.length;i++){
				if(typeof(mockdata[urls[i]] == "function")){
					mockdata = mockdata[urls[i]](props)
				}else{
					mockdata = mockdata[urls[i]]
				}
			}
			return {
				data:mockdata.result,
				res:{data:mockdata}
			};
		}
		var mockdata = mockTest(arg.data)
		options.success(mockdata.data,mockdata.res);
		return;
	}
	//请求数据
	Vue.http({
		url:options.url,
		data:options.data,
		method:options.method,
		headers:{'Content-Type':'application/x-www-form-urlencoded'}
	}).then(function(response){
		//console.log(response)
		//成功
		if(!response.data.err_code){
			options.success(response.data,response)
		}
		//登录状态失效
		else if(response.data.err_code-0==4444){
			window.localStorage.removeItem("hasLogin");
			window.location.reload();
		}else{
			options.error(response.data.err_msg)
		}
	},function(response){
		options.error(response.statusText)
	})

}
function install(Vue){
	Vue.Tool = Vue.tool = {
		ajax
	}
	Object.defineProperties(Vue.prototype,{
		$Tool:{
			get:function(){
				return Vue.Tool
			}
		}
	})
}
if(window.Vue){
	Vue.use(install);
}

module.exports=install;
