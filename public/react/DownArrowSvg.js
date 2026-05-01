/**
 * @name DownArrowSvg
 *
 * @synopsis
 * ```coffeescript [specscript]
 * DownArrowSvg(props {
 *   fill?: string = 'black',
 * }) -> ReactElement
 * ```
 */
const DownArrowSvg = ReactElement(props => {
  const { fill = 'black' } = props
  return Svg({
    class: 'down-arrow-svg',
    width: '200',
    height: '133',
    viewBox: '0 0 200 133',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
  }, [
    Rect({
      width: '143.875',
      height: '41.9555',
      rx: '20.9777',
      transform: 'matrix(0.683998 -0.729484 0.756447 0.654055 69.8527 105.123)',
      fill,
    }),
    Rect({
      width: '143.875',
      height: '41.9555',
      rx: '20.9777',
      transform: 'matrix(0.683998 0.729484 -0.756447 0.654055 31.7371 0)',
      fill,
    }),
  ])
})

export default DownArrowSvg
