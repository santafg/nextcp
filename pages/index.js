import JoinUs from "../components/JoinUs/JoinUs";
import Layout from "../components/Layout/Layout";
import OurNews from "../components/OurNews/OurNews";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";

export default function Home() {
  return (
    <>
      <Layout>
        <WhatWeDo />
        <OurNews />
        <JoinUs />
      </Layout>
    </>
  );
}
