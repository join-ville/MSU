//获取图片地址
const imgurl = 'http://cangdu.org/files/images/';
let baseUrl;

if (process.env.NODE_ENV == 'development') {
	baseUrl = 'http://106.53.58.194:8088'
}else{
	baseUrl = 'http://106.53.58.194:8088'
}
export {
	baseUrl,
	imgurl
}
