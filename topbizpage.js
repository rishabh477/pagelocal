var http=require('http'); 
var fs=require('fs');
	var html,css;
	fs.readFile('css/newpage.css',function(err,data){
						if(err) throw err;
						css=data;
						});
	fs.readFile('topbiz.html',function(err,data){
						if(err) throw err;
						html=data;
					});
	http.createServer(function (req,res) {
			if(req.url ==='/css/newpage.css'){
				res.writeHead(200,{'content-type':'text/css'})
				res.write(css);
				}
			else {
				if(req.url ==='/'){	
				res.writeHead(200,{'content-type':'text/html'});
				res.write(html);
				}
				else {
				res.writeHead(404,{'content-type':'text/html'});
				res.write('404 not found');
					}
				
				}
				res.end();
	console.log('hello!');
}).listen(2000);