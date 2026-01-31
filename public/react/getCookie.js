/**
 * @name getCookie
 *
 * @synopsis
 * ```coffeescript [specscript]
 * getCookie(name string) -> cookieValue string
 * ```
 */
const getCookie = function (name) {
  const nameValue = window.document.cookie.split('; ').find(
    nameValue => decodeURIComponent(nameValue.split('=')[0]) == name
  )
  if (nameValue == null) {
    return null
  }
  return decodeURIComponent(nameValue.split('=')[1])
}

export default getCookie
