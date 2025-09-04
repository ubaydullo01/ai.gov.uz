"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TLocale } from "@/types";
import { motion } from "framer-motion";
import { Clock, ExternalLink, FileText, MapPin, Star } from "lucide-react";
import { useLocale } from "next-intl";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import {
  categoryIcons,
  statusColors,
  statusIcons,
} from "../_components/sections";
import { projects, ProjectsPageData } from "../constants";

const ProjectSinglePage = () => {
  const { id } = useParams();
  const router = useRouter();
  const locale = useLocale() as TLocale;
  const projectData = ProjectsPageData[locale];
  const selectedProject = projects.find((project) => project.id == id) as typeof projects[0];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={() => router.push("/projects")}
          className="flex items-center space-x-2"
        >
          <span>←</span>
          <span>{projectData.backToList}</span>
        </Button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        <div className="text-center space-y-4">
          <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center">
            <span className="text-white text-2xl">
              {selectedProject.name[locale][0]}
            </span>
          </div>
          <div>
            <h1 className="text-3xl text-gray-900 mb-2">
              {selectedProject.name[locale]}
            </h1>
            <p className="text-xl text-gray-600">
              {selectedProject.organization[locale]}
            </p>
          </div>
        </div>

        <Card>
          <CardContent className="p-8 space-y-6">
            <div>
              <h3 className="text-lg text-gray-900 mb-3">
                {projectData.projectDescription}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {selectedProject.description[locale]}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm text-gray-500 mb-1">
                    {projectData.projectCategory}
                  </h4>
                  <div className="flex items-center space-x-2">
                    {React.createElement(
                      categoryIcons[selectedProject.category] ?? FileText,
                      {
                        size: 16,
                        className: "text-blue-600",
                      }
                    )}
                    <span className="text-gray-900">
                      {
                        projectData.categories[
                          selectedProject.category as keyof typeof projectData.categories
                        ]
                      }
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm text-gray-500 mb-1">
                    {projectData.projectType}
                  </h4>
                  <span className="text-gray-900">
                    {
                      projectData.types[
                        selectedProject.type as keyof typeof projectData.types
                      ]
                    }
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm text-gray-500 mb-1">
                    {projectData.projectStatus}
                  </h4>
                  <div className="flex items-center space-x-2">
                    {React.createElement(
                      statusIcons[selectedProject.status] ?? Clock,
                      {
                        size: 16,
                        className: "text-green-600",
                      }
                    )}
                    <Badge
                      className={
                        statusColors[selectedProject.status] ??
                        "bg-gray-100 text-gray-800"
                      }
                    >
                      {
                        projectData.statuses[
                          selectedProject.status as keyof typeof projectData.statuses
                        ]
                      }
                    </Badge>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm text-gray-500 mb-1">
                    {projectData.regionLabel}
                  </h4>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} className="text-gray-500" />
                    <span className="text-gray-900">
                      {selectedProject.region}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {selectedProject.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="bg-blue-50 text-blue-700 border-blue-200"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {typeof selectedProject.users === "number" && (
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">
                    {projectData.activeUsers}
                  </span>
                  <span className="text-2xl text-gray-900">
                    {selectedProject.users.toLocaleString()} {projectData.users}
                  </span>
                </div>
              </div>
            )}

            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      className={
                        star <= Math.round(selectedProject.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  {selectedProject.rating}/5
                </span>
              </div>

              {selectedProject?.website && (
                <Button className="flex items-center space-x-2">
                  <ExternalLink size={16} />
                  <span>{projectData.website}</span>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ProjectSinglePage;
