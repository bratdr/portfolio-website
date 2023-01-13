import "@/styles/globals.css";

import { Public_Sans } from "@next/font/google";

const ps = Public_Sans({
  subsets: ["latin"],
  variable: "--font-ps",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${ps.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
