"use client";

import { projects, ProjectsPageData } from "@/app/[locale]/projects/constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TLocale } from "@/types";
import { TabsContent } from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
import { Badge, Calendar } from "lucide-react";
import { useLocale } from "next-intl";

export const ProjectsFutureTab = () => {
  const locale = useLocale() as TLocale;
  const projectData = ProjectsPageData[locale];

  return (
    <TabsContent value="future" className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects
          .filter((p) => p.future)
          .map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-dashed border-2 border-blue-200 bg-blue-50/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-lg flex items-center justify-center opacity-75">
                      <span className="text-white">
                        {project.name[locale][0]}
                      </span>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">
                      {projectData.soon}
                    </Badge>
                  </div>
                  <div>
                    <CardTitle className="text-lg">
                      {project.name[locale]}
                    </CardTitle>
                    <CardDescription>
                      {project.organization[locale]}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    {project.description[locale]}
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar size={14} />
                    <span>
                      {projectData.launch}:{" "}
                      {new Date(project.launchDate).toLocaleDateString(
                        locale === "ru"
                          ? "ru-RU"
                          : locale === "uz"
                          ? "uz-UZ"
                          : "en-US",
                        {
                          year: "numeric",
                          month: "long",
                        }
                      )}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
      </div>
    </TabsContent>
  );
};
