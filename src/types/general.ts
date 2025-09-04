import { ReactNode } from "react";

export const locales = ["en", "ru", "uz"] as const;
export const defaultLocale: TLocale = "ru";

export type TLocale = (typeof locales)[number];

export type TOption = {
  value: string;
  label: string;
};

export type TNavbar = {
  label: ReactNode;
  link: string;
  hash?: string;
  children?: TNavbar[];
};

export type TPaginationParams = {
  pageNumber?: number;
  size: number;
  sort?: string[];
  page: number;
};
