import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PlaceholderPage } from "@/components/common/PlaceholderPage";
import { Home } from "lucide-react";

export const metadata: Metadata = { title: "Home" };

export default function HomePage() {
  return (
    <PageShell maxWidth="md">
      <PlaceholderPage
        icon={<Home className="w-8 h-8" />}
        title="Home Feed"
        description="Your personalized feed will appear here. Posts, stories, and content from people you follow."
        gradient="from-blue-500 to-violet-500"
        phase="Phase 2"
      />
    </PageShell>
  );
}
