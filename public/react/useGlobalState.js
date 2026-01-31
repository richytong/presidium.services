const { useState, useEffect } = React

const globalState = new Map()
const globalStateSetters = new Map()

/**
 * @name useGlobalState
 *
 * @synopsis
 * ```coffeescript [specscript]
 * useGlobalState(key any, defaultInitialValue any) -> [
 *   value any,
 *   globalSetter function,
 * ]
 * ```
 */
const useGlobalState = function (key, defaultInitialValue = null) {
  const doesGlobalStateHaveKey = globalState.has(key)
  let initialValue = defaultInitialValue
  if (doesGlobalStateHaveKey) {
    initialValue = globalState.get(key)
  } else {
    globalState.set(key, defaultInitialValue)
  }

  const [value, setValue] = useState(initialValue)

  if (doesGlobalStateHaveKey) {
    globalStateSetters.get(key).add(setValue)
  } else {
    globalStateSetters.set(key, new Set([setValue]))
  }

  const setters = globalStateSetters.get(key)

  useEffect(function cleanupSetter() {
    return () => {
      setters.delete(setValue)
    }
  }, [])

  return [value, function globalSetter(newValue) {
    globalState.set(key, newValue)
    setters.forEach(setter => setter(newValue))
  }]
}

export default useGlobalState
