export const metadata = {
  title: "MechCode Robotech",
  description: "Hardware + Software Solutions by MechCode Robotech",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body className="bg-slate-950 text-slate-100">{children}</body>
    </html>
  );
}