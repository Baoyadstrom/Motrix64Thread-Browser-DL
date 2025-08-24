// RPC配置模块
export const RPC_CONFIG = {
  host: 'localhost',
  port: 16800,
  path: '/jsonrpc',
  secret: '',
  maxThreads: 64,       // 最大线程数（64线程高速模式）
  maxConnections: 16     // 最大服务器连接数
};

// 获取RPC完整URL
export function getRPCUrl() {
  return `http://${RPC_CONFIG.host}:${RPC_CONFIG.port}${RPC_CONFIG.path}`;
}

// 设置RPC密钥
export function setRPCSecret(secret) {
  RPC_CONFIG.secret = secret;
}
