import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-full p-4 md:p-6 lg:p-8 animate-fade-in">
      <div className="max-w-2xl mx-auto w-full space-y-6">
        <div className="glass-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-brand animate-pulse_glow" />
            <div className="space-y-1.5">
              <div className="h-3 w-24 bg-muted rounded-full" />
              <div className="h-2.5 w-16 bg-muted/60 rounded-full" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-3 w-full bg-muted rounded-full" />
            <div className="h-3 w-4/5 bg-muted rounded-full" />
            <div className="h-3 w-3/5 bg-muted rounded-full" />
          </div>
          <div className="mt-4 h-48 w-full bg-muted/50 rounded-2xl" />
        </div>

        {[1, 2, 3].map((i) => (
          <div key={i} className="glass-card p-5">
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-9 h-9 rounded-full bg-muted"
                style={{ opacity: 1 - i * 0.15 }}
              />
              <div className="space-y-1.5 flex-1">
                <div
                  className="h-2.5 bg-muted rounded-full"
                  style={{ width: `${60 + i * 8}%` }}
                />
                <div className="h-2 w-1/4 bg-muted/60 rounded-full" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-2.5 w-full bg-muted/70 rounded-full" />
              <div className="h-2.5 w-5/6 bg-muted/70 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
