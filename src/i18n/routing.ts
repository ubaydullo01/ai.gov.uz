import { defaultLocale, locales } from "@/types";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales,

  defaultLocale,
});
