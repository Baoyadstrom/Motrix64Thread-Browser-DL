// 导入polyfill
importScripts('../node_modules/webextension-polyfill/dist/browser-polyfill.js');

// 导入RPC配置
import { RPC_CONFIG, getRPCUrl } from './rpc_config.js';

// 监听下载请求
browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.url) {
    sendRPCRequest(request.url);
    sendResponse({status: "success"});
  }
});

// 发送RPC请求
async function sendRPCRequest(downloadUrl) {
  try {
    const options = {
      'max-connection-per-server': RPC_CONFIG.maxConnections,  // 从配置获取连接数
      'split': RPC_CONFIG.maxThreads,                          // 从配置获取线程数
      'continue': true                                         // 启用断点续传
    };

    const requestBody = {
      jsonrpc: '2.0',
      id: 'motrix-extension',
      method: 'aria2.addUri',
      method: 'aria2.addUri',
      params: RPC_CONFIG.secret ? 
        [[downloadUrl], { 'header': [`Authorization: Bearer ${RPC_CONFIG.secret}`], options }] :
        [[downloadUrl], options]
    };

    const response = await fetch(getRPCUrl(), {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(requestBody)
    });

    const result = await response.json();
    if (result.error) throw new Error(result.error.message);
    console.log(`任务提交成功: ${downloadUrl} (64线程模式)`);
  } catch (error) {
    console.error('RPC请求失败:', error);
  }
}