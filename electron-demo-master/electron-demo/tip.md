```
nodemo 监听文件的变化，执行命令


"nodemon --watch main.js --exec \"electron .\""
--watch 监听
--exec 运行**
nodemon --watch main.js --exec
```

##### 创建窗口
```
BrowserWindow

new BrowserWindow({
  width: 800,
  height: 600,
  webPreferences: {
    nodeIntegration: true,
    preload: path.join(__dirname, 'preload.js')
  }
})
```

##### 进程间相互通信 IPC
```
```