"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TLocale } from "@/types";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useLocale } from "next-intl";
import { NewsPageData } from "../../../constants";

export const NewsletterSection = () => {
  const locale = useLocale() as TLocale;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8"
    >
      <div className="max-w-md mx-auto text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="text-white" size={32} />
        </div>
        <h3 className="text-xl text-gray-900 mb-2">
          {NewsPageData[locale].newsletter.title}
        </h3>
        <p className="text-gray-600 mb-6">
          {NewsPageData[locale].newsletter.description}
        </p>
        <div className="flex gap-2">
          <Input
            type="email"
            placeholder={NewsPageData[locale].newsletter.placeholder}
            className="flex-1"
          />
          <Button className="bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white">
            {NewsPageData[locale].newsletter.button}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
