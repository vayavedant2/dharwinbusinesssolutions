"use client";

import { useId, useState } from "react";

export type AccordionItem = {
  id: string;
  question: string;
  answer: string;
};

type AccordionProps = {
  items: readonly AccordionItem[];
  headingId?: string;
  allowMultiple?: boolean;
};

export function Accordion({
  items,
  headingId,
  allowMultiple = false,
}: AccordionProps) {
  const baseId = useId();
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setOpenIds((current) => {
      const next = new Set(allowMultiple ? current : []);

      if (current.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    id: string,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle(id);
    }
  };

  return (
    <div role="region" aria-labelledby={headingId}>
      {items.map((item) => {
        const isOpen = openIds.has(item.id);
        const panelId = `${baseId}-${item.id}-panel`;
        const triggerId = `${baseId}-${item.id}-trigger`;

        return (
          <div key={item.id} className="border-t border-rule">
            <h3 className="m-0">
              <button
                id={triggerId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                onKeyDown={(event) => handleKeyDown(event, item.id)}
                className="flex w-full items-start justify-between gap-6 py-6 text-left font-display text-[1.25rem] leading-[1.3] font-medium tracking-[-0.01em] text-ink transition-colors duration-200 hover:text-ink-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember md:text-[1.5rem] md:leading-[1.25]"
              >
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 font-sans text-2xl font-normal leading-none text-ember transition-transform duration-300 motion-reduce:transition-none"
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-6 font-sans text-lg leading-[1.65] text-muted">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
      <div className="border-t border-rule" aria-hidden="true" />
    </div>
  );
}
