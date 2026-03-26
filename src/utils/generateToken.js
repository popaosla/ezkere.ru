const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

export function generateToken(length = 10) {
  const array = new Uint8Array(length)
  crypto.getRandomValues(array)
  return Array.from(array, byte => CHARS[byte % CHARS.length]).join('')
}
