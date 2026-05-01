import DocsNav from './DocsNav.js'
import NavLink from './NavLink.js'
import useIsHamburgerMenuActive from './useIsHamburgerMenuActive.js'

const HamburgerMenu = ReactElement(props => {
  const [isHamburgerMenuActive] = useIsHamburgerMenuActive()
  return Div({
    id: 'hamburger-menu',
    class: isHamburgerMenuActive ? 'active' : '',
  }, [
    Nav([
      NavLink({ href: '/' }, 'Home'),
      Hr(),
      NavLink({ href: '/docs' }, 'Docs'),
      Hr(),
      NavLink({ href: '/blog' }, 'Blog'),
    ]),

    Div({ class: 'docs-nav' }, [
      DocsNav(props),
    ]),
  ])
})

export default HamburgerMenu
