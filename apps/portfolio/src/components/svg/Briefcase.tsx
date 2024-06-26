import { Path, Svg, SvgProps } from '@guy-romelle-magayano/react-components'

/**
 * Renders an SVG image of a briefcase.
 * @param rest - Additional SVG props
 * @returns The rendered SVG image of a briefcase.
 */
const BriefcaseSvg = (rest: SvgProps) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      <Path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <Path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </Svg>
  )
}

BriefcaseSvg.displayName = 'BriefcaseSvg'

export default BriefcaseSvg
