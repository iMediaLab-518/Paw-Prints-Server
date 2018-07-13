/**
 *
 * @authors Wang Hanze
 * @date    2018-07-13 00:07:18
 * @version 1.0.0
 */

/* jshint esversion: 6 */

let http = require('http');
let fs = require('fs');
let url = require('url');
let querystring = require('querystring');

let session_id = 0;

http.createServer((request, response) => {
	let method = request.method;
	let params = url.parse(request.url, true);
	//let uri = "html/";
	let path = params.pathname;
	console.log(method + "---" + path);

	if (method === "GET") {
		switch (path) {
			case "/": //默认
				response.writeHead(200, {
					'Content-Type': 'text/plain'
				});
				// 发送响应数据
				response.end('Welcome to Paw-Prints Project Background Server\n');
				break;
				//case "/index.html":
				//uri = "index.html";
				//handleGet(uri, params, res);
				//break;
			case "/test":
				let json = {
					"session_id": session_id,
					"context": 'json test'
				};

				session_id++;

				response.writeHead(200, {
					'Content-Type': 'text/plain'
				});
				// 发送响应数据
				response.end(JSON.stringify(json));
				break;
			default:
				console.log("Indivald request " + url);
		}

	} else {
		//处理post请求
		switch (path) {
			case "/html/add":
				handlePost(req, res, querystring);
				break;
			default:
				console.log("Indivald request " + path);
		}
	}
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
