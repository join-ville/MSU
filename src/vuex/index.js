//状态

import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import actions from './action'
import {imgurl} from "../config/env";

Vue.use(Vuex)

const state = {
	mute: false,			//是否静音
	computershow: false,		//是否电脑登录
	infor: {},				//联系人信息
	contactList: [],		//对话列表
	userInfo: {},			//用户信息
	newImg: '',				//主题图片地址
	imagestatus: false,
	firendwarn: true,		//朋友圈提示红色按钮
	consumerthing: false,	//登录弹窗显隐
	allgroup:[],			//所有群聊的人
  logined:false,
  username:'',
  baseurl:'http://106.53.58.194:8888/msu_im/',
  token:'',
	gotoDetail: ''
}


export default new Vuex.Store({
	state,
	actions,
	mutations,
})
