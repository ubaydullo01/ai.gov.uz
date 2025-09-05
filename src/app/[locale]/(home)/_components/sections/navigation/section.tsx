"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { TLocale } from "@/types";
import { motion } from "framer-motion";
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
          ([key, item], index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="h-full hover:scale-105 active:scale-95 transition-all duration-[0.6s]"
              >
                <Card
                  className="cursor-pointer h-full hover:shadow-lg transition-all duration-200 border-0 bg-white shadow-md"
                  onClick={() => router.push(`/${key}`)}
                >
                  <CardContent className="text-center p-6">
                    <div className="mx-auto w-12 h-12 bg-gradient-to-r from-blue-100 to-emerald-100 rounded-full flex items-center justify-center mb-4">
                      {Icon && <Icon className="text-blue-600" size={24} />}
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          }
        )}
      </div>
    </motion.section>
  );
};
