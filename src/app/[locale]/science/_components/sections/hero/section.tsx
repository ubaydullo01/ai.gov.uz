"use client";
import { TLocale } from "@/types";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import Image from "next/image";
import { SciencePageData } from "../../../constants";

export const ScienceHeroSection = () => {
  const locale = useLocale() as TLocale;
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative bg-gradient-to-r from-blue-50 to-emerald-50 rounded-3xl p-8 md:p-12 overflow-hidden"
    >
      <div className="relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl text-gray-900 mb-6"
            >
              {SciencePageData[locale].title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8"
            >
              {SciencePageData[locale].subtitle}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full h-80 relative"
          >
            <Image
              src="https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Science Research"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-emerald-500/5 rounded-3xl"></div>
    </motion.section>
  );
};
