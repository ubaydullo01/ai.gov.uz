"use client";
import { Button } from "@/components/ui/button";
import { TLocale } from "@/types";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { UzbekistanAiData } from "../../../constants";

export const StrategySection = () => {
  const locale = useLocale() as TLocale;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative bg-gradient-to-r from-blue-50 to-emerald-50 rounded-3xl p-8 md:p-12 overflow-hidden"
    >
      <div className="relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
                    <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full h-80 relative"
          >
            <Image
              src="/images/strategy.jpg"
              alt="AI strategy"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="w-full h-80 object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl text-gray-900 mb-6"
            >
              {UzbekistanAiData[locale].strategy.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8"
            >
              {UzbekistanAiData[locale].strategy.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white"
                asChild
              >
                <Link
                  href="/files/Журнал ИИ.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {UzbekistanAiData[locale].hero.cta}{" "}
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </motion.div>
          </div>

        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-emerald-500/5 rounded-3xl"></div>
    </motion.section>
  );
};
