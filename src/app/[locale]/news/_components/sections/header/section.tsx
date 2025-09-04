"use client";

import { TLocale } from "@/types";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { NewsPageData } from "../../../constants";

export const HeaderSection = () => {
  const locale = useLocale() as TLocale;
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <h1 className="text-4xl text-gray-900 mb-4">
        {NewsPageData[locale].title}
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        {NewsPageData[locale].subtitle}
      </p>
    </motion.section>
  );
};
