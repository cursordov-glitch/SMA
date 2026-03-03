import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PlaceholderPage } from "@/components/common/PlaceholderPage";
import { MessageCircle } from "lucide-react";

export const metadata: Metadata = { title: "Chat" };

export default function ChatPage() {
  return (
    <PageShell maxWidth="lg">
      <PlaceholderPage
        icon={<MessageCircle className="w-8 h-8" />}
        title="Messages"
        description="Direct messages, group chats, and real-time conversations."
        gradient="from-green-500 to-emerald-500"
        phase="Phase 5"
      />
    </PageShell>
  );
}
