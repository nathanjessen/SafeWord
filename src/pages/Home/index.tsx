import React from "react";
import {
  FeatureSection,
  Gallery,
  Hero,
  Roadmap,
  SafeWordGenerator,
  Team,
} from "../../components";

export default function Home() {
  return (
    <main>
      <Hero />
      <SafeWordGenerator />
      <Gallery />
      <Roadmap />
      <FeatureSection />
      <Team />
    </main>
  );
}
