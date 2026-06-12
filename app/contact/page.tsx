import {
  EngagementPaths,
  HeroContact,
  InquiryForm,
  InquiryRoutingFaq,
  OperatingPresence,
  ResponseTimeCommitment,
} from "@/components/contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Begin a consultation with the Dharwin team. Schedule a consultation, submit a project brief, or send a direct inquiry — response within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <HeroContact />
      <EngagementPaths />
      <InquiryForm />
      <OperatingPresence />
      <ResponseTimeCommitment />
      <InquiryRoutingFaq />
    </>
  );
}
