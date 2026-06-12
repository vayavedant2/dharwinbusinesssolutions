import {
  ByTheNumbers,
  ClientTestimonial,
  DharwinApproach,
  FeaturedCaseStudy,
  HeadquartersOperations,
  ProductSpotlight,
  SolutionsGrid,
} from "@/components/home";
import { HeroEditorial } from "@/components/hero";
import { PositioningParagraph } from "@/components/positioning-paragraph";
import { TrustStrip } from "@/components/trust-strip";
import { ClosingCtaBanner } from "@/components/ui/closing-cta-banner";

export default function Home() {
  return (
    <>
      <HeroEditorial />
      <TrustStrip />
      <PositioningParagraph />
      <SolutionsGrid />
      <FeaturedCaseStudy />
      <DharwinApproach />
      <ProductSpotlight />
      <ByTheNumbers />
      <ClientTestimonial />
      <HeadquartersOperations />
      <ClosingCtaBanner />
    </>
  );
}
