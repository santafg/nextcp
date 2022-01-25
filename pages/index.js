import JoinUs from "../components/JoinUs/JoinUs";
import Layout from "../components/Layout/Layout";
import OurNews from "../components/OurNews/OurNews";
import Testimonials from "../components/Testimonials/Testimonials";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import AboutUs from "../components/WhyChooseUs/AboutUs";

export default function Home() {
  return (
    <>
      <Layout>
        <WhatWeDo />
        <AboutUs />
        <Testimonials />
        <OurNews />
        <JoinUs />
      </Layout>
    </>
  );
}
