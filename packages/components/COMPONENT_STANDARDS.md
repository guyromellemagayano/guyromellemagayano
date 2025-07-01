# Component Implementation Standards

This document outlines the standards and patterns for implementing components in this package to ensure consistency, maintainability, and quality.

## File Structure

Every component must have the following files:

```bash
component-name/
├── index.tsx          # Main component implementation
├── index.client.tsx   # Client-side version
├── index.test.tsx     # Unit tests
├── README.md          # Component documentation
├── styles.css         # Component styles
└── utils.ts           # (Optional) Utility functions if complex
```

## Component Implementation Pattern

### 1. Import Structure

```tsx
import React, { Suspense, useCallback, useMemo } from "react";
import type { CommonComponentProps } from "../types";
import "./styles.css";

// Lazy load client components
const ComponentClient = React.lazy(async () => {
  const module = await import("./index.client");
  return { default: module.ComponentClient };
});

const MemoizedComponentClient = React.lazy(async () => {
  const module = await import("./index.client");
  return { default: module.MemoizedComponentClient };
});
```

### 2. Type Definitions

```tsx
export type ComponentRef = React.ComponentRef<"element">;

export interface ComponentProps
  extends React.HTMLAttributes<HTMLElement>,
    CommonComponentProps {
  /** Required prop description */
  requiredProp: string;
  /** Optional prop with default description */
  optionalProp?: boolean;
  /** Analytics identifier for tracking */
  analyticsId?: string;
  /** Custom analytics function */
  onAnalytics?: (data: AnalyticsData) => void;
}
```

### 3. Component Structure

```tsx
const ComponentImplementation = React.forwardRef<ComponentRef, ComponentProps>(
  (props, ref) => {
    const {
      // Destructure props with defaults
      optionalProp = false,
      analyticsId,
      onAnalytics,
      as: Component = "element",
      isClient = false,
      isMemoized = false,
      children,
      className,
      onClick,
      style,
      ...rest
    } = props;

    // State and refs
    const hasAnalytics = analyticsId || onAnalytics;

    // Event handlers (always use useCallback)
    const handleClick = useCallback(
      (event: React.MouseEvent<HTMLElement>) => {
        // Analytics logic
        if (hasAnalytics) {
          // Implementation
        }
        onClick?.(event);
      },
      [hasAnalytics, analyticsId, onAnalytics, onClick]
    );

    // Enhanced props (use useMemo for complex computations)
    const enhancedProps = useMemo(
      () => ({
        ...rest,
        ref,
        className: [
          "component",
          optionalProp && "component--modifier",
          className,
        ]
          .filter(Boolean)
          .join(" "),
        style,
        onClick: handleClick,
        "data-analytics-id": analyticsId || undefined,
        // Accessibility attributes
        "aria-label": rest["aria-label"] || "Default label",
      }),
      [rest, ref, optionalProp, className, style, handleClick, analyticsId]
    );

    // Base element
    const element = <Component {...enhancedProps}>{children}</Component>;

    // Client-side rendering
    if (isClient) {
      const ClientComponent = isMemoized ? MemoizedComponentClient : ComponentClient;
      return (
        <Suspense fallback={element}>
          <ClientComponent {...props} ref={ref}>
            {children}
          </ClientComponent>
        </Suspense>
      );
    }

    return element;
  }
);

ComponentImplementation.displayName = "Component";

export const Component = ComponentImplementation;
export default Component;
```

## Standards Checklist

### ✅ Required Features

- [ ] TypeScript interfaces with comprehensive prop documentation
- [ ] `forwardRef` implementation for proper ref forwarding
- [ ] Performance optimizations (`useCallback`, `useMemo`)
- [ ] Lazy-loaded client components
- [ ] Analytics support (optional but consistent interface)
- [ ] Accessibility attributes (ARIA, semantic HTML)
- [ ] Responsive design considerations
- [ ] Error boundary compatibility
- [ ] Support for `as` prop (polymorphic components)
- [ ] CSS class naming convention (`component`, `component--modifier`)

### 📝 Documentation Requirements

