# Motrix浏览器高速下载插件

[![Chrome Web Store](https://img.shields.io/chrome-web-store/v/xxx)](https://chrome.google.com/webstore/detail/xxx)

将浏览器原生下载模块无缝对接Motrix客户端，支持HTTP、FTP、BT、磁力链接等多协议资源下载，**原生下载请求可直接触发Motrix 64线程高速下载模式**。

## 功能特性

- **智能拦截**：自动捕获浏览器原生下载请求
- **一键加速**：发送任务至Motrix启用64线程高速模式
- **实时监控**：显示连接状态与工作模式
- **多协议支持**：兼容HTTP、FTP、BT、磁力链接
- **跨平台运行**：支持Chrome/Firefox/Edge浏览器

## 核心优势

### 64线程高速下载模式

通过以下技术创新实现性能突破：

1. **分片优化**：文件自动分割为64个独立分片并行传输
2. **连接管理**：支持最多16个服务器并发连接
3. **智能调度**：根据网络状况动态调整线程分配
4. **断点续传**：支持下载中断自动恢复

### 性能对比

| 模式 | 线程数 | 典型速度 | 适用场景 |
|------|--------|----------|----------|
| 原生下载 | 1线程 | 1-5MB/s | 小文件 |
| 默认模式 | 5线程 | 2-10MB/s | 常规下载 |
| 高速模式 | 64线程 | 10-100MB/s | 大文件/高速网络 |

> ⚠️ 实际速度受服务器带宽和网络环境限制，建议在千兆网络环境下使用

## 安装指南

1. 确保已安装[Motrix](https://github.com/agalwood/Motrix)客户端（v1.21+最佳）
2. 在浏览器扩展管理页面加载本插件
3. Motrix设置中启用：`--rpc-allow-origin-all` 和 `--rpc-listen-all` 参数
4. 通过 `rpc_config.js` 配置RPC参数

## 常见问题

### 如何触发64线程模式？
> 无需操作！浏览器原生下载请求会自动激活该模式

### 无法达到64线程的可能原因：
1. Motrix客户端版本过低（需v1.21+）
2. 服务器限制最大连接数
3. 网络带宽不足
4. 防火墙/杀毒软件限制

### 验证线程数的方法：
1. 查看Motrix任务详情页的连接数
2. 使用浏览器开发者工具监控网络请求
3. 测试下载1GB以上大文件

## 开发构建

```bash
# 克隆仓库
git clone https://github.com/yourname/motrix-extension.git

# 进入目录
cd motrix-extension

# 安装依赖（如果需要直接加载扩展或者无需构建或修改代码，可跳过npm install）
npm install

# 加载扩展
# 在浏览器扩展页面选择'加载已解压的扩展程序'
```

## 技术配置

```javascript
// rpc_config.js 高级配置
export const RPC_CONFIG = {
  host: 'localhost',     // Motrix服务地址
  port: 16800,          // RPC端口
  path: '/jsonrpc',       // 接口路径
  secret: '',             // RPC密钥（可选）
  maxThreads: 64,        // 下载分片数量（线程数）
  maxConnections: 16     // 服务器最大连接数
};
```

## 协议
本项目采用[GPLv3](LICENSE)协议。
