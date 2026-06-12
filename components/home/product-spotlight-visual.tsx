export function ProductSpotlightVisual() {
  return (
    <div
      className="mx-auto mt-12 w-full max-w-[56rem] border border-paper/15 bg-paper p-6 md:mt-16 md:p-8"
      aria-hidden="true"
    >
      <div className="flex items-center justify-between border-b border-rule pb-4">
        <p className="font-display text-xl font-medium text-ink">Dharwin OS</p>
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">
          Operations
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="border border-rule p-4">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-muted">
            Engagement Timeline
          </p>
          <div className="mt-4 space-y-2">
            <div className="h-2 w-full bg-rule" />
            <div className="h-2 w-5/6 bg-rule" />
            <div className="h-2 w-4/6 bg-ink/10" />
          </div>
        </div>

        <div className="border border-rule p-4">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-muted">
            Pipeline
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="h-12 border border-rule" />
            <div className="h-12 border border-rule" />
            <div className="h-12 border border-rule" />
            <div className="h-12 border border-ink/15" />
          </div>
        </div>

        <div className="border border-rule p-4">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-muted">
            Agent Activity
          </p>
          <div className="mt-4 space-y-3">
            <div className="flex gap-2">
              <div className="h-2 w-2 rounded-full bg-ember" />
              <div className="h-2 flex-1 bg-rule" />
            </div>
            <div className="flex gap-2">
              <div className="h-2 w-2 rounded-full bg-rule" />
              <div className="h-2 flex-1 bg-rule" />
            </div>
            <div className="flex gap-2">
              <div className="h-2 w-2 rounded-full bg-rule" />
              <div className="h-2 flex-1 bg-ink/10" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 border border-rule p-4">
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-muted">
          Operational Reporting
        </p>
        <div className="mt-4 grid grid-cols-4 gap-3">
          <div className="h-16 border border-rule" />
          <div className="h-16 border border-rule" />
          <div className="h-16 border border-rule" />
          <div className="h-16 border border-ink/15" />
        </div>
      </div>
    </div>
  );
}
