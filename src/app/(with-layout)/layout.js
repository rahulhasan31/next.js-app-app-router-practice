import Footer from "@/componnent/shared/Footer";
import Navbar from "@/componnent/shared/Navbar";

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-screen">{children}</div>
      <Footer></Footer>
    </>
  );
}
