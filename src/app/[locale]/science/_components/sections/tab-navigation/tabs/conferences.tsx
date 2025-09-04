"use client";
import { SciencePageData } from "@/app/[locale]/science/constants";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { TLocale } from "@/types";
import { motion } from "framer-motion";
import { Award, Calendar, FileText, MapPin, Users } from "lucide-react";
import { useLocale } from "next-intl";

export const ScienceConferencesTab = () => {
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
          {SciencePageData[locale].conferences.title}
        </h3>
        <p className="text-gray-600">
          {SciencePageData[locale].conferences.subtitle}
        </p>
      </motion.div>

      <div className="space-y-4">
        {SciencePageData[locale].conferences.items.map((conference, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            whileHover={{ scale: 1.01 }}
          >
            <Card className="hover:shadow-lg transition-all duration-200">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <Badge
                    variant={
                      conference.type === "Организатор" ||
                      conference.type === "Tashkilotchi" ||
                      conference.type === "Organizer"
                        ? "default"
                        : "secondary"
                    }
                    className="text-xs"
                  >
                    {conference.type}
                  </Badge>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <Calendar size={14} />
                    {conference.date}
                  </span>
                </div>
                <CardTitle className="text-lg leading-tight">
                  {conference.name}
                </CardTitle>
                <CardDescription>
                  <span className="flex items-center gap-2 mb-2 ">
                    <MapPin size={14} />
                    {conference.location}
                  </span>
                  {conference.participants && (
                    <span className="flex items-center gap-2 mb-2 ">
                      <Users size={14} />
                      {conference.participants}{" "}
                      {locale === "ru"
                        ? "участников"
                        : locale === "uz"
                        ? "ishtirokchi"
                        : "participants"}
                    </span>
                  )}
                  {conference.papers && (
                    <span className="flex items-center gap-2 mb-2 ">
                      <FileText size={14} />
                      {conference.papers}{" "}
                      {locale === "ru"
                        ? "статей"
                        : locale === "uz"
                        ? "maqola"
                        : "papers"}
                    </span>
                  )}
                  {conference.presentations && (
                    <span className="flex items-center gap-2 ">
                      <Award size={14} />
                      {conference.presentations}{" "}
                      {locale === "ru"
                        ? "презентация"
                        : locale === "uz"
                        ? "taqdimot"
                        : "presentation"}
                    </span>
                  )}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
