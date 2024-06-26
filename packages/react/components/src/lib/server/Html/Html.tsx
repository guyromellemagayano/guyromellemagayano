import { HtmlHTMLAttributes } from 'react'

export type HtmlRef = HTMLHtmlElement
export type HtmlProps = HtmlHTMLAttributes<HtmlRef>

/**
 * Render the HTML component.
 * @param {HtmlProps} props - The HTML component properties.
 * @returns The rendered HTML component.
 */
const Html = (props: HtmlProps) => {
  const { children, ...rest } = props

  return <html {...rest}>{children}</html>
}

Html.displayName = 'Html'

export default Html
