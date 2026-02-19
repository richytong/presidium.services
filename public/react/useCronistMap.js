import useGlobalState from './useGlobalState.js'
import usePresidiumVersion from './usePresidiumVersion.js'
import defaultCronistPresidium from '../cronist/presidium-v3.js'
import defaultCronistPresidiumWebSocket from '../cronist/presidium-websocket-v3.js'

function createCronistMap(cronistObject, version) {
  const {
    cronistPresidium,
    cronistPresidiumWebSocket,
  } = cronistObject

  const result = new Map()

  cronistPresidium.forEach(item => {
    result.set(item.name, item)
  })
  cronistPresidiumWebSocket.forEach(item => {
    result.set(item.name, item)
  })
  result.version = version

  const cronistWebSocketSecureServer =
    cronistPresidiumWebSocket.find(item => item.name == 'WebSocketSecureServer')
  const cronistWebSocketServer =
    cronistPresidiumWebSocket.find(item => item.name == 'WebSocketServer')

  if (cronistWebSocketSecureServer && cronistWebSocketServer) {
    cronistWebSocketSecureServer.methods = omit(cronistWebSocketServer.methods, [])
    for (const method of cronistWebSocketSecureServer.methods) {
      for (const child of method.mdast.docs.children) {
        if (child.type == 'code' && child.lang == 'javascript') {
          child.value = child.value.replace(
            'new WebSocketServer()',
            'new WebSocketSecureServer({\n  key: fs.readFileSync(\'/path/to/my-key\'),\n  cert: fs.readFileSync(\'/path/to/my-cert\'),\n})'
          )
        }
      }
    }
  }

  return result
}

const initial = createCronistMap({
  cronistPresidium: defaultCronistPresidium,
  cronistPresidiumWebSocket: defaultCronistPresidiumWebSocket,
}, defaultPresidiumVersion.toLowerCase())

/**
 * @name useCronistMap
 *
 * @docs
 * ```coffeescript [specscript]
 * useCronistMap() -> [cronistMap Map, setCronistMap function]
 * ```
 */
function useCronistMap() {
  const [cronistMap, setCronistMap] = useGlobalState('cronistMap', initial)
  const [presidiumVersion] = usePresidiumVersion()

  useEffect(function updateMdastMap() {
    if (presidiumVersion != cronistMap.version) {
      all({
        cronistPresidium: import(`../cronist/presidium-${presidiumVersion.toLowerCase()}.js`),
        cronistPresidiumWebSocket: import(`../cronist/presidium-websocket-${presidiumVersion.toLowerCase()}.js`),
      }).then(pipe([
        map(get('default')),
        curry.arity(2, createCronistMap, __, presidiumVersion),
        cronistMap1 => setCronistMap(cronistMap1),
      ]))
    }
  }, [presidiumVersion])

  return [cronistMap, setCronistMap]
}

export default useCronistMap
