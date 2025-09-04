"use client";
import { AnimatedCounter } from "@/components/shared";
import { TLocale } from "@/types";
import { motion } from "framer-motion";
import { Award, Building2, LineChart, Sparkles, Users } from "lucide-react";
import { useLocale } from "next-intl";

export const StatisticsSection = () => {
  const locale = useLocale() as TLocale;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 rounded-2xl p-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-emerald-500/5"></div>
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl text-gray-900 mb-2 flex items-center justify-center gap-2">
            <Sparkles className="text-blue-500" size={24} />
            {locale === "uz" && "AI raqamlarda"}
            {locale === "ru" && "ИИ в цифрах"}
            {locale === "en" && "AI in Numbers"}
          </h2>
          <p className="text-gray-600">
            {locale === "uz" &&
              "O‘zbekistonda sun’iy intellekt ekotizimining o‘sishi"}
            {locale === "ru" &&
              "Рост экосистемы искусственного интеллекта в Узбекистане"}
            {locale === "en" &&
              "Growth of the artificial intelligence ecosystem in Uzbekistan"}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {/* 1. AI Readiness Index */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="group"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <LineChart className="text-white" size={28} />
            </div>
            <div className="text-3xl text-indigo-600 mb-2">
              <AnimatedCounter end={50} />
            </div>
            <div className="text-gray-600">
              {locale === "ru" && "в AI Readiness Index к 2030"}
              {locale === "uz" && "AI Readiness Index TOP-50, 2030 gacha"}
              {locale === "en" && "AI Readiness Index TOP-50 by 2030"}
            </div>
          </motion.div>

          {/* 2. $1.5B AI market */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="group"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Award className="text-white" size={28} />
            </div>
            <div className="text-3xl text-emerald-600 mb-2">
              <div className="flex items-center justify-center gap-2">
                $<AnimatedCounter end={1.5} decimals={1} />
                {locale === "ru" && "млрд."}
                {locale === "uz" && "mlrd."}
                {locale === "en" && "b."}
              </div>
            </div>
            <div className="text-gray-600">
              {locale === "ru" && "ИИ-продукты и услуги к 2030"}
              {locale === "uz" && "AI mahsulotlari va xizmatlari 2030 gacha"}
              {locale === "en" && "AI products & services by 2030"}
            </div>
          </motion.div>

          {/* 3. 1000 AI specialists */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="group"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users className="text-white" size={28} />
            </div>
            <div className="text-3xl text-blue-600 mb-2">
              <AnimatedCounter end={1000} />
            </div>
            <div className="text-gray-600">
              {locale === "ru" && "Подготовка специалистов по ИИ"}
              {locale === "uz" && "1000 ta AI mutaxassisi tayyorlanadi"}
              {locale === "en" && "AI specialists trained"}
            </div>
          </motion.div>

          {/* 4. 13 universities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="group"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Building2 className="text-white" size={28} />
            </div>
            <div className="text-3xl text-purple-600 mb-2">
              <AnimatedCounter end={13} />
            </div>
            <div className="text-gray-600">
              {locale === "ru" && "Университетов с ИИ программами"}
              {locale === "uz" && "AI dasturlari bo‘lgan universitetlar"}
              {locale === "en" && "Universities with AI programs"}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
