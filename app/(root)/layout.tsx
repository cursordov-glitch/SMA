import { TopNav } from "@/components/layout/TopNav";
import { BottomNav } from "@/components/layout/BottomNav";
import { SideNav } from "@/components/layout/SideNav";

export default function RootGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen flex flex-col">
      <TopNav />
      <div className="flex flex-1 pt-[60px]">
        <SideNav />
        <main className="flex-1 md:ml-[72px] lg:ml-[240px] pb-[64px] md:pb-0 min-h-[calc(100vh-60px)]">
          {children}
        </main>
      </div>
      <BottomNav />
    </div>
  );
}
