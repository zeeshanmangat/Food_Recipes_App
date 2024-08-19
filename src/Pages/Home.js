import { HeroSection } from "../components/HeroSection";
import Improveskills from "../components/Improveskills";
import QouteSection from "../components/QouteSection";
import Chiefsection from "../components/Chiefsection";

import React from "react";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Improveskills />
      <QouteSection />
      <Chiefsection />
    </div>
  );
};

export default Home;
