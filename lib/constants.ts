export const APP_NAME = "SuperApp";
export const APP_DESCRIPTION =
  "The everything app for modern creators and communities.";

export const ROUTES = {
  HOME: "/home",
  VIDEOS: "/videos",
  CREATE: "/create",
  CHAT: "/chat",
  PROFILE: "/profile",
  EXPLORE: "/explore",
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
