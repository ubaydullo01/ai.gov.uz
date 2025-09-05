"use client";
import { GraduationCap } from "lucide-react";
import {
  AiStudyBanner,
  Card,
  Statistics,
  StartCourse,
} from "./components/sections";
import { EducationPageData } from "./constants";
import { useLocale } from "next-intl";
import { TLocale } from "@/types";
const Education = () => {
  const locale = useLocale() as TLocale;

  return (
    <div>
      <div className="text-center">
        <div
          style={{ background: "linear-gradient(to right, #3b82f6, #10b981)" }}
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
        >
          <GraduationCap className="text-white" size={28} />
        </div>
        <h1 className="text-4xl mb-3.5">
          {EducationPageData[locale].hero.title}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {EducationPageData[locale].hero.subtitle}
        </p>
      </div>
      <AiStudyBanner />
      <Card />
      <Statistics />
      <StartCourse />
      <div className="w-full border-t border-gray-300 my-10" />

      <AiStudyBanner uStudy />
      <Card uStudy />
      <Statistics uStudy />
      <StartCourse uStudy />
    </div>
  );
};

export default Education;
