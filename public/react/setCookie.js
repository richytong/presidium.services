/**
 * @name setCookie
 *
 * @synopsis
 * ```coffeescript [specscript]
 * setCookie(name string, value string) -> cookies string
 * ```
 */
const setCookie = (name, value, options = {}) => {
  const { expiry = 315360000000 } = options
  const expireDate = new Date()
  expireDate.setTime(Date.now() + expiry)
  window.document.cookie = `
${encodeURIComponent(name)}=${encodeURIComponent(value)};expires=${expireDate.toUTCString()};path=/
  `.trim()
  return window.document.cookie
}

export default setCookie
