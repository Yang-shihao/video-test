/**
 * HttpServer插件暂时只是支持Android端 支持IOS端
 * */
// #ifdef APP-PLUS
const dcHttp = uni.requireNativePlugin('Wind-Http');
const modal = uni.requireNativePlugin('modal');
// #endif

class HttpServer {
	static instance = null;
	static localUrl = ""; //默认就是这个地址每次初始化成功的时候触发
	constructor() {
		//初始化一些基础信息
	}
	init(pt = 8686, dir = '/storage/emulated/0/Android/data/') {
		return new Promise((resolve, reject) => {
			//这里做判断
			if (dcHttp == undefined) {
				resolve(false)
				return;
			}
			//先停止httpserver 然后重新开启
			console.log('init ...', pt, dir)
			try {
				dcHttp.init({
					port: pt,
					path: dir
				}, (res) => {
					console.log('dcHttp.init ok ....', res)
					resolve(res)
				})
			} catch (e) {
				console.log('error has occured in init http server', e)
				resolve(false)
			}

		})

	}
	tips(msg = 'http server 启动成功！') {
		modal.toast({
			message: 'http server 启动成功！',
			duration: 1.5
		});
	}
	//开启服务 
	start() {
		return new Promise((resolve, reject) => {
			try {
				console.log('dcHttp start ...')
				dcHttp.start({}, () => {})
				resolve(true)
			} catch (e) {
				resolve(false)
				console.log('error has occured in start http server', e)
			}
		})
	}

	//停止服务
	finish() {
		return new Promise((resolve, reject) => {
			let t = null;
			try {
				dcHttp.finish()
				t = setTimeout(() => {
					clearTimeout(t)
					t = null;
					resolve(true)
				}, 500)
			} catch (e) {
				console.log('error has occured in finish ', e)
				resolve(false)
			}

		})
	}

	//销毁
	destory() {

	}
	static getInstance() {
		if (HttpServer.instance instanceof HttpServer) {
			return HttpServer.instance
		} else {
			HttpServer.instance = new HttpServer();
			return HttpServer.instance;
		}
	}
}

export default HttpServer.getInstance()