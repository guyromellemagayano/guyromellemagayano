import { lazy, Suspense } from "react";

import type { CommonComponentProps } from "../components";

// Dynamically import the client component
const BlockquoteClient = lazy(async () => {
  const module = await import("./Blockquote.client");
  return { default: module.BlockquoteClient };
});

export type BlockquoteRef = React.ElementRef<"blockquote">;
export type BlockquoteProps = React.ComponentPropsWithoutRef<"blockquote"> &
  CommonComponentProps;

/**
 * Render the default blockquote server component.
 * @param {BlockquoteProps} props - The default blockquote server component properties
 * @returns The rendered default blockquote server component
 */
export const Blockquote = ({
  isClient = false,
  children,
  ...rest
}: BlockquoteProps) => {
  const element = <blockquote {...rest}>{children}</blockquote>;

  if (isClient) {
    return (
      <Suspense fallback={element}>
        <BlockquoteClient {...rest}>{children} </BlockquoteClient>
      </Suspense>
    );
  }

  return element;
};

Blockquote.displayName = "Blockquote";
