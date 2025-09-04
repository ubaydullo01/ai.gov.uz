"use client";

import { TLocale } from "@/types";
import { formatDate } from "@/utils/formatDate";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useLocale } from "next-intl";
import Image from "next/image";
import { scienceNews } from "./constants";

export const NewsCarousel = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 4000, stopOnMouseEnter: true })]
  );

  const locale = useLocale() as TLocale;

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {scienceNews.map((article, idx) => (
          <div className="flex-[0_0_33.33%] p-3" key={idx}>
            <div className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden hover:shadow-lg transition-all duration-300 group h-full">
              <div className="relative overflow-hidden w-full h-52">
                <Image
                  src={article.imageUrl}
                  alt={article.title[locale]}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg leading-tight mb-3 group-hover:text-primary transition-colors duration-200 line-clamp-2">
                  {article.title[locale]}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt[locale]}
                </p>
                <div
                  className="mt-3 text-xs text-muted-foreground"
                  suppressHydrationWarning
                >
                  {formatDate(article.publishedAt, locale)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
