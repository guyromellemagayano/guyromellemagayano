import { memo } from 'react'

import { Path, Svg, type TSvgProps } from '@react-components'

/**
 * Renders an SVG image of a Medium logo.
 * @param rest - Additional SVG props
 * @returns The rendered SVG image of a Medium logo.
 */
const MediumSvg = memo(({ ...rest }: TSvgProps) => {
  return (
    <Svg
      aria-hidden="true"
      clipRule="evenodd"
      fill="currentColor"
      fillRule="evenodd"
      height={24}
      width={24}
      {...rest}
    >
      <Path d="M2.846 6.887a.928.928 0 0 0-.303-.784l-2.24-2.7V3h6.958l5.378 11.795L17.367 3H24v.403L22.084 5.24a.561.561 0 0 0-.213.538v13.498a.56.56 0 0 0 .213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537V8.321l-5.389 13.688h-.728L4.28 8.321v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404H0v-.404l2.521-3.058c.27-.279.39-.67.325-1.052V6.887z" />
    </Svg>
  )
})

MediumSvg.displayName = 'MediumSvg'

export default MediumSvg
