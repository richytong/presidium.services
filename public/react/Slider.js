/**
 * @name Slider
 *
 * @docs
 * ```coffeescript [specscript]
 * Slider(props {
 *   index: number,
 *   translateOffset: string, # '<percent>%'
 * })
 * ```
 */
const Slider = ReactElement(props => {
  const { children, index, translateOffset } = props
  const childrenArray = Array.isArray(children) ? children : [children]
  return Div({ class: 'slider' }, [
    Div({
      class: 'panels',
      style: {
        width: `${childrenArray.length * 100}%`,
        // transform: `translate(calc(${100 / childrenArray.length * -index}% + ${translateOffset}))`,
        transform: index == 0
          ? `translate(calc(${100 / childrenArray.length * -index}%))`
          : `translate(calc(${100 / childrenArray.length * -index}% + ${translateOffset}))`,
      },
    }, [
      childrenArray.map((child, index) => Div({
        key: index,
        class: 'panel',
        style: {
          width: `${100 / childrenArray.length}%`
        },
      }, [child]))
    ]),
  ])
})

export default Slider
