import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TLocale } from "@/types";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useLocale } from "next-intl";
import { Dispatch, SetStateAction } from "react";
import { NewsPageData } from "../../../constants";

type TProps = {
  setActiveFilter: Dispatch<SetStateAction<string>>;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  searchTerm: string;
  activeFilter: string;
};

export const FilterSection = ({
  setActiveFilter,
  setSearchTerm,
  activeFilter,
  searchTerm,
}: TProps) => {
  const locale = useLocale() as TLocale;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="flex flex-col sm:flex-row gap-4 items-center justify-between"
    >
      <div className="relative flex-1 max-w-md">
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={20}
        />
        <Input
          placeholder={NewsPageData[locale].searchPlaceholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {Object.entries(NewsPageData[locale].filters).map(([key, label]) => (
          <Button
            key={key}
            variant={activeFilter === key ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter(key)}
            className={
              activeFilter === key
                ? "bg-gradient-to-r from-blue-500 to-emerald-500 text-white"
                : ""
            }
          >
            {label}
          </Button>
        ))}
      </div>
    </motion.div>
  );
};
