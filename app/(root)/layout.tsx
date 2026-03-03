import { TopNav } from "@/components/layout/TopNav";
import { BottomNav } from "@/components/layout/BottomNav";
import { SideNav } from "@/components/layout/SideNav";
import { cn } from "@/lib/utils";

export default function RootGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-background">
      <TopNav />

      <div className="flex min-h-screen pt-[60px]">
        {/* Desktop sidebar — 72px collapsed, 240px expanded at xl */}
        <SideNav />

        {/* Main scrollable content */}
        <main
          className={cn(
            "flex-1 min-w-0",
            "lg:ml-[72px] xl:ml-[240px]",
            "pb-16 lg:pb-0"
          )}
        >
          {children}
        </main>
      </div>

      {/* Mobile bottom nav */}
      <BottomNav />
    </div>
  );
}
