import { memo } from 'react'

import { Path, Svg, type TSvgProps } from '@react-components'

/**
 * Renders an SVG image of a sun.
 * @param rest - Additional SVG props
 * @returns The rendered SVG image of a sun.
 */
const SunSvg = memo(({ ...rest }: TSvgProps) => {
  return (
    <Svg
      aria-hidden="true"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      {...rest}
    >
      <Path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
      <Path
        d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
        fill="none"
      />
    </Svg>
  )
})

SunSvg.displayName = 'SunSvg'

export default SunSvg
