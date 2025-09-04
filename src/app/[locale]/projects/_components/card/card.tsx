"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "motion/react";
import { projects } from "../../constants";

interface ProjectCardProps {
  project: (typeof projects)[0];
  langPack: any;
  currentLanguage: "ru" | "uz" | "en";
  delay?: number;
  onClick: () => void;
}

export default function ProjectCard({
  project,
  langPack,
  currentLanguage,
  delay = 0,
  onClick,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ delay }}
      whileHover={{ y: -5 }}
    >
      <Card
        className="h-full hover:shadow-lg transition-shadow cursor-pointer"
        onClick={onClick}
      >
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <span className="text-white">
                {project.name[currentLanguage][0]}
              </span>
            </div>
            {project.featured && (
              <Badge className="bg-yellow-100 text-yellow-800">
                <Star size={12} className="mr-1" />
                {langPack.featured}
              </Badge>
            )}
          </div>
          <div>
            <CardTitle className="text-lg">
              {project.name[currentLanguage]}
            </CardTitle>
            <CardDescription className="text-sm">
              {project.organization[currentLanguage]}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-gray-600 line-clamp-3">
            {project.description[currentLanguage]}
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-blue-700 border-blue-200">
              {langPack.categories[project.category]}
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={14}
                    className={
                      star <= Math.round(project.rating)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">{project.rating}</span>
            </div>
            <Button size="sm" variant="ghost">
              {langPack.learnMore}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
