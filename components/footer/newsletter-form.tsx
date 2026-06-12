"use client";

import { FormEvent, useId, useState } from "react";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(value: string): string | null {
  const trimmed = value.trim();

  if (!trimmed) {
    return "Enter your email address.";
  }

  if (!EMAIL_PATTERN.test(trimmed)) {
    return "Enter a valid email address.";
  }

  return null;
}

export function NewsletterForm() {
  const formId = useId();
  const emailId = `${formId}-email`;
  const errorId = `${formId}-error`;
  const successId = `${formId}-success`;

  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationError = validateEmail(email);

    if (validationError) {
      setError(validationError);
      setSubmitted(false);
      return;
    }

    setError(null);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div id="footer-newsletter" className="w-full scroll-mt-24 lg:max-w-[17.5rem]">
      <p className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-paper/45">
        Newsletter
      </p>
      <form
        className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center"
        onSubmit={handleSubmit}
        noValidate
        aria-describedby={
          error ? errorId : submitted ? successId : undefined
        }
      >
        <div className="min-w-0 flex-1">
          <label htmlFor={emailId} className="sr-only">
            Email address
          </label>
          <input
            id={emailId}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (error) {
                setError(null);
              }
              if (submitted) {
                setSubmitted(false);
              }
            }}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? errorId : undefined}
            className={`h-11 w-full rounded-lg border bg-transparent px-3 font-sans text-sm text-paper transition-colors duration-200 placeholder:text-paper/35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember ${
              error ? "border-ember" : "border-rule/20"
            }`}
            placeholder="you@company.com"
          />
        </div>
        <button
          type="submit"
          className="group inline-flex h-11 shrink-0 items-center justify-center rounded-lg border border-rule/25 bg-transparent px-4 font-sans text-sm font-semibold text-paper/85 transition-colors duration-200 hover:border-ember/40 hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
        >
          <span className="relative after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-ember after:transition-transform after:duration-200 group-hover:after:scale-x-100 group-focus-visible:after:scale-x-100 motion-reduce:after:transition-none">
            Subscribe
          </span>
        </button>
      </form>
      {error ? (
        <p
          id={errorId}
          role="alert"
          className="mt-2 font-sans text-sm text-ember-soft"
        >
          {error}
        </p>
      ) : null}
      {submitted && !error ? (
        <p
          id={successId}
          role="status"
          className="mt-2 font-sans text-sm text-paper/80"
        >
          Thank you. You&apos;re on the list.
        </p>
      ) : null}
    </div>
  );
}
