'use client'

import { HTMLAttributes, forwardRef } from 'react'

export type PictureRef = HTMLPictureElement
export type PictureProps = HTMLAttributes<PictureRef>

/**
 * Render the picture component.
 * @param children - The children of the picture.
 * @param rest - The rest of the props of the picture.
 * @returns The rendered picture component.
 */
export const Picture = forwardRef<PictureRef, PictureProps>(
  ({ children, ...rest }, ref) => {
    return (
      <picture ref={ref} {...rest}>
        {children}
      </picture>
    )
  }
)

Picture.displayName = 'Picture'

export default Picture