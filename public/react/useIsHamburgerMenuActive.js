import useGlobalState from './useGlobalState.js'

const initial = localStorage.getItem('isHamburgerMenuActive') == 'true'

// useIsHamburgerMenuActive() -> [isHamburgerMenuActive boolean, setter function]
const useIsHamburgerMenuActive = function () {
  const [isHamburgerMenuActive, setIsHamburgerMenuActive] =
    useGlobalState('isHamburgerMenuActive', initial)

  useEffect(() => {
    localStorage.setItem('isHamburgerMenuActive', isHamburgerMenuActive)
  }, [isHamburgerMenuActive])

  return [isHamburgerMenuActive, setIsHamburgerMenuActive]
}

export default useIsHamburgerMenuActive
