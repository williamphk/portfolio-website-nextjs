import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
      </Head>
      <html lang="en">
        <body>{children}</body>
      </html>
    </>
  );
}
