import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";
export const metadata: Metadata = {
  title: "GitHub Readme Generator",
  description: "Github Readme Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-screen bg-gray-900">
        {children}
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
