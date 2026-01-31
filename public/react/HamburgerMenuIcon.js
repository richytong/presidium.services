// HamburgerMenuIcon() -> ReactElement
const HamburgerMenuIcon = ReactElement(() => {
  return Svg({
    xmlns: 'http://www.w3.org/2000/svg',
    width: '50',
    height: '100',
    viewBox: '0 0 50 100',
  }, [
    Path({
      // fill: '#65799b',
      fill: 'transparent',
      d: 'M0 0h50v100H0z',
    }),
    Path({
      fill: '#666',
      d: 'M14 15h22v4H14zm0 8h22v4H14zm0 8h22v4H14z',
    }),
    Path({
      // fill: '#fff',
      fill: '#000',
      d: 'M14 65h22v4H14zm0 8h22v4H14zm0 8h22v4H14z',
    }),
  ])
})

export default HamburgerMenuIcon
