import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PlaceholderPage } from "@/components/common/PlaceholderPage";
import { Compass } from "lucide-react";

export const metadata: Metadata = { title: "Explore" };

export default function ExplorePage() {
  return (
    <PageShell maxWidth="xl">
      <PlaceholderPage
        icon={<Compass className="w-8 h-8" />}
        title="Explore"
        description="Discover trending content, new creators, hashtags, and communities."
        gradient="from-orange-500 to-amber-500"
        phase="Phase 3"
      />
    </PageShell>
  );
}
