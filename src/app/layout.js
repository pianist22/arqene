// app/layout.jsx
import "./globals.css";
import ArqeneNavbar from "../components/navbar/ArqeneNavbar";
import ArqeneFooter from "@/components/footer/ArqeneFooter";

export const metadata = {
  title: "Arqené – Interior Design",
  description: "Legacy interior experiences in digital form.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <ArqeneNavbar />
        {/* Push page content below the fixed navbar */}
        <main className="pt-20">{children}</main>
        <ArqeneFooter/>
      </body>
    </html>
  );
}
