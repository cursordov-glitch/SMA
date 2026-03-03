import type { Metadata } from "next";

export const metadata: Metadata = { title: "Profile" };

export default function ProfilePage() {
  return (
    <div className="flex flex-col min-h-full animate-fade-in">
      <div className="relative h-36 bg-gradient-brand">
        <div className="absolute -bottom-10 left-6">
          <div className="w-20 h-20 rounded-3xl bg-background border-4 border-background shadow-glass-lg" />
        </div>
      </div>

      <div className="pt-14 px-6 pb-6 space-y-6">
        <div className="space-y-1">
          <div className="h-5 w-32 bg-muted rounded-full" />
          <div className="h-3.5 w-24 bg-muted/60 rounded-full" />
        </div>

        <div className="flex gap-6">
          {["Posts", "Followers", "Following"].map((label) => (
            <div key={label} className="text-center">
              <div className="h-5 w-10 bg-muted rounded-full mx-auto mb-1" />
              <span className="text-xs text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>

        <div className="h-3 w-full bg-muted/60 rounded-full" />
        <div className="h-3 w-4/5 bg-muted/60 rounded-full" />

        <div className="grid grid-cols-3 gap-1.5">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-muted/60 rounded-xl"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
