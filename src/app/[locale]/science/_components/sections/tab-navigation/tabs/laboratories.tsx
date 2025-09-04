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
import { FlaskConical, User } from "lucide-react";
import { useLocale } from "next-intl";

export const ScienceLaboratoriesTab = () => {
  const locale = useLocale() as TLocale;

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h3 className="text-xl text-gray-900 mb-2">
          {SciencePageData[locale].laboratories.title}
        </h3>
        <p className="text-gray-600">
          {SciencePageData[locale].laboratories.subtitle}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {SciencePageData[locale].laboratories.items.map((lab, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="h-full hover:shadow-lg transition-all duration-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <FlaskConical className="text-blue-600" size={24} />
                </div>
                <CardTitle className="text-lg">{lab.name}</CardTitle>
                <CardDescription>
                  <span className="flex items-center gap-2 mb-3 ">
                    <User size={14} />
                    <span className="text-gray-700">{lab.head}</span>
                  </span>
                  <span className="text-gray-600 block mb-3">{lab.focus}</span>
                  <span className="flex gap-4 pt-2">
                    <span className="text-sm bg-blue-50 text-blue-700 px-2 py-1 rounded">
                      {lab.projects}{" "}
                      {locale === "ru"
                        ? "проектов"
                        : locale === "uz"
                        ? "loyihalar"
                        : "projects"}
                    </span>
                    <span className="text-sm bg-emerald-50 text-emerald-700 px-2 py-1 rounded">
                      {lab.publications}{" "}
                      {locale === "ru"
                        ? "публикаций"
                        : locale === "uz"
                        ? "nashrlar"
                        : "publications"}
                    </span>
                  </span>
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
