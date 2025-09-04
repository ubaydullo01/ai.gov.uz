"use client";
import { AnimatedCounter } from "@/components/shared";
import { TLocale } from "@/types";
import { motion } from "framer-motion";
import {
  Award,
  FlaskConical,
  GraduationCap,
  Sparkles,
  Users,
} from "lucide-react";
import { useLocale } from "next-intl";
import { SciencePageData } from "../../../constants";

export const ScienceStatisticsSection = () => {
  const locale = useLocale() as TLocale;
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 rounded-2xl p-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-emerald-500/5"></div>
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl text-gray-900 mb-2 flex items-center justify-center gap-2">
            <Sparkles className="text-blue-500" size={24} />
            {locale === "ru"
              ? "Наука в цифрах"
              : locale === "uz"
              ? "Fan raqamlarda"
              : "Science in Numbers"}
          </h2>
          <p className="text-gray-600">
            {locale === "ru"
              ? "Показатели развития научных исследований"
              : locale === "uz"
              ? "Ilmiy tadqiqotlar rivojlanish ko'rsatkichlari"
              : "Scientific research development indicators"}
          </p>
        </motion.div>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="group"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <FlaskConical className="text-white" size={28} />
            </div>
            <div className="text-3xl text-blue-600 mb-2">
              <AnimatedCounter
                end={SciencePageData[locale].stats.laboratories.number}
              />
            </div>
            <div className="text-gray-600">
              {SciencePageData[locale].stats.laboratories.label}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="group"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Award className="text-white" size={28} />
            </div>
            <div className="text-3xl text-emerald-600 mb-2">
              <AnimatedCounter
                end={SciencePageData[locale].stats.doctors.number}
              />
            </div>
            <div className="text-gray-600">
              {SciencePageData[locale].stats.doctors.label}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="group"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users className="text-white" size={28} />
            </div>
            <div className="text-3xl text-purple-600 mb-2">
              <AnimatedCounter
                end={SciencePageData[locale].stats.employees.number}
              />
            </div>
            <div className="text-gray-600">
              {SciencePageData[locale].stats.employees.label}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="group"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="text-white" size={28} />
            </div>
            <div className="text-3xl text-orange-600 mb-2">
              <AnimatedCounter end={SciencePageData[locale].stats.phd.number} />
            </div>
            <div className="text-gray-600">
              {SciencePageData[locale].stats.phd.label}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
