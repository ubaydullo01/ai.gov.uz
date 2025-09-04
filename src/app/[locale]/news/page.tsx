"use client";
import { TLocale } from "@/types";
import { useLocale } from "next-intl";
import { useState } from "react";
import {
  FeaturedNewsSection,
  FilterSection,
  HeaderSection,
  NewsGridSection,
  NewsletterSection,
} from "./_components/sections";
import { newsItems } from "./constants";

const NewsPage = () => {
  const locale = useLocale() as TLocale;
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNews = newsItems.filter((item) => {
    const matchesFilter =
      activeFilter === "all" || item.category === activeFilter;
    const matchesSearch =
      searchTerm === "" ||
      item.title[locale].toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.excerpt[locale].toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-8">
      <HeaderSection />
      <FilterSection
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
      <FeaturedNewsSection
        filteredNews={filteredNews}
        activeFilter={activeFilter}
      />
      <NewsGridSection
        filteredNews={filteredNews}
        activeFilter={activeFilter}
      />
      <NewsletterSection />
    </div>
  );
};

export default NewsPage;
