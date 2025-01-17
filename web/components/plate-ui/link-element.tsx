import { cn, withRef } from "@udecode/cn";
import { PlateElement, useElement } from "@udecode/plate-common";
import { type TLinkElement, useLink } from "@udecode/plate-link";
import React from "react";

export const LinkElement = withRef<typeof PlateElement>(
  ({ children, className, ...props }, ref) => {
    const element = useElement<TLinkElement>();
    const { props: linkProps } = useLink({ element });

    return (
      <PlateElement
        asChild
        className={cn(
          "font-medium text-primary underline decoration-primary underline-offset-4",
          className,
        )}
        ref={ref}
        {...(linkProps as any)}
        {...props}
      >
        <a>{children}</a>
      </PlateElement>
    );
  },
);
