export function CaseStudyVisual() {
  return (
    <div
      className="flex aspect-[4/5] w-full flex-col border border-rule bg-paper-elevated p-6 md:p-8"
      aria-hidden="true"
    >
      <div className="flex items-center justify-between border-b border-rule pb-4">
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">
          Quote-to-Cash
        </p>
        <p className="font-mono text-xs text-muted">Atlas Logistics</p>
      </div>

      <div className="mt-6 space-y-4">
        <div className="border border-rule p-4">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-muted">
            Request Ingestion
          </p>
          <div className="mt-3 h-2 w-full bg-rule" />
          <div className="mt-2 h-2 w-[80%] bg-rule" />
        </div>

        <div className="border border-rule p-4">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-muted">
            Dynamic Pricing
          </p>
          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="h-8 border border-rule" />
            <div className="h-8 border border-rule" />
            <div className="h-8 border border-rule" />
          </div>
        </div>

        <div className="border border-rule p-4">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-muted">
            Approval Routing
          </p>
          <div className="mt-3 flex gap-2">
            <div className="h-2 flex-1 bg-ink/10" />
            <div className="h-2 flex-1 bg-rule" />
            <div className="h-2 flex-1 bg-rule" />
          </div>
        </div>

        <div className="border border-rule p-4">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-muted">
            Quote Delivery
          </p>
          <div className="mt-3 h-10 border border-ink/15" />
        </div>
      </div>
    </div>
  );
}
