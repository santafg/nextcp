import JoinUs from "../components/JoinUs/JoinUs";
import Layout from "../components/Layout/Layout";
import OurNews from "../components/OurNews/OurNews";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import AboutUs from "../components/WhyChooseUs/AboutUs";

export default function Home() {
  return (
    <>
      <Layout>
        <WhatWeDo />
        <AboutUs />
        <OurNews />
        <JoinUs />
      </Layout>
    </>
  );
}
