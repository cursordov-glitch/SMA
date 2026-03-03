export const THEME_CONFIG = {
  defaultTheme: "system",
  themes: ["light", "dark", "system"],
  storageKey: "superapp-theme",
} as const;

export type Theme = "light" | "dark" | "system";
