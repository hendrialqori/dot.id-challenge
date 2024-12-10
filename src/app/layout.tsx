import type { Metadata } from "next";
import "./globals.scss";
import ReactQueryProvider from "#/providers/ReactQueryProvider";

export const metadata: Metadata = {
  title: "Shipping apps",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}