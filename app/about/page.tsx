import {
  AboutByTheNumbers,
  CompanyOrigin,
  HeroAbout,
  Leadership,
  OperatingCadence,
  OperatingPrinciples,
  OurPractice,
  RecognitionPartnerships,
} from "@/components/about";
import { ClosingCtaBanner } from "@/components/ui/closing-cta-banner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Dharwin Business Solutions — an integrated services firm for SMBs and scaling enterprises. Founded in 2022 to deliver software, growth, and talent under a single accountable engagement.",
};

export default function AboutPage() {
  return (
    <>
      <HeroAbout />
      <CompanyOrigin />
      <OperatingPrinciples />
      <Leadership />
      <OurPractice />
      <OperatingCadence />
      <AboutByTheNumbers />
      <RecognitionPartnerships />
      <ClosingCtaBanner />
    </>
  );
}
