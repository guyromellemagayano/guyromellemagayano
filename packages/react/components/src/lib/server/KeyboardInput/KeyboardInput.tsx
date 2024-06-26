import { HTMLAttributes, forwardRef } from 'react'

export type KeyboardInputRef = HTMLElement
export type KeyboardInputProps = HTMLAttributes<KeyboardInputRef>

/**
 * Render the keyboard input component.
 * @param {KeyboardInputProps} props - The keyboard input component properties.
 * @param {KeyboardInputRef} ref - The keyboard input component reference.
 * @returns The rendered keyboard input component.
 */
const KeyboardInput = forwardRef<KeyboardInputRef, KeyboardInputProps>(
  (props, ref) => {
    const { children, ...rest } = props

    return (
      <kbd ref={ref} {...rest}>
        {children}
      </kbd>
    )
  }
)

KeyboardInput.displayName = 'KeyboardInput'

export default KeyboardInput
