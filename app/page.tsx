import BuiltOnce from "@/sections/BuiltOnce";
import BuiltWith from "@/sections/BuiltWith";
import EveryFarmer from "@/sections/EveryFarmer";
import Hero from "@/sections/Hero";
import HowItWork from "@/sections/HowItWork";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | IROKOAI",
  description: "Every farmer gets an agronomist",
};

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Hero />
      <EveryFarmer />
      <HowItWork />
      <BuiltOnce />
      {/* <BuiltWith /> */}
    </div>
  );
}
