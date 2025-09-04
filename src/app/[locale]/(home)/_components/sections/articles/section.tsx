"use client";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { TLocale } from "@/types";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { useLocale } from "next-intl";
import Image from "next/image";
import { HomePageData } from "../../../constants";
import { articles } from "./constants";

export const ArticlesSection = () => {
  const locale = useLocale() as TLocale;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <h2 className="text-2xl text-gray-900 mb-8">
        {HomePageData[locale].latestArticles}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            whileHover={{ scale: 1.02 }}
            className="h-full"
          >
            <Card className="hover:shadow-lg transition-all h-full duration-200 border-0 bg-white shadow-md">
              <div className="aspect-video relative">
                <Image
                  src={article.image}
                  alt={article.title[locale]}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {article.category[locale]}
                  </Badge>
                  <span
                    className="text-xs text-gray-500 flex items-center"
                    suppressHydrationWarning
                  >
                    <Calendar size={12} className="mr-1" />
                    {new Date(article.date).toLocaleDateString()}
                  </span>
                </div>
                <CardTitle className="text-lg line-clamp-2">
                  {article.title[locale]}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {article.excerpt[locale]}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
