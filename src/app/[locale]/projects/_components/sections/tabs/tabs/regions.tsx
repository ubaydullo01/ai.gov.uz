"use client";

import { projects, ProjectsPageData } from "@/app/[locale]/projects/constants";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TLocale } from "@/types";
import { TabsContent } from "@radix-ui/react-tabs";
import { MapPin } from "lucide-react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

type TProps = {
  regionalProjects: Record<string, typeof projects>;
};

export const ProjectsRegionsTab = ({ regionalProjects }: TProps) => {
  const locale = useLocale() as TLocale;
  const projectData = ProjectsPageData[locale];
  const router = useRouter();
  return (
    <TabsContent value="regions" className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(regionalProjects).map(([region, projects]) => (
          <Card key={region}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="text-blue-500" />
                <span>{region}</span>
              </CardTitle>
              <CardDescription>
                {projects.length}{" "}
                {projects.length === 1
                  ? projectData.projectsCountOne
                  : projectData.projectsCountMany}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {projects.slice(0, 3).map((project) => (
                  <div
                    key={project.id}
                    onClick={() => router.push(`/projects/${project.id}`)}
                    className="p-3 rounded-lg border hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <h5 className="text-sm text-gray-900">
                      {project.name[locale]}
                    </h5>
                    <p className="text-xs text-gray-600">
                      {project.organization[locale]}
                    </p>
                  </div>
                ))}
                {projects.length > 3 && (
                  <div className="text-center">
                    <Button variant="ghost" size="sm">
                      Показать еще {projects.length - 3}
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </TabsContent>
  );
};
