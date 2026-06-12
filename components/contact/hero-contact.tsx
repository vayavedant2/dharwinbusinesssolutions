import { HeroCentered } from "@/components/hero/hero-centered";
import { CONTACT_HERO } from "./contact-content";

export function HeroContact() {
  return (
    <HeroCentered
      id="contact-hero-heading"
      headline={CONTACT_HERO.headline}
      subhead={CONTACT_HERO.subhead}
    />
  );
}
