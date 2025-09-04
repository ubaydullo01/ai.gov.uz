"use client";
import { Button } from "@/components/ui/button";
import { TLocale } from "@/types";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { UzbekistanAiData } from "../../../constants";

export const RegulationsSection = () => {
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
              src="/images/regulatory.jpg"
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
              {UzbekistanAiData[locale].regulations.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-10"
            >
              <div>
                <Link
                  href={UzbekistanAiData[locale].documents.pp358.link}
                >
                {UzbekistanAiData[locale].documents.pp358.title}
                </Link>
              </div>
              <div>
                <Link
                  href={UzbekistanAiData[locale].documents.pkm425.link}

                >
                {UzbekistanAiData[locale].documents.pkm425.title}
                </Link>
              </div>
              
            </motion.div>
          </div>
                              

        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-emerald-500/5 rounded-3xl"></div>
    </motion.section>
  );
};
