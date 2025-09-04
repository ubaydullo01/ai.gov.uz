import React from "react";
import { motion } from "framer-motion";
import { SquareArrowOutUpRight } from "lucide-react";
import { Props } from "../../../types";
import { useLocale } from "next-intl";
import { TLocale } from "@/types";
import { EducationPageData, UStudyPageData } from "../../../constants";

const StartCourse: React.FC<Props> = ({ uStudy }) => {
  const locale = useLocale() as TLocale;
  const data = uStudy
    ? UStudyPageData[locale].startCourse
    : EducationPageData[locale].startCourse;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className={`p-7 rounded-xl text-center cursor-pointer ${
        uStudy
          ? "bg-gradient-to-r from-[oklch(.65_.2_230)] to-[oklch(.7_.18_180)] text-white"
          : "bg-gradient-to-r from-[oklch(.623_.214_259.815)] to-[oklch(.696_.17_162.48)] text-white"
      }`}
    >
      <h2 className="text-3xl mb-3.5">{data.title}</h2>

      <p
        className={`text-xl mb-5 ${uStudy ? "text-gray-200" : "text-gray-200"}`}
      >
        {data.subtitle}
      </p>

      <button
        onClick={() => window.open(data.webSite, "_blank")}
        className={`mt-4 px-6 py-3 font-semibold rounded-xl flex items-center gap-2 mx-auto transition text-sm ${
          uStudy
            ? "bg-white text-[oklch(.25_.08_220)] hover:bg-gray-100"
            : "bg-white text-[oklch(.217_.057_256.31)] hover:bg-gray-100"
        }`}
      >
        <SquareArrowOutUpRight size={16} /> {data.button}
      </button>
    </motion.section>
  );
};

export default StartCourse;
