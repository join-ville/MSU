import App from '../app'
import upload from "../frames/upload/upload";
const imgupload = r => require.ensure([], () => r(require('../frames/upload/upload')), 'imgupload')

const dialogue = r => require.ensure([], () => r(require('../frames/dialogue/dialogue')), 'dialogue')
const singlechat = r => require.ensure([], () => r(require('../frames/conversation/singlechat')), 'singlechat')
const imageupload = r => require.ensure([], () => r(require('../frames/conversation/chatmessage/imageupload')), 'imageupload')
const groupchat = r => require.ensure([], () => r(require('../frames/conversation/groupchat')), 'groupchat')
const chatmessage = r => require.ensure([], () => r(require('../frames/conversation/chatmessage/chatmessage')), 'chatmessage')
const groupchatmessage = r => require.ensure([], () => r(require('../frames/conversation/chatmessage/groupchatmessage')), 'groupchatmessage')

const addressbook = r => require.ensure([], () => r(require('../frames/addressbook/addressbook')), 'addressbook')
const details = r => require.ensure([], () => r(require('../frames/addressbook/details/details')), 'details')
const more = r => require.ensure([], () => r(require('../frames/addressbook/details/more/more')), 'more')

const find = r => require.ensure([], () => r(require('../frames/find/find')), 'find')
const friendcircle = r => require.ensure([], () => r(require('../frames/find/friendcircle/friendcircle')), 'friendcircle')
const miniapps = r => require.ensure([], () => r(require('../frames/find/miniapps/miniapps')), 'miniapps')
const me = r => require.ensure([], () => r(require('../frames/me/me')), 'me')
const personaldetails = r => require.ensure([], () => r(require('../frames/me/personaldetails/personaldetails')), 'personaldetails')
const photoalbum = r => require.ensure([], () => r(require('../frames/me/photoalbum/photoalbum')), 'photoalbum')
const collect = r => require.ensure([], () => r(require('../frames/me/collect/collect')), 'collect')
const wallet = r => require.ensure([], () => r(require('../frames/me/wallet/wallet')), 'wallet')
const cardbag = r => require.ensure([], () => r(require('../frames/me/cardbag/cardbag')), 'cardbag')

const computer = r => require.ensure([], () => r(require('../frames/computer/computer')), 'computer')
const transfer = r => require.ensure([], () => r(require('../frames/transfer/transfer')), 'transfer')
const settings = r => require.ensure([], () => r(require('../frames/me/settings/settings')), 'settings')
const search = r => require.ensure([], () => r(require('../frames/search/search')), 'search')
const addFriend = r => require.ensure([], () => r(require('../frames/search/addFriend')), 'addFriend')
const searchResult= r => require.ensure([], () => r(require('../frames/search/details')), 'searchResult')

const newmessage = r => require.ensure([], () => r(require('../frames/me/settings/detailset/newmessage')), 'newmessage')
const disturbance = r => require.ensure([], () => r(require('../frames/me/settings/detailset/disturbance')), 'disturbance')
const chat = r => require.ensure([], () => r(require('../frames/me/settings/detailset/chat')), 'chat')
const privacy = r => require.ensure([], () => r(require('../frames/me/settings/detailset/privacy')), 'privacy')
const currency = r => require.ensure([], () => r(require('../frames/me/settings/detailset/currency')), 'currency')
const aboutwc = r => require.ensure([], () => r(require('../frames/me/settings/detailset/aboutwc')), 'aboutwc')
const help = r => require.ensure([], () => r(require('../frames/me/settings/detailset/help')), 'help')
const login = r => require.ensure([], () => r(require('../frames/me/settings/detailset/login')), 'login')
const register = r => require.ensure([], () => r(require('../frames/me/settings/detailset/register')), 'register')
const test = r => require.ensure([], () => r(require('../../src/chat')), 'test')
export default[{
	path:'/',
	component:App,
	children: [
    {path: '', redirect: '/dialogue'},   //地址为空时跳转登录页面
		//{path: '', redirect: '/me/settings/login'},   //地址为空时跳转登录页面
		{path: '/dialogue', component: dialogue, },//对话列表页
    {path: '/register', component: register, },//注册
		{
			path: '/singlechat',
			component: singlechat,
			children:[
				{
					path: '/singlechat/chatmessage',
					component: chatmessage,
          children: [
            {
              path: '/singlechat/chatmessage/imageupload',
              component: imageupload,
            }
          ]
				}
			]

		},		//单人对话详情页
		{
			path: '/groupchat',
			component: groupchat,
			children: [
				{
					path: '/groupchat/groupchatmessage',
					component: groupchatmessage,
				}
			]
		},			//群聊
		{path: '/addressbook',
      component: addressbook, meta:{ keepAlive: true},
			children: [
				{
					path: '/addressbook/details',
					component: details,		//详细资料
					children: [
						{
							path: '/addressbook/details/more',
							component:more,		//更多
						}
					]
				}
			]

		},	//通讯录
    {path: '/test',
      component: test,

    },
		{path: '/find', component: find,
			children:[
				{
					path:'/find/friendcircle',
					component:friendcircle, //朋友圈
				},
				{
					path:'/find/miniapps',
					component:miniapps, //小程序
				},
			]
		},	//发现
		{path: '/search', component: search},	//发现
    {path: '/searchResult', name:'searchResult',component: searchResult},
    {path: '/addFriend', component: addFriend},	//添加好友
		{path: '/me', component: me,
			children: [
				{path:'/me/settings',component: settings,//设置
					children: [
						{
							path:'/me/settings/newmessage',
							component:newmessage,
						},	//新消息提醒
						{
							path:'/me/settings/disturbance',
							component:disturbance,
						},	//勿扰模式
						{
							path:'/me/settings/chat',
							component:chat,
						},	//聊天
						{
							path:'/me/settings/privacy',
							component:privacy,
						},	//隐私
						{
							path:'/me/settings/currency',
							component:currency,
						},	//通用
						{
							path:'/me/settings/aboutwc',
							component:aboutwc,
						},	//关于微信
						{
							path:'/me/settings/help',
							component:help,
						},	//帮助与反馈
						{
							path:'/me/settings/login',
							component:login,
						},	//退出
					]
				},
				{
					path:'/me/personaldetails',component : personaldetails,		//个人信息
				},
				{
					path:'/me/cardbag',component : cardbag,		//卡包
				},
				{
					path:'/me/photoalbum',component : photoalbum,		//相册
				},
				{
					path:'/me/collect',component : collect,		//我的收藏
				},
				{
					path:'/me/wallet',component : wallet,		//钱包
				},
 			]
		},	//我
		{path: '/computer', component: computer},	//电脑登录
		{path: '/transfer', component: transfer},	//文件传送助手
	]
}]
