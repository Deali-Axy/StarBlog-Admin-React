const storage = localStorage

/**
 * 检查登录是否过期
 * @return boolean
 */
export const isExpired = () => {
  let expiration = storage.getItem('expiration')
  if (expiration) {
    let now = new Date()
    let expirationTime = new Date(expiration)
    if (now > expirationTime) return true
  }

  return false
}

/**
 * 检查是否已登录
 * @return boolean
 */
export const isLogin = () => {
  let token = storage.getItem('token')
  let userName = storage.getItem('user')

  if (!token || token.length === 0) return false
  if (!userName || userName.length === 0) return false
  return !isExpired();
}

/**
 * 读取保存的token
 * @return string|null
 */
export const getToken = (): string | null => {
  return storage.getItem('token')
}

/**
 * 保存登录信息
 * @param token 密钥
 * @param username 用户名
 * @param expiration token过期时间
 */
export const login = (token: string, username: string, expiration: string) => {
  // 保存登录数据到本地会话
  storage.setItem('token', token)
  storage.setItem('user', username)
  storage.setItem('expiration', expiration)
}

// 注销
export const logout = () => {
  storage.removeItem('token')
  storage.removeItem('user')
  storage.removeItem('expiration')
}

