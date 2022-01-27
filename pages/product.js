import React from "react";
import Layout from "../components/Layout/Layout";
import PlaceHolder from "../components/PlaceHolder/PlaceHolder";
import OurNews from "../components/OurNews/OurNews";
import OurPortfolio from "../components/OurPortfolio/OurPortfolio";
import Services from "../components/Services/Services";
import BannerProduct from "../components/BannerProduct/BannerProduct";
import WhyChooseUsProduct from "../components/WhyChooseUsProduct/WhyChooseUsProduct";
import ProductPorjectVideo from "../components/ProductProjectVideo/ProductPorjectVideo";
import ProductTestimonials from "../components/ProductTestimonials/ProductTestimonials";

const Product = () => {
  return (
    <>
      <Layout>
        <BannerProduct />
        <Services />
        <OurPortfolio />
        <WhyChooseUsProduct />
        <ProductPorjectVideo />
        <ProductTestimonials />
        <OurNews />
        <PlaceHolder />
      </Layout>
    </>
  );
};

export default Product;
