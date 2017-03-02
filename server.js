var http = require("http");
var url = require("url");

function start(route,handle){
	function onRequest(request,response){
		var pathname = url.parse(request.url).pathname;
		console.log("Request for" +pathname+"received");

		//route(handle,pathname);

		//route(handle,pathname,response);

		//response.writeHead(200,{"Content-Type":"text/plain"});
		//var content = route(handle,pathname);
		// response.write(content);
		// response.end();

		// var postData = "";
		// request.setEncoding("utf8");
		// request.addListener("data",function(postDataChunk){
		// 	postData += postDataChunk;
		// 	console.log("Received POST data chunk" + postDataChunk + ".");

		// });

		route(handle,pathname,response,request);

		// request.addListener("end",function(){
		// 	route(handle,pathname,response,postData);
		// })
	}


	http.createServer(onRequest).listen(8888);
}


exports.start = start;