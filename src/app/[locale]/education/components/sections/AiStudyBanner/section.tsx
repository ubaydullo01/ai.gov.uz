import { motion } from "framer-motion";
import { CheckCircle, BookOpen, Globe, Sparkles } from "lucide-react";
import { EducationPageData, UStudyPageData } from "./../../../constants";
import { useLocale } from "next-intl";
import { TLocale } from "@/types";
import { Props } from "../../../types";

const AiStudyBanner: React.FC<Props> = ({ uStudy }) => {
  const locale = useLocale() as TLocale;
  const data = uStudy
    ? UStudyPageData[locale].banner
    : EducationPageData[locale].banner;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div
        className={`w-full rounded-2xl p-6 sm:p-8 md:p-10 lg:p-14 text-white mt-7 mb-10 ${
          uStudy
            ? "bg-gradient-to-r from-purple-600 to-pink-500"
            : "bg-gradient-to-r from-blue-600 to-green-500"
        }`}
      >
        <div
          className={`flex flex-col md:flex-row justify-between items-center gap-8 ${
            uStudy ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="flex-1 space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-yellow-300 text-lg sm:text-xl font-medium">
              <Sparkles size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>{data.recomendation}</span>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
              {data.title}
            </h2>

            <p className="text-white/90 max-w-lg mx-auto md:mx-0 text-sm sm:text-base md:text-lg">
              {data.text}
            </p>

            <a
              href={data.webSite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 font-medium px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-lg shadow hover:bg-gray-100 transition text-sm sm:text-base"
            >
              <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
              {data.link}
            </a>
          </div>
          <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 space-y-4 w-full">
            <div className="flex items-center gap-3">
              <BookOpen className="w-6 h-6 sm:w-7 sm:h-7" />
              <div>
                <h3 className="font-bold text-base sm:text-lg">
                  {data.platformName}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-white/80">
                  {data.AILearningPlatform}
                </p>
              </div>
            </div>

            <ul className="space-y-2 text-xs sm:text-sm md:text-base">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-300" />
                {data.certifiedCourses}
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-300" />
                {data.practicalProjects}
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-300" />
                {data.interfaceLanguages}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AiStudyBanner;
