import NavLink from './NavLink.js'
import Slider from './Slider.js'
import HamburgerMenu from './HamburgerMenu.js'
import HamburgerMenuIcon from './HamburgerMenuIcon.js'
import setCookie from './setCookie.js'
import useMediaQuery from './useMediaQuery.js'
import usePresidiumVersion from './usePresidiumVersion.js'
import useIsHamburgerMenuActive from './useIsHamburgerMenuActive.js'

let lastScrollY =  0

/**
 * @name Layout
 *
 * @synopsis
 * ```coffeescript [specscript]
 * Layout(props {
 *   path: string,
 *   goto: function,
 *   children: ReactElement|Array<ReactElement>|string,
 * }) -> ReactElement
 * ```
 */
const Layout = ReactElement(props => {
  const { path, goto, children } = props

  const [mediaQuery] = useMediaQuery('(max-width: 768px)')
  const [presidiumVersion, setPresidiumVersion] = usePresidiumVersion()
  const [
    isHamburgerMenuActive, setIsHamburgerMenuActive,
  ] = useIsHamburgerMenuActive()

  useEffect(function resetHamburgerMenu() {
    if (!mediaQuery.matches && isHamburgerMenuActive) {
      setIsHamburgerMenuActive(false)
    }
  }, [mediaQuery.matches])

  return Div({ id: 'layout' }, [
    Nav([
      Div({ class: 'home' }, [
        NavLink({
          id: 'home-link',
          href: '/',
        }, [
          /*
          Img({
            src: 'https://rubico.land/assets/presidium-logo-2-w200.jpg',
            alt: '',
          }),
          */
          Span({ class: 'text1' }, 'Presidium'),
        ]),

        Select({
          onChange(event) {
            setCookie('presidiumVersion', event.target.value)
            setPresidiumVersion(event.target.value)
          },
        }, [
          Option({ value: 'V1', selected: presidiumVersion == 'V1' }, 'V1'),
          Option({ value: 'V2', selected: presidiumVersion == 'V2' }, 'V2'),
          Option({ value: 'V3', selected: presidiumVersion == 'V3' }, 'V3'),
        ]),

        Div({ class: 'links' }, [
          NavLink({ href: '/docs' }, 'Docs'),
          // A({ href: '/blog' }, 'Blog'),
        ]),
      ]),

      // Span({ class: 'nav-spacer' }),


      Div({ class: 'right-links' }, [
        mediaQuery.matches ? [
          Button({
            id: 'hamburger-menu-icon',
            class: isHamburgerMenuActive ? 'active' : '',
            onClick() {
              setIsHamburgerMenuActive(!isHamburgerMenuActive)
              window.scrollTo(0, 0)

              /*
              if (isHamburgerMenuActive) {
                window.scrollTo(0, lastScrollY)
              } else {
                lastScrollY = window.scrollY
                window.scrollTo(0, 0)
              }
              */

            },
          }, [
            HamburgerMenuIcon(),
          ]),
        ] : []
      ]),
    ]),

    Slider({
      index: isHamburgerMenuActive ? 1 : 0,
      translateOffset: '10%',
    }, [
      Main([children]),
      HamburgerMenu(props),
    ]),

    Footer([
      P({
        style: { fontSize: '12px', color: 'grey' },
      }, `© ${new Date().getFullYear()} Richard Yufei Tong`),
    ]),
  ])
})

export default Layout
