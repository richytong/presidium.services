import useGlobalState from './useGlobalState.js'
import usePresidiumVersion from './usePresidiumVersion.js'
import defaultCronistPresidium from '../cronist/presidium-v1.js'
import defaultCronistPresidiumWebSocket from '../cronist/presidium-websocket-v1.js'

const initial = new Map()
defaultCronistPresidium.forEach(item => {
  initial.set(item.name, item)
})
defaultCronistPresidiumWebSocket.forEach(item => {
  initial.set(item.name, item)
})
initial.version = defaultPresidiumVersion.toLowerCase()

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
      Promise.all([
        import(`../cronist/presidium-${presidiumVersion.toLowerCase()}.js`),
        import(`../cronist/presidium-websocket-${presidiumVersion.toLowerCase()}.js`),
      ]).then(modules => {
        const cronistPresidium = modules[0].default
        const cronistPresidiumWebSocket = modules[1].default
        const cronistMap1 = new Map()
        cronistPresidium.forEach(item => {
          cronistMap1.set(item.name, item)
        })
        cronistPresidiumWebSocket.forEach(item => {
          cronistMap1.set(item.name, item)
        })
        cronistMap1.version = presidiumVersion
        setCronistMap(cronistMap1)
      })
    }
  }, [presidiumVersion])

  return [cronistMap, setCronistMap]
}

export default useCronistMap
