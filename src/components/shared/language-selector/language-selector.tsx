"use client";
import { useLocale } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

export const LanguageSelector = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const languages = [
    { code: "ru", name: "RU" },
    { code: "uz", name: "UZ" },
    { code: "en", name: "EN" },
  ];
  const handleLanguageChange = (newLocale: string) => {
    if (newLocale == locale) return;
    startTransition(() => {
      const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
      const paramsString = searchParams.toString();
      const newPath = `/${newLocale}${pathWithoutLocale}${
        paramsString ? `?${paramsString}` : ""
      }`;

      router.replace(newPath, { scroll: false });
    });
  };

  return (
    <div className="flex items-center space-x-1 bg-gray-50 rounded-lg p-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          disabled={isPending}
          onClick={() => handleLanguageChange(lang.code)}
          className={`px-2 py-1 text-[16px] rounded-md transition-colors duration-200 ${
            locale === lang.code
              ? "bg-white text-blue-600 shadow-sm font-medium"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
};
