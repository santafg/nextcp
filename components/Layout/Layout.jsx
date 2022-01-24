import React from "react";
import Head from "next/head";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MobileHeader from "../Header/MobileHeader";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Code Partner</title>
      </Head>
      <Header />
      <MobileHeader />
      <div style={{ minHeight: "80vh" }}>{children}</div>
      <Footer />
    </>
  );
}
