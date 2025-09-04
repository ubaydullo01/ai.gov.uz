"use client";

import { TLocale } from "@/types";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { NewsCarousel } from "./news-carousel";

export const ScienceNewsSection = () => {
  const locale = useLocale() as TLocale;
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative py-6"
    >
      <div className="relative z-10 mb-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              {locale === "uz" && "So'nggi yangiliklar"}
              {locale === "ru" && "Последние новости"}
              {locale === "en" && "Latest News"}
            </h2>
            <p className="text-muted-foreground mt-1">
              {locale === "uz" &&
                "Ilm-fan va texnologiyalardagi so‘nggi yangiliklar"}
              {locale === "ru" && "Последние новости науки и технологий"}
              {locale === "en" && "Latest science and technology news"}
            </p>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10">{<NewsCarousel />}</div>
    </motion.section>
  );
};
