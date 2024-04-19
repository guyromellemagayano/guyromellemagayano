'use client'

import { MeterHTMLAttributes, forwardRef } from 'react'

export type MeterRef = HTMLMeterElement
export type MeterProps = MeterHTMLAttributes<MeterRef>

/**
 * Render the meter component.
 * @param children - The children of the meter.
 * @param rest - The rest of the props of the meter.
 * @returns The rendered meter component.
 */
export const Meter = forwardRef<MeterRef, MeterProps>(
  ({ children, ...rest }, ref) => {
    return (
      <meter ref={ref} {...rest}>
        {children}
      </meter>
    )
  }
)

Meter.displayName = 'Meter'

export default Meter