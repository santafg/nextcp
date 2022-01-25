import React from "react";
import Layout from "../components/Layout/Layout";
import PlaceHolder from "../components/PlaceHolder/PlaceHolder";
import OurNews from "../components/OurNews/OurNews";

const Product = () => {
  return (
    <>
      <Layout>
        <OurNews />
        <PlaceHolder />{" "}
      </Layout>
    </>
  );
};

export default Product;
