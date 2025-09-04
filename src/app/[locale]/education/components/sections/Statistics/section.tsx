import React from "react";
import { motion } from "framer-motion";
import { Users, BookOpen, TrendingUp, Star } from "lucide-react";
import { AnimatedCounter } from "@/components/shared";
import { useLocale } from "next-intl";
import { TLocale } from "@/types";
import { Props } from "../../../types";
import { EducationPageData, UStudyPageData } from "../../../constants";

const Statistics: React.FC<Props> = ({ uStudy }) => {
  const locale = useLocale() as TLocale;
  const data = uStudy
    ? UStudyPageData[locale].statistic
    : EducationPageData[locale].statistic;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className={`mb-11 p-6 rounded-2xl ${
        uStudy
          ? "bg-gradient-to-r from-purple-50 to-pink-50 border border-pink-100"
          : "bg-[oklch(.97_.014_254.604)]"
      }`}
    >
      <h2
        className={`text-center font-bold text-2xl sm:text-3xl md:text-4xl mb-6 ${
          uStudy ? "text-pink-700" : "text-gray-800"
        }`}
      >
        {data.title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="group text-center p-4">
          <div
            className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 ${
              uStudy
                ? "bg-gradient-to-r from-purple-500 to-pink-500"
                : "bg-gradient-to-r from-blue-500 to-blue-600"
            }`}
          >
            <Users className="text-white" size={28} />
          </div>
          <div
            className={`flex flex-wrap justify-center items-center text-xl sm:text-xl md:text-2xl lg:text-2xl font-semibold gap-1 sm:gap-2 ${
              uStudy ? "text-pink-600" : "text-blue-500"
            }`}
          >
            <AnimatedCounter end={!uStudy ? 5000 : 4780} suffix="+" />
            <span className="ml-1">{data.student}</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group text-center p-4">
          <div
            className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 ${
              uStudy
                ? "bg-gradient-to-r from-indigo-500 to-purple-500"
                : "bg-gradient-to-r from-green-500 to-green-600"
            }`}
          >
            <BookOpen className="text-white" size={28} />
          </div>
          <div
            className={`flex flex-wrap justify-center items-center text-xl sm:text-xl md:text-2xl lg:text-2xl font-semibold gap-1 sm:gap-2 ${
              uStudy ? "text-indigo-600" : "text-green-500"
            }`}
          >
            <AnimatedCounter end={!uStudy ? 50 : 63} suffix="+" />
            <span className="ml-1">{data.courses}</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="group text-center p-4">
          <div
            className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 ${
              uStudy
                ? "bg-gradient-to-r from-pink-500 to-red-500"
                : "bg-gradient-to-r from-violet-500 to-violet-600"
            }`}
          >
            <TrendingUp className="text-white" size={28} />
          </div>
          <div
            className={`flex flex-wrap justify-center items-center text-xl sm:text-xl md:text-2xl lg:text-2xl font-semibold gap-1 sm:gap-2 ${
              uStudy ? "text-pink-600" : "text-violet-500"
            }`}
          >
            <AnimatedCounter end={!uStudy ? 85 : 90} suffix="%" />
            <span className="ml-1">{data.complete}</span>
          </div>
        </div>

        {/* Card 4 */}
        <div className="group text-center p-4">
          <div
            className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 ${
              uStudy
                ? "bg-gradient-to-r from-yellow-400 to-pink-500"
                : "bg-gradient-to-r from-orange-500 to-orange-600"
            }`}
          >
            <Star className="text-white" size={28} />
          </div>
          <div
            className={`flex flex-wrap justify-center items-center text-xl sm:text-xl md:text-2xl lg:text-2xl font-semibold gap-1 sm:gap-2 ${
              uStudy ? "text-yellow-600" : "text-orange-500"
            }`}
          >
            <AnimatedCounter end={!uStudy ? 4.8 : 4.7} suffix="/5" />
            <span className="ml-1">{data.rating}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Statistics;