Every component must include:

1. **README.md** with:
   - Feature overview with emoji bullets
   - Installation instructions
   - Basic usage examples
   - Props table with types and descriptions
   - Advanced examples
   - Accessibility notes
   - Styling information
   - Performance notes
   - Browser support

2. **Props Interface** with JSDoc comments:

   ```tsx
   interface ComponentProps {
     /** Clear description of what this prop does */
     propName: PropType;
   }
   ```

3. **Component JSDoc**:

   ```tsx
   /**
    * Brief component description.
    * Supports server-side and client-side rendering.
    */
   ```

### 🎨 Styling Standards

- Use CSS custom properties for themeable values
- Follow BEM-like naming: `.component`, `.component--modifier`, `.component__element`
- Include responsive breakpoints
- Support for high contrast mode
- Respect `prefers-reduced-motion`

### 📊 Analytics Standards

When implementing analytics:

```tsx
interface AnalyticsData {
  event: string;
  category: string;
  label: string;
  // Component-specific fields
}

function fireAnalytics(analyticsId: string, data: AnalyticsData): void {
  try {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", data.event, {
        event_category: data.category,
        event_label: data.label,
        // Additional data
      });
    }
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn("Analytics tracking failed:", error);
    }
  }
}
```

### 🧪 Testing Standards

Every component must have:

- Unit tests for all props and variants
- Accessibility tests
- Event handling tests
- Analytics tracking tests
- Error boundary tests
- Client/server rendering tests

### 🏗️ Complex Components

For components with significant complexity (>300 lines):

1. **Extract utilities to `utils.ts`**:

   ```tsx
   // utils.ts
   export function validateInput(value: string): boolean {
     // Implementation
   }
   
   export function calculateDimensions(props: Props): Dimensions {
     // Implementation
   }
   ```

2. **Use sub-components for UI parts**:

   ```tsx
   function ComponentSubpart({ data }: SubpartProps) {
     return <div>{/* Implementation */}</div>;
   }
   ```

3. **Group related functionality**:

   ```tsx
   // =============================================================================
   // VALIDATION UTILITIES
   // =============================================================================
   
   // =============================================================================
   // ANALYTICS INTEGRATION
   // =============================================================================
   
   // =============================================================================
   // MAIN COMPONENT
   // =============================================================================
   ```

## Migration Guide

For existing components that don't follow these standards:

1. **Check props interface** - ensure all props have JSDoc comments
2. **Verify accessibility** - add missing ARIA attributes
3. **Standardize analytics** - ensure consistent interface
4. **Update documentation** - follow the README template
5. **Extract complex utilities** - move to separate files if needed
6. **Add missing tests** - ensure comprehensive coverage

## Best Practices

1. **Keep components focused** - single responsibility principle
2. **Optimize for performance** - memoize expensive operations
3. **Design for accessibility** - think about all users
4. **Write clear documentation** - help other developers
5. **Test thoroughly** - prevent regressions
6. **Consider edge cases** - handle errors gracefully
7. **Plan for growth** - extensible architecture

## Component Complexity Philosophy

**Complexity is not a limitation** - Components should be as feature-rich and comprehensive as needed, provided they:

- Follow established conventions and standards
- Have exhaustive, clear documentation
- Properly support 3rd-party CSS classnames
- Maintain clean, organized code structure

### Organization Standards for Any Complexity Level

- **Utility Functions**: Extract to `utils.ts` for better organization and reusability
- **Section Comments**: Use clear section dividers for different functionality
- **Comprehensive Documentation**: More features = more examples and edge cases documented
- **CSS Flexibility**: Always support external CSS classes without conflicts
- **Exhaustive Features**: Include all necessary functionality rather than limiting scope

### 3rd-Party CSS ClassName Support Requirements

All components MUST properly support external CSS classes:

```tsx
// REQUIRED: Always merge external className with component classes
className: [
  "component",           // Base component class
  variant && `component--${variant}`,  // Variant classes
  className,             // 3rd-party/external classes
]
  .filter(Boolean)
  .join(" ")
```
