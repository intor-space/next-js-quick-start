import type { ReactNode } from "react";
import { IntorProvider, IntorValue } from "intor/react";

export function IntorClientProvider({
  value,
  children,
}: {
  value: IntorValue;
  children: ReactNode;
}) {
  return <IntorProvider value={value}>{children}</IntorProvider>;
}
