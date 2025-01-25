import type { Metadata } from "next";
import "./globals.scss";
import React from "react";
import "katex/dist/katex.min.css";

export const metadata: Metadata = {
  title: "TITLE_HERE",
  description: "DESCRIPTION_HERE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const header = <header>Le blog</header>;
  const footer = <footer>Version 0.1. All rights reserved.</footer>;
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.0/styles/github-dark.min.css"
        />
      </head>
      <body>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
