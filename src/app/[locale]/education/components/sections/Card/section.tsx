import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Brain, Folder, Star } from "lucide-react";
import {
  Card as CardComponent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLocale } from "next-intl";
import { TLocale } from "@/types";
import { Props } from "../../../types";
import { EducationPageData, UStudyPageData } from "../../../constants";

const Card: React.FC<Props> = ({ uStudy }) => {
  const locale = useLocale() as TLocale;
  const data = uStudy
    ? UStudyPageData[locale].card
    : EducationPageData[locale].card;

  const cardsData = Object.entries(data.items).map(([key, value]) => ({
    key,
    title: value.title,
    description: value.description,
    icon:
      key === "quality" ? (
        <Star className="text-yellow-500" size={24} />
      ) : key === "languages" ? (
        <Brain className="text-indigo-600" size={24} />
      ) : key === "projects" ? (
        <Folder className="text-pink-600" size={24} />
      ) : (
        <BookOpen className="text-green-600" size={24} />
      ),
  }));

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mb-11"
    >
      <h2 className="text-2xl text-center mb-7">{data.whyAiStudy}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardsData.map((card, index) => (
          <motion.div
            key={card.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <CardComponent
              className={`cursor-pointer hover:shadow-lg transition-all duration-200 h-full ${
                uStudy
                  ? "bg-gradient-to-br from-purple-50 to-pink-50"
                  : "bg-white shadow-md"
              }`}
            >
              <CardHeader className="flex flex-col items-center text-center h-full">
                <div
                  className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                    uStudy
                      ? "bg-gradient-to-r from-purple-200 to-pink-200"
                      : "bg-gradient-to-r from-blue-100 to-emerald-100"
                  }`}
                >
                  {card.icon}
                </div>
                <div className="flex-1 flex flex-col">
                  <CardTitle className="text-lg min-h-[48px] flex items-center justify-center">
                    {card.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600 min-h-[64px] flex items-center justify-center">
                    {card.description}
                  </CardDescription>
                </div>
              </CardHeader>
            </CardComponent>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Card;
