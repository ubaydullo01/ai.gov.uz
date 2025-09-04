"use client";

import { projects, ProjectsPageData } from "@/app/[locale]/projects/constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TLocale } from "@/types";
import { TabsContent } from "@radix-ui/react-tabs";
import { Star, TrendingUp } from "lucide-react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

type TProps = {
  topProjects: typeof projects;
};

export const ProjectsFeaturedTab = ({ topProjects }: TProps) => {
  const locale = useLocale() as TLocale;
  const projectData = ProjectsPageData[locale];
  const router = useRouter();
  return (
    <TabsContent value="featured" className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="text-yellow-500" />
            <span>{projectData.topProjects}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topProjects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => router.push(`/projects/${project.id}`)}
                className="flex items-center space-x-4 p-4 rounded-lg border hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center text-white text-sm">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h4 className="text-gray-900">{project.name[locale]}</h4>
                  <p className="text-sm text-gray-600">
                    {project.organization[locale]}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Star size={14} className="text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">
                    {project.rating}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );
};
