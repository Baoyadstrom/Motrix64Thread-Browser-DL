document.addEventListener('DOMContentLoaded', function() {
  const status = document.getElementById('status');
  const threadInfo = document.getElementById('thread-info') || document.createElement('div');
  
  // 监听连接状态
  checkMotrixConnection().then(connected => {
    status.textContent = connected ? '已连接' : '未连接';
    status.style.color = connected ? 'green' : 'red';
    
    if (connected) {
      threadInfo.textContent = `当前模式: ${RPC_CONFIG.maxThreads}线程高速下载`;
      threadInfo.style.fontSize = '0.8em';
      threadInfo.style.color = '#333';
      document.body.appendChild(threadInfo);
    }
  });
});

// 检查Motrix连接状态
async function checkMotrixConnection() {
  try {
    const response = await fetch('http://localhost:16800/jsonrpc', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 'motrix-extension',
        method: 'aria2.getVersion'
      })
    });
    return response.ok;
  } catch (error) {
    return false;
  }
}