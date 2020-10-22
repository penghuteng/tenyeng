const express = require('express')
const fs = require('fs')
const app = express()
const host = '192.168.50.72'
const port = 3000


// 解决跨域问题
app.use(require('cors')())

// 静态目录设置
app.use(express.static('static'))

// 首页配置
app.get('',(req,res)=>{
	let url = host + ":" + port +'/index.html'
	fs.readFile(url,(err,data)=>{})
})

// api配置
app.get('/api', (req, res) => {
	// res.header("Access-Control-Allow-Origin",'*')
	if(req.data.text == "images-list"){
		fs.readFile('data/images-list.json',(err,data)=>{
			if(err){
				res.send('sorry,数据请求失败！')
			}else{
				res.send(data.toString())
			}
		})
	}else{
		res.send("data is empty!")
	}
})

// 下载配置
app.get('/download', (req, res)=>{
	console.log(req.query)
	if(req.query.title=="uniapp"){
		console.log(res.query)
		res.download('./file/uniapp.ipa')
	}else{
		res.send("文件不存在")
	}
})

app.get('/test', (req, res)=>{
	if(JSON.stringify(req.query) !== '{}'){
		res.send(req.query)
	}else{
		console.log(req)
		res.send(`您输入的网址是http://192.168.50.72:3000${req.path}`)
	}
})

// app.on(port,()=>{
// 	console.log(34568)
// })
app.listen(port,'0.0.0.0',()=>{
console.log(`端口号：${port}`)
})
