import useGlobalState from './useGlobalState.js'
import usePresidiumVersion from './usePresidiumVersion.js'
import defaultCronistPresidium from '../cronist/presidium-v1.js'
import defaultCronistPresidiumWebSocket from '../cronist/presidium-websocket-v1.js'

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
    console.log('x')
    cronistWebSocketSecureServer.methods = omit(cronistWebSocketServer.methods, [])
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
