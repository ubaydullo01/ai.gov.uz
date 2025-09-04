"use client";
import { SciencePageData } from "@/app/[locale]/science/constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { TLocale } from "@/types";
import { motion } from "framer-motion";
import {
  Award,
  Building,
  FlaskConical,
  Globe,
  Microscope,
  TrendingUp,
} from "lucide-react";
import { useLocale } from "next-intl";

export const ScienceOverviewTab = () => {
  const locale = useLocale() as TLocale;

  return (
    <div className="space-y-8">
      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8"
      >
        <h3 className="text-xl text-gray-900 mb-4 flex items-center gap-2">
          <Microscope className="text-blue-500" size={24} />
          {locale === "ru"
            ? "О нас"
            : locale === "uz"
            ? "Biz haqimizda"
            : "About Us"}
        </h3>
        <span className="text-gray-700 leading-relaxed mb-6 block">
          {SciencePageData[locale].overview.description}
        </span>
        <span className="bg-white rounded-lg p-4 border-l-4 border-blue-500 block">
          <span className="text-gray-900 mb-2 block text-lg font-medium">
            {locale === "ru"
              ? "Наша миссия"
              : locale === "uz"
              ? "Bizning missiyamiz"
              : "Our Mission"}
          </span>
          <span className="text-gray-600 block">
            {SciencePageData[locale].overview.mission}
          </span>
        </span>
      </motion.div>

      {/* Research Areas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="text-xl text-gray-900 mb-6 flex items-center gap-2">
          <FlaskConical className="text-emerald-500" size={24} />
          {locale === "ru"
            ? "Направления исследований"
            : locale === "uz"
            ? "Tadqiqot yo'nalishlari"
            : "Research Areas"}
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title:
                locale === "ru"
                  ? "Машинное обучение"
                  : locale === "uz"
                  ? "Mashinali o'rganish"
                  : "Machine Learning",
              description:
                locale === "ru"
                  ? "Глубокие нейронные сети, обучение с подкреплением"
                  : locale === "uz"
                  ? "Chuqur neyron tarmoqlar, mukofotli o'rganish"
                  : "Deep neural networks, reinforcement learning",
              icon: TrendingUp,
            },
            {
              title:
                locale === "ru"
                  ? "Компьютерное зрение"
                  : locale === "uz"
                  ? "Kompyuter ko'rishi"
                  : "Computer Vision",
              description:
                locale === "ru"
                  ? "Медицинская диагностика, анализ изображений"
                  : locale === "uz"
                  ? "Tibbiy diagnostika, tasvir tahlili"
                  : "Medical diagnostics, image analysis",
              icon: Award,
            },
            {
              title:
                locale === "ru"
                  ? "Обработка языка"
                  : locale === "uz"
                  ? "Til ishlov berish"
                  : "Language Processing",
              description:
                locale === "ru"
                  ? "NLP для узбекского языка, машинный перевод"
                  : locale === "uz"
                  ? "O'zbek tili uchun NLP, mashinali tarjima"
                  : "NLP for Uzbek language, machine translation",
              icon: Globe,
            },
            {
              title:
                locale === "ru"
                  ? "Робототехника"
                  : locale === "uz"
                  ? "Robototexnika"
                  : "Robotics",
              description:
                locale === "ru"
                  ? "Автономные системы, промышленные роботы"
                  : locale === "uz"
                  ? "Avtonom tizimlar, sanoat robotlari"
                  : "Autonomous systems, industrial robots",
              icon: Building,
            },
          ].map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-200">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-emerald-100 rounded-lg flex items-center justify-center mb-2">
                    <area.icon className="text-blue-600" size={24} />
                  </div>
                  <CardTitle className="text-lg">{area.title}</CardTitle>
                  <CardDescription>{area.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
