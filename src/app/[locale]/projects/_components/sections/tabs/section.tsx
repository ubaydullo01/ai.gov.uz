"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TLocale } from "@/types";
import {
  AlertCircle,
  CheckCircle,
  Clock,
  DollarSign,
  FileText,
  FlaskConical,
  GraduationCap,
  Heart,
  Mic,
  Microscope,
  Orbit,
  PlayCircle,
  Shield,
  UsersIcon,
  Wheat,
  Zap,
} from "lucide-react";
import { useLocale } from "next-intl";
import React, { useMemo, useState } from "react";
import { projects, ProjectsPageData } from "../../../constants";
import {
  ProjectsFeaturedTab,
  ProjectsFutureTab,
  ProjectsProjectsTab,
  ProjectsRegionsTab,
} from "./tabs";

export const toOptions = (obj: Record<string, string>) =>
  Object.keys(obj).map((k) => ({ key: k, label: obj[k] as string }));

export const categoryIcons: Record<string, React.ComponentType<any>> = {
  education: GraduationCap,
  security: Shield,
  voice: Mic,
  government: FileText,
  healthcare: Heart,
  finance: DollarSign,
  agriculture: Wheat,
  startups: UsersIcon,
  research: Microscope,
  pharmaceuticals: FlaskConical,
  aerospace: Orbit,
  energy: Zap,
};

export const statusIcons: Record<string, React.ComponentType<any>> = {
  active: CheckCircle,
  development: Clock,
  pilot: PlayCircle,
  completed: AlertCircle,
  planned: Clock,
};

export const statusColors: Record<string, string> = {
  active: "bg-green-100 text-green-800",
  development: "bg-blue-100 text-blue-800",
  pilot: "bg-yellow-100 text-yellow-800",
  completed: "bg-gray-100 text-gray-800",
  planned: "bg-purple-100 text-purple-800",
};

export const ProjectsTabsSection = () => {
  const locale = useLocale() as TLocale;
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = useMemo(() => {
    const filtered = projects.filter((project) => {
      const matchesSearch =
        project.name[locale]
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        project.description[locale]
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" || project.category === selectedCategory;

      let matchesTab = true;
      if (activeTab === "featured") {
        matchesTab = project.featured === true;
      } else if (activeTab === "future") {
        matchesTab = project.future === true;
      } else if (activeTab === "regions") {
        matchesTab = true;
      }

      return matchesSearch && matchesCategory && matchesTab;
    });

    return filtered;
  }, [projects, searchQuery, selectedCategory, activeTab, locale]);

  const topProjects = projects
    .filter((p) => p.featured)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  const regionalProjects = projects.reduce((acc, project) => {
    if (!acc[project.region]) {
      acc[project.region] = [];
    }
    acc[project.region].push(project);
    return acc;
  }, {} as Record<string, typeof projects>);

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="all">
          {ProjectsPageData[locale].allProjects}
        </TabsTrigger>
        <TabsTrigger value="featured">
          {ProjectsPageData[locale].featured}
        </TabsTrigger>
        <TabsTrigger value="regions">
          {ProjectsPageData[locale].regions}
        </TabsTrigger>
        <TabsTrigger value="future">
          {ProjectsPageData[locale].future}
        </TabsTrigger>
      </TabsList>

      <ProjectsProjectsTab
        filteredProjects={filteredProjects}
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        setSearchQuery={setSearchQuery}
        setSelectedCategory={setSelectedCategory}
      />
      <ProjectsFeaturedTab topProjects={topProjects} />
      <ProjectsRegionsTab regionalProjects={regionalProjects} />
      <ProjectsFutureTab />
    </Tabs>
  );
};
