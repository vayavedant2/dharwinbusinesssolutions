"use client";

import { type ChangeEvent, useId } from "react";

const FIELD_BASE =
  "peer h-14 w-full rounded-lg border border-rule bg-paper-elevated px-4 pt-5 pb-2 font-sans text-base text-ink transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember";

const LABEL_BASE =
  "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-sans text-base text-muted transition-all duration-200 peer-focus:top-3 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:font-medium peer-focus:tracking-wide peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:tracking-wide";

type FloatingLabelInputProps = {
  label: string;
  name: string;
  type?: "text" | "email";
  required?: boolean;
  autoComplete?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string | null;
};

export function FloatingLabelInput({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
  value,
  onChange,
  error,
}: FloatingLabelInputProps) {
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div>
      <div className="relative">
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder=" "
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className={`${FIELD_BASE} ${error ? "border-ember" : ""}`}
        />
        <label htmlFor={id} className={LABEL_BASE}>
          {label}
          {required ? (
            <span className="sr-only"> (required)</span>
          ) : null}
        </label>
      </div>
      {error ? (
        <p id={errorId} role="alert" className="mt-2 font-sans text-sm text-ember">
          {error}
        </p>
      ) : null}
    </div>
  );
}

type FloatingLabelTextareaProps = {
  label: string;
  name: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  error?: string | null;
  hint?: string;
};

export function FloatingLabelTextarea({
  label,
  name,
  required = false,
  value,
  onChange,
  error,
  hint,
}: FloatingLabelTextareaProps) {
  const id = useId();
  const errorId = `${id}-error`;
  const hintId = hint ? `${id}-hint` : undefined;

  return (
    <div>
      <div className="relative">
        <textarea
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder=" "
          rows={5}
          aria-invalid={error ? true : undefined}
          aria-describedby={
            [error ? errorId : null, hintId].filter(Boolean).join(" ") || undefined
          }
          className={`peer min-h-[140px] w-full resize-y rounded-lg border border-rule bg-paper-elevated px-4 pt-6 pb-3 font-sans text-base leading-relaxed text-ink transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember ${
            error ? "border-ember" : ""
          }`}
        />
        <label
          htmlFor={id}
          className={`${LABEL_BASE} peer-focus:top-4 peer-[:not(:placeholder-shown)]:top-4`}
        >
          {label}
          {required ? (
            <span className="sr-only"> (required)</span>
          ) : null}
        </label>
      </div>
      {hint ? (
        <p id={hintId} className="mt-2 font-sans text-sm text-muted">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} role="alert" className="mt-2 font-sans text-sm text-ember">
          {error}
        </p>
      ) : null}
    </div>
  );
}

type FloatingLabelSelectProps = {
  label: string;
  name: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
  placeholderOption?: string;
  error?: string | null;
};

export function FloatingLabelSelect({
  label,
  name,
  required = false,
  value,
  onChange,
  options,
  placeholderOption = "Select an option",
  error,
}: FloatingLabelSelectProps) {
  const id = useId();
  const errorId = `${id}-error`;
  const hasValue = value.length > 0;

  return (
    <div>
      <div className="relative">
        <select
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className={`${FIELD_BASE} appearance-none pr-10 ${
            error ? "border-ember" : ""
          } ${!hasValue ? "text-transparent" : ""}`}
        >
          <option value="" disabled>
            {placeholderOption}
          </option>
          {options.map((option) => (
            <option key={option} value={option} className="text-ink">
              {option}
            </option>
          ))}
        </select>
        <label
          htmlFor={id}
          className={`${LABEL_BASE} ${
            hasValue
              ? "top-3 translate-y-0 text-xs font-medium tracking-wide"
              : ""
          }`}
        >
          {label}
          {required ? (
            <span className="sr-only"> (required)</span>
          ) : null}
        </label>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted"
        >
          ▾
        </span>
      </div>
      {error ? (
        <p id={errorId} role="alert" className="mt-2 font-sans text-sm text-ember">
          {error}
        </p>
      ) : null}
    </div>
  );
}

type FileUploadFieldProps = {
  label: string;
  name: string;
  hint: string;
  maxBytes: number;
  onChange: (file: File | null) => void;
  error?: string | null;
};

export function FileUploadField({
  label,
  name,
  hint,
  maxBytes,
  onChange,
  error,
}: FileUploadFieldProps) {
  const id = useId();
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;

    if (file && file.size > maxBytes) {
      onChange(null);
      event.target.value = "";
      return;
    }

    onChange(file);
  };

  return (
    <div>
      <label
        htmlFor={id}
        className="font-sans text-sm font-medium text-ink"
      >
        {label}
      </label>
      <p id={hintId} className="mt-1 font-sans text-sm text-muted">
        {hint}
      </p>
      <input
        id={id}
        name={name}
        type="file"
        onChange={handleChange}
        aria-describedby={`${hintId}${error ? ` ${errorId}` : ""}`}
        aria-invalid={error ? true : undefined}
        className="mt-3 block w-full cursor-pointer rounded-lg border border-rule bg-paper-elevated px-4 py-3 font-sans text-sm text-ink file:mr-4 file:rounded-md file:border-0 file:bg-ember-soft file:px-4 file:py-2 file:font-semibold file:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
      />
      {error ? (
        <p id={errorId} role="alert" className="mt-2 font-sans text-sm text-ember">
          {error}
        </p>
      ) : null}
    </div>
  );
}
