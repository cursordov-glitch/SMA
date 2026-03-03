import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PlaceholderPage } from "@/components/common/PlaceholderPage";
import { Video } from "lucide-react";

export const metadata: Metadata = { title: "Videos" };

export default function VideosPage() {
  return (
    <PageShell maxWidth="xl">
      <PlaceholderPage
        icon={<Video className="w-8 h-8" />}
        title="Videos"
        description="Short-form and long-form videos from creators you follow and trending content."
        gradient="from-red-500 to-pink-500"
        phase="Phase 3"
      />
    </PageShell>
  );
}
