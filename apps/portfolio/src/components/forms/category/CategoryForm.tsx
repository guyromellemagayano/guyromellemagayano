'use client'

import { forwardRef } from 'react'

import {
  FormProps,
  FormRef,
  ReactHookForm
} from '@guy-romelle-magayano/react-components'

export type CategoryFormRef = FormRef
export type CategoryFormProps = FormProps & any

/**
 * Renders the category form component.
 * @param {CategoryFormProps} props - The component props
 * @param {CategoryFormRef} ref - The component reference
 * @returns The rendered JSX component
 */
const CategoryForm = forwardRef<CategoryFormRef, CategoryFormProps>(
  ({ ...rest }, ref) => {
    return <ReactHookForm ref={ref} {...rest} />
  }
)

CategoryForm.displayName = 'CategoryForm'

export default CategoryForm