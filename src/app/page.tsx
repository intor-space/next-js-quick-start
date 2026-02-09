"use client";

import { useTranslator } from "intor/react";
import { Link } from "intor/next";

export default function Home() {
  const { t, tRich } = useTranslator();

  return (
    <>
      <p>{t("hello", { name: "Intor" })}</p>

      <p>{tRich("rich", { tag: (children) => <b>{children}</b> })}</p>

      <Link locale="en">English</Link>
      <Link locale="fr">French</Link>
    </>
  );
}
