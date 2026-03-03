import type { Metadata } from "next";

export const metadata: Metadata = { title: "Explore" };

export default function ExplorePage() {
  const categories = ["For You", "Trending", "Music", "Gaming", "Sports", "Tech", "Art", "Food"];

  return (
    <div className="flex flex-col min-h-full p-4 md:p-6 lg:p-8 animate-fade-in">
      <div className="flex gap-2 overflow-x-auto pb-3 mb-6 scrollbar-hide">
        {categories.map((cat, i) => (
          <button
            key={cat}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              i === 0
                ? "bg-primary text-primary-foreground shadow-glow-sm"
                : "glass hover:bg-surface-hover"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className={`glass-card overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-200 ${
              i === 0 ? "col-span-2 md:col-span-1" : ""
            }`}
          >
            <div
              className="bg-muted/60 w-full"
              style={{ aspectRatio: i === 0 ? "16/9" : "1/1" }}
            />
            <div className="p-3">
              <div className="h-2.5 w-3/4 bg-muted rounded-full mb-1.5" />
              <div className="h-2 w-1/2 bg-muted/60 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
