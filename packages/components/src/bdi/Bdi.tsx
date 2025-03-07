import { lazy, Suspense } from "react";

import type { CommonComponentProps } from "../components";

// Dynamically import the client component
const BdiClient = lazy(async () => {
  const module = await import("./Bdi.client");
  return { default: module.BdiClient };
});

export type BdiRef = React.ElementRef<"bdi">;
export type BdiProps = React.ComponentPropsWithoutRef<"bdi"> &
  CommonComponentProps;

/**
 * Render the default bidirectional isolate server component.
 * @param {BdiProps} props - The default bidirectional isolate server component properties
 * @returns The rendered default bidirectional isolate server component
 */
export const Bdi = ({ isClient = false, children, ...rest }: BdiProps) => {
  const element = <bdi {...rest}>{children}</bdi>;

  if (isClient) {
    return (
      <Suspense fallback={element}>
        <BdiClient {...rest}>{children}</BdiClient>
      </Suspense>
    );
  }

  return element;
};

Bdi.displayName = "Bdi";
