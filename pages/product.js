import React from "react";
import Layout from "../components/Layout/Layout";
import PlaceHolder from "../components/PlaceHolder/PlaceHolder";
import OurNews from "../components/OurNews/OurNews";
import OurPortfolio from "../components/OurPortfolio/OurPortfolio";
import Services from "../components/Services/Services";
import BannerProduct from "../components/BannerProduct/BannerProduct";

const Product = () => {
  return (
    <>
      <Layout>
        <BannerProduct />
        <Services />
        <OurPortfolio />
        <OurNews />
        <PlaceHolder />
      </Layout>
    </>
  );
};

export default Product;
