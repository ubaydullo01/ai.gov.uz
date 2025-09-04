"use client";

import { projects, ProjectsPageData } from "@/app/[locale]/projects/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TLocale } from "@/types";
import { TabsContent } from "@radix-ui/react-tabs";
import { AnimatePresence, motion } from "framer-motion";
import { Search, Star } from "lucide-react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import FilterTabs from "../../../filter-tabs/filter-tabs";
import { statusColors, toOptions } from "../section";

type TProps = {
  setSearchQuery: Dispatch<SetStateAction<string>>;
  searchQuery: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
  selectedCategory: string;
  filteredProjects: typeof projects;
};

export const ProjectsProjectsTab = ({
  filteredProjects,
  searchQuery,
  selectedCategory,
  setSearchQuery,
  setSelectedCategory,
}: TProps) => {
  const locale = useLocale() as TLocale;
  const projectData = ProjectsPageData[locale];
  const categoryOptions = toOptions(projectData.categories);
  const router = useRouter();

  return (
    <TabsContent value="all" className="space-y-6">
      {/* Filters as pill tabs */}
      <Card>
        <CardContent className="p-6 space-y-6">
          {/* Search */}
          <div className="space-y-2">
            <label className="text-sm text-gray-500">
              {projectData.search}
            </label>
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={16}
              />
              <Input
                placeholder={projectData.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Category */}
          <div className="space-y-2">
            <label className="text-sm text-gray-500">
              {projectData.category}
            </label>
            <FilterTabs
              value={selectedCategory}
              onChange={setSelectedCategory}
              ariaLabel="category"
              options={categoryOptions}
            />
          </div>
        </CardContent>
      </Card>

      {/* Projects Grid */}
      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ y: -5 }}
            >
              <Card
                className="h-full hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => router.push(`/projects/${project.id}`)}
              >
                <CardHeader className="space-y-4 flex-1">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
                      <span className="text-white">
                        {project.name[locale][0]}
                      </span>
                    </div>
                    {project.featured && (
                      <Badge className="bg-yellow-100 text-yellow-800">
                        <Star size={12} className="mr-1" />
                        {projectData.featured}
                      </Badge>
                    )}
                  </div>

                  <div>
                    <CardTitle className="text-lg">
                      {project.name[locale]}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {project.organization[locale]}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {project.description[locale]}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <Badge
                      className={
                        statusColors[project.status] ??
                        "bg-gray-100 text-gray-800"
                      }
                    >
                      {
                        projectData.statuses[
                          project.status as keyof typeof projectData.statuses
                        ]
                      }
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-blue-700 border-blue-200"
                    >
                      {
                        projectData.categories[
                          project.category as keyof typeof projectData.categories
                        ]
                      }
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
                      <span className="text-sm text-gray-600">
                        {project.rating}
                      </span>
                    </div>

                    <Button size="sm" variant="ghost">
                      {projectData.learnMore}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </TabsContent>
  );
};
