// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { ipcRenderer } = require('electron')
const { BrowserWindow } = require('electron').remote

window.addEventListener('DOMContentLoaded', () => {  
  document.getElementById('node-version').innerHTML = process.versions.node
  document.getElementById('send').addEventListener('click', () => {
    ipcRenderer.send('message', 'hello from renderer')
    let win = new BrowserWindow({ width: 600, height: 400 })
    // win.loadURL('https://baidu.com')
    win.loadFile('./second.html')
  })
  ipcRenderer.on('reply', (event, arg) => {
    document.getElementById('message').innerHTML = arg
  })
})
function tip(){
	setTimeout(function(){ alert("Hello World!"); }, 3000);
};