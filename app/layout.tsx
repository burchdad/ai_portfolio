import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stephen Burch | AI Architect",
  description: "AI Architect building autonomous business systems for ghost ecosystem",
  keywords: "AI, Autonomous Systems, Agents, Ghost CRM, Sales Automation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-ghost-dark text-white">
        {children}
      </body>
    </html>
  );
}
