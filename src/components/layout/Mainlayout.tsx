import { Layout } from "antd";

import LandingPage from "../../pages/Products/LandingPage";
import CommonLayout from "./CommonLayout";
import HeroSection from "../../pages/Products/HeroSection";

const Mainlayout = () => {
  return (
    <Layout>
      <CommonLayout />
      <HeroSection />
      <LandingPage />
    </Layout>
  );
};

export default Mainlayout;
