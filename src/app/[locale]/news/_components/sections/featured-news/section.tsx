"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TLocale } from "@/types";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { useLocale } from "next-intl";
import Image from "next/image";
import { newsItems, NewsPageData } from "../../../constants";

type TProps = {
  filteredNews: typeof newsItems;
  activeFilter: string;
};

export const FeaturedNewsSection = ({ filteredNews, activeFilter }: TProps) => {
  const locale = useLocale() as TLocale;

  const category = filteredNews[0]
    .category as keyof (typeof NewsPageData)[typeof locale]["filters"];
  const label = NewsPageData[locale].filters[category];

  return (
    <>
      {" "}
      {activeFilter === "all" &&
        filteredNews.length > 0 &&
        filteredNews[0].featured && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="overflow-hidden shadow-lg">
              <div className="md:flex">
                <div className="md:max-w-1/2 w-full md:w-[500px] md:h-[490px] h-64 relative">
                  <Image
                    src={filteredNews[0].image}
                    alt={filteredNews[0].title[locale]}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover w-auto h-auto"
                  />
                </div>
                <CardContent className="md:w-1/2 p-6">
                  <Badge
                    variant="default"
                    className="mb-4 bg-gradient-to-r from-blue-500 to-emerald-500"
                  >
                    {label}
                  </Badge>
                  <h2 className="text-2xl text-gray-900 mb-4">
                    {filteredNews[0].title[locale]}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {filteredNews[0].excerpt[locale]}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center">
                      <Calendar size={16} className="mr-2" />
                      {new Date(filteredNews[0].date).toLocaleDateString()}
                    </span>
                    <Button variant="outline" className="hover:bg-blue-50">
                      {NewsPageData[locale].readMore}{" "}
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        )}
    </>
  );
};
