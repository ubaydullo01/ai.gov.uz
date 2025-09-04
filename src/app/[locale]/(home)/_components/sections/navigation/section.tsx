"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TLocale } from "@/types";
import { motion } from "framer-motion";
import { BookOpen, Brain, Folder, MapPin, Newspaper } from "lucide-react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { HomePageData } from "../../../constants";

export const NavigationSection = () => {
  const locale = useLocale() as TLocale;
  const router = useRouter();
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
        {Object.entries(HomePageData[locale].navigation).map(
          ([key, nav], index) => (
            <motion.div
              key={key}
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
              <Card
                className="cursor-pointer hover:shadow-lg transition-all duration-200 border-0 bg-white shadow-md"
                onClick={() => router.push(`/${key}`)}
              >
                <CardContent className="text-center p-6">
                  <div className="mx-auto w-12 h-12 bg-gradient-to-r from-blue-100 to-emerald-100 rounded-full flex items-center justify-center mb-4">
                    {key === "news" && (
                      <Newspaper className="text-blue-600" size={24} />
                    )}
                    {key === "education" && (
                      <BookOpen className="text-emerald-600" size={24} />
                    )}
                    {key === "projects" && (
                      <Folder className="text-purple-600" size={24} />
                    )}
                    {key === "library" && (
                      <Brain className="text-blue-600" size={24} />
                    )}
                    {key === "map" && (
                      <MapPin className="text-emerald-600" size={24} />
                    )}
                  </div>
                  <CardTitle className="text-lg">{nav.title}</CardTitle>
                  <CardDescription>{nav.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          )
        )}
      </div>
    </motion.section>
  );
};
