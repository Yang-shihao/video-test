const snWebServer = uni.requireNativePlugin('sn-webserver');

/**
 * 检查端口是否可用
 * @param {Number} port 
 */
export function checkPort(port) {
	return new Promise((resolve, reject) => {
		snWebServer.checkPort(port, e => {
			if (e.code == 0) {
				resolve([null, true])
			} else {
				resolve([e, null])
			}
		})
	})
}

/**
 * 停止所有Web服务
 */
export function stopAll() {
	snWebServer.stopAll()
}

/**
 * Web服务
 */
export class WebServer {

	constructor(port) {
		this.port = port
		snWebServer.createServer(port, e => {
			if (e.code == 0) {
				console.log('createServer(' + port + ') success.')
			} else {
				console.log('createServer(' + port + ') fail. Reason is ' + e.msg)
			}
		})
	}

	/**
	 * 获取wifi ip
	 * @param {Function} cb
	 */
	getIp(cb) {
		snWebServer.getIp(cb)
	}

	/**
	 * 获取有线ip
	 * @param {Function} cb
	 */
	getWiredIp(cb) {
		snWebServer.getWiredIp(cb)
	}

	/** 添加静态站点映射
	 * @param {string} url
	 * @param {string} path
	 */
	addWebStatic(url, path) {
		snWebServer.addStaticWeb(this.port, url, path)
	}

	/** 
	 * 设置上传路径，默认_doc/uploadFiles
	 * @param {string} dir
	 */
	setUploadDir(dir) {
		snWebServer.setUploadDir(this.port, dir)
	}

	/**
	 * 是否开启跨域，默认禁止跨域
	 * @param {boolean} flag
	 */
	cors(flag) {
		snWebServer.cors(this.port, flag)
	}

	/**
	 * @param {string} origin 默认*
	 */
	corsOrigin(origin) {
		snWebServer.setCorsOrigin(this.port, origin)
	}

	/**
	 * 文件映射
	 * @param {string} url
	 * @param {Function} filePath
	 */
	file(url, filePath) {
		snWebServer.file(this.port, url)
		snWebServer.fileResp(this.port, url, filePath)
	}

	/**
	 * 注册GET方法路由
	 * @param {string} url
	 * @param {Function} cb
	 */
	get(url, cb) {
		let port = this.port
		let response = {
			send(data) {
				snWebServer.getResp(port, url, data)
			},
			sendFile(path) {
				snWebServer.fileResp(port, url, path)
			}
		}
		snWebServer.get(port, url, request => {
			cb(request, response)
		})
	}
	/**
	 * 注册POST方法路由
	 * @param {string} url
	 * @param {Function} cb
	 */
	post(url, cb) {
		let port = this.port
		let response = {
			send(data) {
				snWebServer.postResp(port, url, data)
			},
			sendFile(path) {
				snWebServer.fileResp(port, url, path)
			}
		}
		snWebServer.post(port, url, request => {
			cb(request, response)
		})
	}

	/**
	 * 注册PUT方法路由
	 * @param {string} url
	 * @param {Function} cb
	 */
	put(url, cb) {
		let port = this.port
		let response = {
			send(data) {
				snWebServer.putResp(port, url, data)
			},
			sendFile(path) {
				snWebServer.fileResp(port, url, path)
			}
		}
		snWebServer.put(port, url, request => {
			cb(request, response)
		})
	}

	/**
	 * 注册DELETE方法路由
	 * @param {string} url
	 * @param {Function} cb
	 */
	delete(url, cb) {
		let port = this.port
		let response = {
			send(data) {
				snWebServer.deleteResp(port, url, data)
			},
			sendFile(path) {
				snWebServer.fileResp(port, url, path)
			}
		}
		snWebServer.delete(port, url, request => {
			cb(request, response)
		})
	}
	/**
	 * 开启服务
	 */
	start(cb) {
		snWebServer.start(this.port, e => {
			if (e.code == 0) {
				console.log('startServer(' + this.port + ') success.')
				cb && cb(true)
			} else {
				console.log('startServer(' + this.port + ') fail. Reason is ' + e.msg)
				cb && cb(false, e.msg)
			}
		})
	}
	/**
	 * 停止服务
	 */
	stop(cb) {
		snWebServer.stop(this.port, e => {
			if (e.code == 0) {
				cb && cb(true)
				console.log('stopServer(' + this.port + ') success.')
			} else {
				cb && cb(false, e.msg)
				console.log('stopServer(' + this.port + ') fail. Reason is ' + e.msg)
			}
		})
	}

}