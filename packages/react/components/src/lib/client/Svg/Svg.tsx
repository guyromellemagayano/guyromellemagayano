'use client'

import { SVGProps, forwardRef } from 'react'

export type SvgRef = SVGSVGElement
export type SvgProps = SVGProps<SvgRef>

/**
 * Renders a SVG image.
 * @param {SvgProps} props - The SVG image properties.
 * @param {SvgRef} ref - The SVG image reference.
 * @returns The rendered SVG image.
 */
export const Svg = forwardRef<SvgRef, SvgProps>((props, ref) => {
  const { children, ...rest } = props

  return (
    <svg ref={ref} {...rest}>
      {children}
    </svg>
  )
})

Svg.displayName = 'SVG'

export type SvgPathRef = SVGPathElement
export type SvgPathProps = SVGProps<SvgPathRef>

/**
 * Renders a shared SVG path.
 * @param {SvgPathProps} props - The shared SVG path properties.
 * @returns The rendered shared SVG path.
 */
export const SvgPath = (props: SvgPathProps) => {
  const { ...rest } = props

  return <path {...rest} />
}

SvgPath.displayName = 'SVGPath'
