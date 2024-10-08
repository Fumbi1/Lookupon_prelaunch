import "./globals.css";
import Copy from "@/app/components/copyRight/page";

export const metadata = {
  title: "Lookupon Prelaunch",
  description: "Join our waitlist!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Copy />
      </body>
    </html>
  );
}
