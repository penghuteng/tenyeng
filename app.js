const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

// 解决跨域问题
app.use(require('cors')())

// 静态目录设置
app.use(express.static('static'))

app.get('/api', (req, res) => {
	// res.header("Access-Control-Allow-Origin",'*')
	if(req.headers.title == "init"){
		fs.readFile('data/init.html',(err,data)=>{
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

app.listen(port, () => console.log(`端口${port}启动成功!`))