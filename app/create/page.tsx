import type { Metadata } from "next";

export const metadata: Metadata = { title: "Create" };

export default function CreatePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-8 animate-fade-in">
      <div className="glass-card p-10 text-center max-w-md w-full space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-gradient-brand mx-auto flex items-center justify-center shadow-glow">
          <span className="text-3xl text-white">+</span>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Create Something</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Share your story, post a video, or start a conversation.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 pt-2">
          {["Post", "Video", "Story", "Go Live"].map((label) => (
            <button
              key={label}
              className="glass rounded-2xl p-4 text-sm font-medium hover:bg-surface-hover transition-colors text-left"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
