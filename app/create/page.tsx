import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PlaceholderPage } from "@/components/common/PlaceholderPage";
import { Plus } from "lucide-react";

export const metadata: Metadata = { title: "Create" };

export default function CreatePage() {
  return (
    <PageShell maxWidth="md">
      <PlaceholderPage
        icon={<Plus className="w-8 h-8" />}
        title="Create"
        description="Share a post, upload a video, start a poll, or go live with your audience."
        gradient="from-brand-500 via-violet-500 to-pink-500"
        phase="Phase 4"
      />
    </PageShell>
  );
}
