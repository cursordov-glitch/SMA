import type { Metadata } from "next";

export const metadata: Metadata = { title: "Chat" };

export default function ChatPage() {
  return (
    <div className="flex flex-col min-h-full animate-fade-in">
      <div className="p-4 border-b border-border/60">
        <h1 className="text-xl font-semibold">Messages</h1>
      </div>
      <div className="flex-1 divide-y divide-border/40">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-4 py-3.5 hover:bg-surface-hover transition-colors cursor-pointer"
          >
            <div className="relative flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-muted" />
              {i < 3 && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <div className="h-3 w-24 bg-muted rounded-full" />
                <div className="h-2 w-10 bg-muted/50 rounded-full" />
              </div>
              <div className="h-2.5 w-4/5 bg-muted/60 rounded-full" />
            </div>
            {i % 3 === 0 && (
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium">
                {i + 1}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
