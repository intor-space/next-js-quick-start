import "./globals.css";
import { intor } from "intor/next/server";
import { intorConfig } from "@/i18n/intor-config";
import { IntorClientProvider } from "@/i18n/intor-client-provider";
import { Metadata } from "next";
import { getTranslator } from "intor/next/server";

export const generateMetadata = async (): Promise<Metadata> => {
  const { t } = await getTranslator(intorConfig);
  return { title: t("hello") };
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const value = await intor(intorConfig);

  return (
    <html lang={value.locale}>
      <body>
        <IntorClientProvider value={value}>{children}</IntorClientProvider>
      </body>
    </html>
  );
}
