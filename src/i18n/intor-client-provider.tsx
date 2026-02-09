import type { ReactNode } from "react";
import { IntorProvider, type IntorProviderProps } from "intor/react";

export function IntorClientProvider({
  value,
  children,
}: {
  value: IntorProviderProps["value"];
  children: ReactNode;
}) {
  return <IntorProvider value={value}>{children}</IntorProvider>;
}
