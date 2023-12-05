import "@/app/ui/globals.css";
import { montserrat } from "@/app/ui/fonts";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Found ug-Report Found&Lost stuff",
  description:
    "The only lost and found platform guaranteed to get back your lost items",
  metadataBase: new URL("http://localhost:3000"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="night">
      <body className={`${montserrat} antialiased`}>{children}</body>
    </html>
  );
}
