import NavBar from "@/components/common/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-[1920px] mx-auto ">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
