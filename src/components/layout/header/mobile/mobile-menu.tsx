"use client";

import { useDecodedPathname } from "@/hooks";
import { useLocale } from "next-intl";
import { Dispatch, SetStateAction } from "react";
import { navItems } from "../constants";

type TProps = {
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export const MobileMenu = ({ setIsMenuOpen }: TProps) => {
  const { pathname } = useDecodedPathname();
  const locale = useLocale();
  return (
    <div className="lg:hidden pb-4">
      <div className="flex flex-col space-y-2">
        {navItems.map((page) => (
          <button
            key={page.path}
            onClick={() => {
              setIsMenuOpen(false);
            }}
            className={`text-left py-2 px-4 rounded-lg text-sm transition-colors duration-200 ${
              pathname === page.path
                ? "bg-blue-50 text-blue-600 font-medium"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            {page.name[locale as keyof typeof page.name]}
          </button>
        ))}
      </div>
    </div>
  );
};
