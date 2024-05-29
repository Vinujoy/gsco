import AboutUs from "@/components/about";
import Customer from "@/components/customer";
import Circle from "@/components/divider";
import Intro from "@/components/intro";
import Services from "@/components/services";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col item-center">
      <Intro />
      <Services />
      <AboutUs />
      <Customer/>
    </main>
  );
}
