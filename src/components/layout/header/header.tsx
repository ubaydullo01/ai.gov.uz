"use client";
import { LanguageSelector } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { useDecodedPathname } from "@/hooks";
import { Menu, X } from "lucide-react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { navItems } from "./constants";
import { MobileMenu } from "./mobile";
import { useRouter } from "next/navigation";

export const Header = () => {
  const currentLanguage = useLocale();

  const { pathname } = useDecodedPathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/" + locale);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div
            onClick={handleLogoClick}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-[14px]">AI</span>
            </div>
            <div>
              <h1 className="text-lg/[1.2] text-gray-900">
                {currentLanguage === "ru"
                  ? "ИИ Узбекистан"
                  : currentLanguage === "uz"
                  ? "AI O'zbekiston"
                  : "AI Uzbekistan"}
              </h1>
              {/* <p className="text-[14px] text-gray-500">
                {currentLanguage === "ru"
                  ? "Развитие искусственного интеллекта"
                  : currentLanguage === "uz"
                  ? "Sun'iy intellekt rivojlanishi"
                  : "Artificial Intelligence Development"}
              </p> */}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((page, idx) => {
              const link =
                page.path == "/"
                  ? page.path + currentLanguage
                  : "/" + currentLanguage + page.path;
              return (
                <Link
                  key={idx}
                  href={link}
                  className={`text-[16px] hover:text-blue-600 transition-colors duration-200 ${
                    pathname === page.path
                      ? "text-blue-600 font-medium"
                      : "text-gray-600"
                  }`}
                >
                  {page.name[currentLanguage as keyof typeof page.name]}
                </Link>
              );
            })}
          </div>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <MobileMenu setIsMenuOpen={setIsMenuOpen} />}
      </div>
    </nav>
  );
};
