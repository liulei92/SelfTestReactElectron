// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { ipcRenderer } = require('electron')
const { BrowserWindow } = require('electron').remote // remote 模块，调用主进程中的方法
// 仅当DOM加载完成
window.addEventListener('DOMContentLoaded', () => {  
  // document.getElementById('node-version').innerHTML = process.versions.node

  document.getElementById('send').addEventListener('click', () => {
    ipcRenderer.send('message', 'hello from renderer') // 发送到主进程
    let win = new BrowserWindow({ width: 600, height: 400 })
    win.loadURL('https://baidu.com')
  })
  // ipcRender （渲染进程） 监听事件
  ipcRenderer.on('reply', (event, arg) => {
    document.getElementById('message').innerHTML = arg
  })
})
function tip(){
	// setTimeout(function(){ alert("Hello World!"); }, 3000);
};