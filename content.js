// 注入页面监听下载行为
(function() {
  'use strict';

  // 监听所有链接点击
  document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.href) {
      // 发送下载链接到后台（包含64线程模式标识）
      browser.runtime.sendMessage({
        url: e.target.href
      });
      // 阻止默认下载行为（可选）
      // e.preventDefault();
    }
  });

  // 监听表单提交（用于捕获直接下载）
  document.addEventListener('submit', function(e) {
    // 添加自定义处理逻辑
  });
})();