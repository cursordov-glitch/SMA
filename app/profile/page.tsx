import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PlaceholderPage } from "@/components/common/PlaceholderPage";
import { User } from "lucide-react";

export const metadata: Metadata = { title: "Profile" };

export default function ProfilePage() {
  return (
    <PageShell maxWidth="lg">
      <PlaceholderPage
        icon={<User className="w-8 h-8" />}
        title="Profile"
        description="Your public profile, posts, followers, and account settings."
        gradient="from-violet-500 to-purple-500"
        phase="Phase 6"
      />
    </PageShell>
  );
}
