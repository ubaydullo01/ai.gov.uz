"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale } from "next-intl";
import { PropsWithChildren } from "react";

export const AnimatePage = ({ children }: PropsWithChildren) => {
  const locale = useLocale();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={locale}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
