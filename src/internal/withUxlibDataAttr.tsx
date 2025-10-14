/* eslint-disable @typescript-eslint/no-explicit-any */
// src/internal/withUxlibDataAttr.tsx
import * as React from "react";

export function withUxlibDataAttr<C extends React.ElementType>(Comp: C) {
  type Props = React.ComponentPropsWithoutRef<C> & { "data-uxlib"?: "" | true };
  const Wrapped = React.forwardRef<any, Props>((props, ref) => {
    const { ...rest } = props;
    return React.createElement(Comp as any, { ref, "data-uxlib": "", ...rest });
  });
  Wrapped.displayName = (typeof Comp === "function" ? (Comp as any).displayName || Comp.name : "Component") + "_Uxlib";
  return Wrapped as unknown as C;
}
