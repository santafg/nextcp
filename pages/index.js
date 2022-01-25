import JoinUs from "../components/JoinUs/JoinUs";
import Layout from "../components/Layout/Layout";
import OurAchivement from "../components/OurAchivement/OurAchivement";
import OurNews from "../components/OurNews/OurNews";
import OurTeam from "../components/OurTeam/OurTeam";
import Testimonials from "../components/Testimonials/Testimonials";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import AboutUs from "../components/WhyChooseUs/AboutUs";

export default function Home() {
  return (
    <>
      <Layout>
        <WhatWeDo />
        <AboutUs />
        <OurAchivement />
        <OurTeam />
        <Testimonials />
        <OurNews />
        <JoinUs />
      </Layout>
    </>
  );
}
