import React from "react";
import Head from "next/head";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Code Partner</title>
      </Head>
      <Header />
      <div style={{ minHeight: "80vh" }}>{children}</div>
      <Footer />
    </>
  );
}
