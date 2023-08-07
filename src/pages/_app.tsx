import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/views/Navbar";
import TopLabel from "@/components/views/Toplabel";
import { Footer } from "@/components/Footer";
import Cardgrid from "@/components/Cardgrid";
import { ParallaxProvider } from "react-scroll-parallax";
import CartProvider from "@/globalState/context/CartContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <CartProvider>
        <TopLabel />
        <Component {...pageProps} />
        <Cardgrid />
        <Footer />
      </CartProvider>
    </ParallaxProvider>
  );
}
