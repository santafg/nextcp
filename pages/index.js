import BannerHome from "../components/BannerHome/BannerHome";
import JoinUs from "../components/JoinUs/JoinUs";
import Layout from "../components/Layout/Layout";
import OurAchivement from "../components/OurAchivement/OurAchivement";
import OurNews from "../components/OurNews/OurNews";
import OurTeam from "../components/OurTeam/OurTeam";
import Testimonials from "../components/Testimonials/Testimonials";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import AboutUs from "../components/WhyChooseUs/AboutUs";
import WhyChooseUsHome from "../components/WhyChooseUsHome/WhyChooseUsHome";

export default function Home() {
  return (
    <>
      <Layout>
        <BannerHome />
        <WhatWeDo />
        <AboutUs />
        <OurAchivement />
        <WhyChooseUsHome />
        <OurTeam />
        <Testimonials />
        <OurNews />
        <JoinUs />
      </Layout>
    </>
  );
}
