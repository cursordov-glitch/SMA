import {
  Home,
  Video,
  Plus,
  MessageCircle,
  User,
  Compass,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  isCreate?: boolean;
  mobileOnly?: boolean;
  desktopOnly?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { href: "/home",    label: "Home",    icon: Home },
  { href: "/explore", label: "Explore", icon: Compass, desktopOnly: true },
  { href: "/videos",  label: "Videos",  icon: Video },
  { href: "/create",  label: "Create",  icon: Plus, isCreate: true },
  { href: "/chat",    label: "Chat",    icon: MessageCircle },
  { href: "/profile", label: "Profile", icon: User },
];

export const BOTTOM_NAV_ITEMS: NavItem[] = NAV_ITEMS.filter(
  (item) => !item.desktopOnly
);

export const SIDE_NAV_ITEMS: NavItem[] = NAV_ITEMS;

export function isActiveRoute(pathname: string, href: string): boolean {
  if (href === "/home") return pathname === "/home" || pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}
