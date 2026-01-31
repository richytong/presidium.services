import useGlobalState from './useGlobalState.js'

// useIsHamburgerMenuActive() -> [isHamburgerMenuActive boolean, setter function]
const useIsHamburgerMenuActive = function () {
  return useGlobalState('isHamburgerMenuActive', false)
}

export default useIsHamburgerMenuActive
