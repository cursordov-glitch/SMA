import type { LucideIcon } from "lucide-react";

export interface NavItem {
  href: string;
  label: string;
  iconName: string;
  isCreate?: boolean;
  badge?: number;
}

export const BOTTOM_NAV_ITEMS: NavItem[] = [
  { href: "/home", label: "Home", iconName: "Home" },
  { href: "/videos", label: "Videos", iconName: "Video" },
  { href: "/create", label: "Create", iconName: "Plus", isCreate: true },
  { href: "/chat", label: "Chat", iconName: "MessageCircle" },
  { href: "/profile", label: "Profile", iconName: "User" },
];

export const SIDE_NAV_ITEMS: NavItem[] = [
  { href: "/home", label: "Home", iconName: "Home" },
  { href: "/explore", label: "Explore", iconName: "Compass" },
  { href: "/videos", label: "Videos", iconName: "Video" },
  { href: "/create", label: "Create", iconName: "Plus", isCreate: true },
  { href: "/chat", label: "Chat", iconName: "MessageCircle" },
  { href: "/profile", label: "Profile", iconName: "User" },
];
