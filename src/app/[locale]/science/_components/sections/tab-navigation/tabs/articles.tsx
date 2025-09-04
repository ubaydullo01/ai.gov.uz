"use client";
import { SciencePageData } from "@/app/[locale]/science/constants";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { TLocale } from "@/types";
import { motion } from "framer-motion";
import { Award, BookOpen, User } from "lucide-react";
import { useLocale } from "next-intl";

export const ScienceArticlesTab = () => {
  const locale = useLocale() as TLocale;

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h3 className="text-xl text-gray-900 mb-2">
          {SciencePageData[locale].articles.title}
        </h3>
        <p className="text-gray-600">
          {SciencePageData[locale].articles.subtitle}
        </p>
      </motion.div>

      <div className="space-y-4">
        {SciencePageData[locale].articles.items.map((article, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            whileHover={{ scale: 1.01 }}
          >
            <Card className="hover:shadow-lg transition-all duration-200">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {article.impact} Journal
                  </Badge>
                  <span className="text-sm text-gray-500">{article.year}</span>
                </div>
                <CardTitle className="text-lg leading-tight">
                  {article.title}
                </CardTitle>
                <CardDescription>
                  <span className="flex items-center gap-2 mb-2">
                    <User size={14} />
                    {article.authors}
                  </span>
                  <span className="flex items-center gap-2 mb-2">
                    <BookOpen size={14} />
                    {article.journal}
                  </span>
                  <span className="flex items-center gap-2">
                    <Award size={14} />
                    {article.citations}{" "}
                    {locale === "ru"
                      ? "цитирований"
                      : locale === "uz"
                      ? "iqtiboslar"
                      : "citations"}
                  </span>
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
