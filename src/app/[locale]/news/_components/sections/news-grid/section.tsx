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
import { newsItems, NewsPageData } from "../../../constants";

type TProps = {
  filteredNews: typeof newsItems;
  activeFilter: string;
};

export const NewsGridSection = ({ filteredNews, activeFilter }: TProps) => {
  const locale = useLocale() as TLocale;
  const data = NewsPageData[locale];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredNews
        .slice(activeFilter === "all" && filteredNews[0]?.featured ? 1 : 0)
        .map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer"
          >
            <Card className="h-full hover:shadow-lg transition-all duration-200 border-0 bg-white shadow-md">
              <div className="h-[270px] w-full relative">
                <Image
                  src={item.image}
                  alt={item.title[locale]}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {data.filters[item.category as keyof typeof data.filters]}
                  </Badge>
                  <span className="text-xs text-gray-500 flex items-center">
                    <Calendar size={12} className="mr-1" />
                    {new Date(item.date).toLocaleDateString()}
                  </span>
                </div>
                <CardTitle className="text-lg line-clamp-2">
                  {item.title[locale]}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {item.excerpt[locale]}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
    </div>
  );
};
