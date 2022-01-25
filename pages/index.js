import JoinUs from "../components/JoinUs/JoinUs";
import Layout from "../components/Layout/Layout";
import OurNews from "../components/OurNews/OurNews";

export default function Home() {
  return (
    <>
      <Layout>
        <OurNews/>
        <JoinUs/>
      </Layout>
    </>
  );
}
