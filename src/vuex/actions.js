const adds=function({commit,state},nums){
	commit("adds",nums)
}
const reduce=function({commit,state}){
	commit("reduce",1)
}
export {
	adds,
	reduce
}
