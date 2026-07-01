import Header from "./_components/Header";
import "./_styles/globals.css";

// import a font from google fonts
import { Josefin_Sans } from "next/font/google";

export const metadata = {
  // title: 'the wild oasis'
  title: {
    template: "%s / nextjs-blueprint",
    default: "Welcome / nextjs-blueprint,
  },
  // for SEO
  description: "any description for search engin",
};

// upload font
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 min-h-screen text-primary-50 flex flex-col`}
      >
        <Header />
        <div className="px-8 py-12 grid">
          <main className="w-full max-w-7xl mx-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
