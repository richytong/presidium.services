// import DocsNav from './DocsNav.js'
import useIsHamburgerMenuActive from './useIsHamburgerMenuActive.js'

const HamburgerMenu = ReactElement(props => {
  const [isHamburgerMenuActive] = useIsHamburgerMenuActive()
  return Div({
    id: 'hamburger-menu',
    class: isHamburgerMenuActive ? 'active' : '',
  }, [
    Nav([
      // A({ href: '/' }, 'Home'),
      // Hr(),
      // A({ href: '/tour' }, 'Tour'),
      // Hr(),
      // A({ href: '/docs' }, 'Docs'),
      // Hr(),
      // A({ href: '/blog' }, 'Blog'),
    ]),

    Div({ class: 'docs-nav' }, [
      // DocsNav(props),
    ]),
  ])
})

export default HamburgerMenu
