const path = location.pathname.endsWith('/') && location.pathname != '/'
  ? location.pathname.slice(0, -1)
  : location.pathname

export default path
