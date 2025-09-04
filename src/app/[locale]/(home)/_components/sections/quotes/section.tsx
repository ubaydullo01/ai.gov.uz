"use client";
import { TLocale } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";
import { HomePageData } from "../../../constants";

export const QuotesSection = () => {
  const locale = useLocale() as TLocale;
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentQuoteIndex(
        (prev) => (prev + 1) % HomePageData[locale].expertQuotes.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, HomePageData[locale].expertQuotes.length]);

  const nextQuote = () => {
    setCurrentQuoteIndex(
      (prev) => (prev + 1) % HomePageData[locale].expertQuotes.length
    );
    setIsAutoPlaying(false);
  };

  const prevQuote = () => {
    setCurrentQuoteIndex(
      (prev) =>
        (prev - 1 + HomePageData[locale].expertQuotes.length) %
        HomePageData[locale].expertQuotes.length
    );
    setIsAutoPlaying(false);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl p-8 text-white relative overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-emerald-600/20"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Quote size={28} />
            <h3 className="text-xl">Мнения экспертов</h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={prevQuote}
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors duration-200"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={nextQuote}
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors duration-200"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuoteIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="min-h-[120px]"
          >
            <blockquote className="text-xl mb-4 leading-relaxed">
              &quot;{HomePageData[locale].expertQuotes[currentQuoteIndex].text}&quot;
            </blockquote>
            <footer>
              <cite className="font-medium text-lg">
                {HomePageData[locale].expertQuotes[currentQuoteIndex].author}
              </cite>
              <p className="text-blue-100 text-sm mt-1">
                {HomePageData[locale].expertQuotes[currentQuoteIndex].position}
              </p>
            </footer>
          </motion.div>
        </AnimatePresence>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {HomePageData[locale].expertQuotes.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentQuoteIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentQuoteIndex ? "bg-white w-6" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};
