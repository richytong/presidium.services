// useMediaQuery(queryString) -> [mediaQuery MediaQueryList, setMediaQuery function]
const useMediaQuery = function (queryString) {
  const [mediaQuery, setMediaQuery] = useState(matchMedia(queryString))

  useEffect(function updateMediaQuery() {
    const listener = addEventListener('resize', () => {
      setMediaQuery(matchMedia(queryString))
    })
    return () => {
      removeEventListener('resize', listener)
    }
  }, [])

  return [mediaQuery, setMediaQuery]
}

export default useMediaQuery
