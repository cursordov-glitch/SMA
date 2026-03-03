import type { Metadata } from "next";

export const metadata: Metadata = { title: "Videos" };

export default function VideosPage() {
  return (
    <div className="flex flex-col min-h-full p-4 md:p-6 lg:p-8 animate-fade-in">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="glass-card overflow-hidden group cursor-pointer">
            <div className="aspect-[9/16] bg-muted/60 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-0 h-0 border-y-[8px] border-y-transparent border-l-[14px] border-l-white ml-1" />
                </div>
              </div>
            </div>
            <div className="p-2.5">
              <div className="h-2.5 w-full bg-muted rounded-full mb-1.5" />
              <div className="h-2 w-2/3 bg-muted/60 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
