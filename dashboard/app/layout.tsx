import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "./components/sidebar";
import ReportsHeader from "./components/report";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "A sample dashboard layout",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen">
        {/* Sidebar on the left */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex flex-col flex-1">
          {/* Reports Header */}
          <ReportsHeader />

          {/* Main Content */}
          <main className="flex-1 bg-gray-100 p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
