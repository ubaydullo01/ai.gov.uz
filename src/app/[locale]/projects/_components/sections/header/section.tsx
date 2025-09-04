"use client";
import { TLocale } from "@/types";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { ProjectsPageData } from "../../../constants";

export const ProjectsHeaderSection = () => {
  const locale = useLocale() as TLocale;
  return (
    <div className="text-center space-y-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl text-gray-900"
      >
        {ProjectsPageData[locale].title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-xl text-gray-600 max-w-3xl mx-auto"
      >
        {ProjectsPageData[locale].subtitle}
      </motion.p>
    </div>
  );
};
