import useGlobalState from './useGlobalState.js'
import getCookie from './getCookie.js'

const initial = getCookie('presidiumVersion') ?? defaultPresidiumVersion

// usePresidiumVersion() -> [presidiumVersion string, setPresidiumVersion function]
const usePresidiumVersion = function () {
  return useGlobalState('presidiumVersion', initial)
}

export default usePresidiumVersion
