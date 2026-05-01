import "../index.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import MobilePageIndicator from "../components/MobilePageIndicator";

export const metadata = {
  title: "Naman Agrawal",
  description: "Portfolio of Naman Agrawal",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className="bg-black text-gray-200 antialiased min-h-screen flex flex-col relative overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-200">
        {/* Global Background Gradient */}
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/20 via-black to-black -z-10"></div>
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent -z-10"></div>

        <Header />
        <main className="flex-1 w-full flex flex-col items-center justify-center">
          {children}
        </main>
        <Footer />
        <MobilePageIndicator />
      </body>
    </html>
  );
}

