"use client";
import { useLocale } from "next-intl";
import Link from "next/link";

export const Footer = () => {
  const currentLanguage = useLocale();

  return (
    <footer className="bg-white border-t border-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-md flex items-center justify-center">
                <span className="text-white text-xs">AI</span>
              </div>
              <span className="text-gray-900">
                {currentLanguage === "ru"
                  ? "ИИ Узбекистан"
                  : currentLanguage === "uz"
                  ? "AI O'zbekiston"
                  : "AI Uzbekistan"}
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              {currentLanguage === "ru"
                ? "Развитие искусственного интеллекта в Узбекистане"
                : currentLanguage === "uz"
                ? "O'zbekistonda sun'iy intellekt rivojlanishi"
                : "Artificial Intelligence Development in Uzbekistan"}
            </p>
          </div>

          <div>
            <h3 className="text-gray-900 mb-4">
              {currentLanguage === "ru"
                ? "Разделы"
                : currentLanguage === "uz"
                ? "Bo'limlar"
                : "Sections"}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={"/news"}
                  className="text-gray-600 hover:text-blue-600"
                >
                  {currentLanguage === "ru"
                    ? "Новости"
                    : currentLanguage === "uz"
                    ? "Yangiliklar"
                    : "News"}
                </Link>
              </li>
              <li>
                <Link
                  href={"education"}
                  className="text-gray-600 hover:text-blue-600"
                >
                  {currentLanguage === "ru"
                    ? "Образование"
                    : currentLanguage === "uz"
                    ? "Ta'lim"
                    : "Education"}
                </Link>
              </li>
              <li>
                <Link
                  href={"projects"}
                  className="text-gray-600 hover:text-blue-600"
                >
                  {currentLanguage === "ru"
                    ? "Проекты"
                    : currentLanguage === "uz"
                    ? "Loyihalar"
                    : "Projects"}
                </Link>
              </li>
              <li>
                <Link
                  href={"library"}
                  className="text-gray-600 hover:text-blue-600"
                >
                  {currentLanguage === "ru"
                    ? "Библиотека"
                    : currentLanguage === "uz"
                    ? "Kutubxona"
                    : "Library"}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 mb-4">
              {currentLanguage === "ru"
                ? "Ресурсы"
                : currentLanguage === "uz"
                ? "Resurslar"
                : "Resources"}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  {currentLanguage === "ru"
                    ? "Документы"
                    : currentLanguage === "uz"
                    ? "Hujjatlar"
                    : "Documents"}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  {currentLanguage === "ru"
                    ? "API"
                    : currentLanguage === "uz"
                    ? "API"
                    : "API"}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  {currentLanguage === "ru"
                    ? "Поддержка"
                    : currentLanguage === "uz"
                    ? "Yordam"
                    : "Support"}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 mb-4">
              {currentLanguage === "ru"
                ? "Контакты"
                : currentLanguage === "uz"
                ? "Aloqa"
                : "Contact"}
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              {currentLanguage === "ru"
                ? "Ташкент, Узбекистан"
                : currentLanguage === "uz"
                ? "Toshkent, O'zbekiston"
                : "Tashkent, Uzbekistan"}
            </p>
            <p className="text-sm text-gray-600">info@ai-uzbekistan.uz</p>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-6 mt-8 text-center text-sm text-gray-500">
          <p>
            © 2025{" "}
            {currentLanguage === "ru"
              ? "ИИ Узбекистан"
              : currentLanguage === "uz"
              ? "AI O'zbekiston"
              : "AI Uzbekistan"}
            .{" "}
            {currentLanguage === "ru"
              ? "Все права защищены"
              : currentLanguage === "uz"
              ? "Barcha huquqlar himoyalangan"
              : "All rights reserved"}
            .
          </p>
        </div>
      </div>
    </footer>
  );
};
