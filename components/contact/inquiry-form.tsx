"use client";

import {
  FileUploadField,
  FloatingLabelInput,
  FloatingLabelSelect,
  FloatingLabelTextarea,
} from "@/components/ui/floating-label-field";
import { SectionKicker } from "@/components/ui/section-kicker";
import { SectionReveal } from "@/components/ui/section-reveal";
import { useSectionReveal } from "@/lib/use-section-reveal";
import { FormEvent, useState } from "react";
import {
  INQUIRY_FORM,
  SERVICE_AREA_OPTIONS,
} from "./contact-content";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormState = {
  name: string;
  businessEmail: string;
  organization: string;
  role: string;
  serviceArea: string;
  inquiryDetail: string;
};

type FormErrors = Partial<Record<keyof FormState | "file", string>>;

const INITIAL_STATE: FormState = {
  name: "",
  businessEmail: "",
  organization: "",
  role: "",
  serviceArea: "",
  inquiryDetail: "",
};

export function InquiryForm() {
  const { ref, revealed } = useSectionReveal();
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
    if (errors[key]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[key];
        return next;
      });
    }
    if (submitted) {
      setSubmitted(false);
    }
  };

  const validate = (): FormErrors => {
    const next: FormErrors = {};

    if (!form.name.trim()) {
      next.name = "Enter your name.";
    }

    if (!form.businessEmail.trim()) {
      next.businessEmail = "Enter your business email address.";
    } else if (!EMAIL_PATTERN.test(form.businessEmail.trim())) {
      next.businessEmail = "Enter a valid business email address.";
    }

    if (!form.organization.trim()) {
      next.organization = "Enter your organization.";
    }

    if (!form.role.trim()) {
      next.role = "Enter your role.";
    }

    if (!form.serviceArea) {
      next.serviceArea = "Select a service area of interest.";
    }

    if (!form.inquiryDetail.trim()) {
      next.inquiryDetail = "Provide inquiry detail.";
    }

    if (file && file.size > INQUIRY_FORM.fileUpload.maxBytes) {
      next.file = "File must be 10 MB or smaller.";
    }

    return next;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    // Form submission backend pending client integration (website-specification.md § Backend Integrations)
    setErrors({});
    setSubmitted(true);
    setForm(INITIAL_STATE);
    setFile(null);
  };

  const handleFileChange = (nextFile: File | null) => {
    if (nextFile && nextFile.size > INQUIRY_FORM.fileUpload.maxBytes) {
      setErrors((current) => ({
        ...current,
        file: "File must be 10 MB or smaller.",
      }));
      setFile(null);
      return;
    }

    setFile(nextFile);
    if (errors.file) {
      setErrors((current) => {
        const next = { ...current };
        delete next.file;
        return next;
      });
    }
  };

  return (
    <section
      ref={ref}
      id="inquiry-form"
      aria-labelledby="inquiry-form-heading"
      className="border-t border-rule bg-paper scroll-mt-24 max-lg:py-16 md:max-lg:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-20">
        <SectionReveal revealed={revealed}>
          <SectionKicker id="inquiry-form-heading">
            {INQUIRY_FORM.heading.toUpperCase()}
          </SectionKicker>
        </SectionReveal>

        <SectionReveal revealed={revealed} delay={80}>
          <form
            className="mx-auto mt-10 max-w-[720px] space-y-6"
            onSubmit={handleSubmit}
            noValidate
          >
            <FloatingLabelInput
              label="Name"
              name="name"
              required
              autoComplete="name"
              value={form.name}
              onChange={(value) => updateField("name", value)}
              error={errors.name}
            />

            <FloatingLabelInput
              label="Business Email"
              name="businessEmail"
              type="email"
              required
              autoComplete="email"
              value={form.businessEmail}
              onChange={(value) => updateField("businessEmail", value)}
              error={errors.businessEmail}
            />

            <FloatingLabelInput
              label="Organization"
              name="organization"
              required
              autoComplete="organization"
              value={form.organization}
              onChange={(value) => updateField("organization", value)}
              error={errors.organization}
            />

            <FloatingLabelInput
              label="Role"
              name="role"
              required
              autoComplete="organization-title"
              value={form.role}
              onChange={(value) => updateField("role", value)}
              error={errors.role}
            />

            <FloatingLabelSelect
              label="Service Area of Interest"
              name="serviceArea"
              required
              value={form.serviceArea}
              onChange={(value) => updateField("serviceArea", value)}
              options={SERVICE_AREA_OPTIONS}
              error={errors.serviceArea}
            />

            <FloatingLabelTextarea
              label="Inquiry Detail"
              name="inquiryDetail"
              required
              value={form.inquiryDetail}
              onChange={(value) => updateField("inquiryDetail", value)}
              error={errors.inquiryDetail}
              hint="Provide 3–5 sentences describing your requirement."
            />

            <FileUploadField
              label={INQUIRY_FORM.fileUpload.label}
              name="supportingDocumentation"
              hint={INQUIRY_FORM.fileUpload.hint}
              maxBytes={INQUIRY_FORM.fileUpload.maxBytes}
              onChange={handleFileChange}
              error={errors.file}
            />

            <div className="pt-2">
              <button
                type="submit"
                className="group inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-ember px-8 text-base font-semibold text-paper transition-[transform] duration-200 hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                {INQUIRY_FORM.submitLabel}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                >
                  →
                </span>
              </button>
            </div>

            <p className="font-sans text-base leading-relaxed text-muted">
              {INQUIRY_FORM.responseTime}
            </p>

            {submitted ? (
              <p role="status" className="font-sans text-base text-ink">
                Thank you. Your inquiry has been received.
              </p>
            ) : null}
          </form>
        </SectionReveal>
      </div>
    </section>
  );
}
