import Vue from 'vue'
import Vuex from 'vuex';
import logger from 'vuex/dist/logger'
import mutations from './mutations'
import getters from './getters'
//导入vuex
Vue.use(Vuex);

//创建状态树
let state={cartList:[]};

//getters相当于state的计算属性（全局的计算属性）

//store容器创建

export default new Vuex.Store({
  state,
  mutations,
  getters,
  plugins:[logger()],
  strict:true//只能通过mutation来更改状态
});
