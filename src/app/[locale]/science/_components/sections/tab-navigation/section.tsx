"use client";
import { TLocale } from "@/types";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { useState } from "react";
import { SciencePageData } from "../../../constants";
import {
  ScienceArticlesTab,
  ScienceConferencesTab,
  ScienceLaboratoriesTab,
  ScienceOverviewTab,
} from "./tabs";

export const ScienceTabNavigationSection = () => {
  const locale = useLocale() as TLocale;
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <div className="flex flex-wrap gap-2 mb-8 p-1 bg-gray-100 rounded-lg">
        {Object.entries(SciencePageData[locale].tabs).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-4 py-2 rounded-md transition-all duration-200 flex-1 min-w-0 ${
              activeTab === key
                ? "bg-white text-blue-600 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === "overview" && <ScienceOverviewTab />}
        {activeTab === "articles" && <ScienceArticlesTab />}
        {activeTab === "laboratories" && <ScienceLaboratoriesTab />}
        {activeTab === "conferences" && <ScienceConferencesTab />}
      </motion.div>
    </motion.section>
  );
};
