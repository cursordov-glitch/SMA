export const APP_NAME = "SuperApp";
export const APP_DESCRIPTION = "The everything app for modern creators and communities.";

export const ROUTES = {
  HOME: "/home",
  VIDEOS: "/videos",
  CREATE: "/create",
  CHAT: "/chat",
  PROFILE: "/profile",
  EXPLORE: "/explore",
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export const ANIMATION_DURATION = {
  fast: 0.15,
  normal: 0.25,
  slow: 0.4,
} as const;
