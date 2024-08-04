import "@/assets/styles/global.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Alp's Ecommerce",
  description: "Find and buy your favorite product",
  keywords: "ecommerce, nextjs, alps, alpsnextcommerce",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
